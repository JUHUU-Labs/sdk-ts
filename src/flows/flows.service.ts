import { JUHUU } from "..";
import Service from "../index.service";
import jsonLogic from "json-logic-js";
import {
  FlowBlock,
  FlowEdge,
  StartCustomBlock,
  IfBlock,
  EndCustomBlock,
  FlowExecuteBlock,
  FlowLog,
  FlowBlockInput,
  ConstNumberBlock,
  ConstTextBlock,
  ConstBooleanBlock,
} from "../types/types";

type BlockExecutor = (
  inputs: FlowBlockInput,
  block: FlowBlock,
  context: Record<string, any>
) => Promise<{
  output: Record<string, any>;
  logArray?: FlowLog[];
  flowBranch?: string | null;
}>;

export default class FlowsService extends Service {
  constructor(config: JUHUU.SetupConfig) {
    super(config);
  }

  async create(
    FlowCreateParams: JUHUU.Flow.Create.Params,
    FlowCreateOptions?: JUHUU.Flow.Create.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Flow.Create.Response>> {
    return await super.sendRequest<JUHUU.Flow.Create.Response>(
      {
        method: "POST",
        url: "flows",
        body: {
          name: FlowCreateParams.name,
          startNode: FlowCreateParams.startNode,
          nodeArray: FlowCreateParams.nodeArray,
          edgeArray: FlowCreateParams.edgeArray,
          propertyId: FlowCreateParams.propertyId,
        },
        authenticationNotOptional: true,
      },
      FlowCreateOptions
    );
  }

  async list(
    FlowListParams: JUHUU.Flow.List.Params,
    FlowListOptions?: JUHUU.Flow.List.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Flow.List.Response>> {
    const queryArray: string[] = [];

    if (FlowListParams?.propertyId !== undefined) {
      queryArray.push("propertyId=" + FlowListParams.propertyId);
    }

    if (FlowListOptions?.limit !== undefined) {
      queryArray.push("limit=" + FlowListOptions.limit);
    }

    if (FlowListOptions?.skip !== undefined) {
      queryArray.push("skip=" + FlowListOptions.skip);
    }

    return await super.sendRequest<JUHUU.Flow.List.Response>(
      {
        method: "GET",
        url: "flows?" + queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: false,
      },
      FlowListOptions
    );
  }

  async retrieve(
    FlowRetrieveParams: JUHUU.Flow.Retrieve.Params,
    FlowRetrieveOptions?: JUHUU.Flow.Retrieve.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Flow.Retrieve.Response>> {
    return await super.sendRequest<JUHUU.Flow.Retrieve.Response>(
      {
        method: "GET",
        url: "flows/" + FlowRetrieveParams.flowId,
        body: undefined,
        authenticationNotOptional: false,
      },
      FlowRetrieveOptions
    );
  }

  async update(
    FlowUpdateParams: JUHUU.Flow.Update.Params,
    FlowUpdateOptions?: JUHUU.Flow.Update.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Flow.Update.Response>> {
    return await super.sendRequest<JUHUU.Flow.Update.Response>(
      {
        method: "PATCH",
        url: "flows/" + FlowUpdateParams.flowId,
        body: {
          name: FlowUpdateParams.name,
          startNode: FlowUpdateParams.startNode,
          nodeArray: FlowUpdateParams.nodeArray,
          edgeArray: FlowUpdateParams.edgeArray,
        },
        authenticationNotOptional: true,
      },
      FlowUpdateOptions
    );
  }

  async delete(
    FlowDeleteParams: JUHUU.Flow.Delete.Params,
    FlowDeleteOptions?: JUHUU.Flow.Delete.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Flow.Delete.Response>> {
    return await super.sendRequest<JUHUU.Flow.Delete.Response>(
      {
        method: "DELETE",
        url: "flows/" + FlowDeleteParams.flowId,
        authenticationNotOptional: true,
        body: undefined,
      },
      FlowDeleteOptions
    );
  }

  async execute(
    FlowExecuteParams: JUHUU.Flow.Execute.Params,
    FlowExecuteOptions?: JUHUU.Flow.Execute.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Flow.Execute.Response>> {
    return await super.sendRequest<JUHUU.Flow.Execute.Response>(
      {
        method: "POST",
        url: "flows/" + FlowExecuteParams.flowId + "/execute",
        body: {
          input: FlowExecuteParams.input,
        },
        authenticationNotOptional: true,
      },
      FlowExecuteOptions
    );
  }

  private areInputsAvailable(
    block: FlowBlock,
    outputStore: Record<string, Record<string, any>>,
    edgeArray: FlowEdge[]
  ): boolean {
    if (block.in === null || block.in === undefined) {
      return true;
    }

    return Object.values(block.in).every((edgeId) => {
      const edge = edgeArray.find((e) => e.id === edgeId);
      if (edge === undefined) {
        return false;
      }

      if (edge.type === "control") {
        return true;
      }
      const srcOutputs = outputStore[edge.from.blockId];
      return (
        srcOutputs !== null &&
        srcOutputs !== undefined &&
        edge.from.output in srcOutputs
      );
    });
  }

  private resolveInputs(
    block: FlowBlock,
    outputStore: Record<string, Record<string, any>>,
    edgeArray: FlowEdge[]
  ): Record<string, any> {
    const inputs: Record<string, any> = {};

    if (block.in === undefined) {
      return inputs;
    }

    for (const [inputName, edgeId] of Object.entries(block.in)) {
      const edge = edgeArray.find((e) => e.id === edgeId);
      if (edge === undefined) {
        throw new Error(
          `No edge found with id ${edgeId} for input ${inputName}`
        );
      }

      if (edge.type === "control") {
        continue;
      }

      const srcOutputs = outputStore[edge.from.blockId];
      if (
        srcOutputs === undefined ||
        edge.from.output in srcOutputs === false
      ) {
        throw new Error(
          `Missing output '${edge.from.output}' from block '${edge.from.blockId}'`
        );
      }

      inputs[inputName] = srcOutputs[edge.from.output];
    }

    return inputs;
  }

  private isInputConnected(block: FlowBlock, inputName: string): boolean {
    if (block.in === undefined || block.in === null) {
      return false;
    }

    return (block as any).in[inputName] !== undefined;
  }

  private blockExecutors: Partial<Record<FlowBlock["type"], BlockExecutor>> = {
    "start.custom": async (_inputs, block, context) => {
      if (block.type !== "start.custom") {
        throw new Error(
          `Invalid block type '${block.type}' for start.custom executor`
        );
      }

      const defs = (block.data.inputParamDefinitionArray ?? []) as Array<{
        name: string;
        required: boolean;
      }>;

      if (defs.length === 0) {
        return { output: {} };
      }

      const outputs: Record<string, any> = {};

      for (const param of defs) {
        const value = (context as any)[param.name];

        if (value === undefined && param.required) {
          throw new Error(`Missing required input parameter '${param.name}'`);
        }

        outputs[param.name] = value;
      }

      return {
        output: outputs,
      };
    },

    "control.if": async (inputs, block) => {
      const fb = block as IfBlock;
      const result = jsonLogic.apply(fb.data.condition, inputs);
      return {
        output: {},
        flowBranch: result === true ? "true" : "false",
      };
    },

    "flow.execute": async (inputs, block) => {
      const fb = block as FlowExecuteBlock;

      const finalFlowId = this.isInputConnected(fb, "flowId")
        ? (inputs as any).flowId
        : fb.data?.flowId;

      if (finalFlowId === undefined || finalFlowId === null) {
        throw new Error(
          `Missing required input 'flowId' for block type '${block.type}'`
        );
      }

      const execInput: Record<string, any> = {};
      for (const [key, value] of Object.entries(
        inputs as Record<string, any>
      )) {
        if (key === "flowId") {
          continue;
        }
        execInput[key] = value;
      }

      const response = await this.execute({
        flowId: finalFlowId,
        input: execInput,
      });

      if (response.ok === false) {
        throw new Error(
          `Failed to execute flow: ${response.data?.message || "Unknown error"}`
        );
      }

      return { output: response.data.output };
    },

    "end.custom": async (inputs) => {
      return { output: { ...inputs } };
    },

    "const.number": async (_inputs, block) => {
      const { data } = block as ConstNumberBlock;
      return { output: { value: data?.value } };
    },

    "const.text": async (_inputs, block) => {
      const { data } = block as ConstTextBlock;
      return { output: { value: data?.value } };
    },

    "const.boolean": async (_inputs, block) => {
      const { data } = block as ConstBooleanBlock;
      return { output: { value: data?.value } };
    },
  };

  async executeLocally(
    FlowExecuteLocallyParams: JUHUU.Flow.ExecuteLocally.Params,
    FlowExecuteLocallyOptions?: JUHUU.Flow.ExecuteLocally.Options
  ): Promise<JUHUU.Flow.ExecuteLocally.Response> {
    const logArray: FlowLog[] = [];
    logArray.push({
      createdAt: new Date(),
      message: `Starting local execution of flow '${FlowExecuteLocallyParams.flowId}'`,
      severity: "info",
    });

    try {
      const flowResponse = await this.retrieve({
        flowId: FlowExecuteLocallyParams.flowId,
      });

      if (!flowResponse.ok) {
        throw new Error(
          `Failed to retrieve flow: ${
            flowResponse.data?.message || "Unknown error"
          }`
        );
      }

      const flow = flowResponse.data.flow;

      const blocksById = new Map(
        flow.nodeArray.map((b: FlowBlock) => [b.id, b] as [string, FlowBlock])
      );
      blocksById.set(flow.startNode.id, flow.startNode);

      const edgeArray = flow.edgeArray;
      const outputStore: Record<string, Record<string, any>> = {};

      const runBlock = async (block: FlowBlock): Promise<string | null> => {
        logArray.push({
          createdAt: new Date(),
          message: `Running block ${block.type} (${block.id})`,
          severity: "info",
        });

        const inputs = this.resolveInputs(block, outputStore, edgeArray);
        const executor = this.blockExecutors[block.type];
        if (executor === undefined || executor === null) {
          throw new Error(
            `Block type '${block.type}' is not implemented in the local executor`
          );
        }

        const raw = await executor(
          inputs,
          block,
          FlowExecuteLocallyParams.input ?? {}
        );

        const { flowBranch, output } = raw;
        outputStore[block.id] = output;

        if (raw.logArray !== undefined) {
          logArray.push(...raw.logArray);
        }

        logArray.push({
          createdAt: new Date(),
          message: `Block ${block.type} (${block.id}) executed successfully`,
          severity: "info",
        });

        return flowBranch ?? null;
      };

      const getNext = (
        fromId: string,
        branch: string | null
      ): FlowBlock | null => {
        let ce = edgeArray.find(
          (e: FlowEdge) =>
            e.type === "control" &&
            e.from.blockId === fromId &&
            (e.from.output ?? null) === branch
        );
        if ((ce === null || ce === undefined) && branch === null) {
          ce = edgeArray.find(
            (e: FlowEdge) => e.type === "control" && e.from.blockId === fromId
          );
        }
        if (ce === null || ce === undefined) {
          return null;
        }
        return blocksById.get(ce.to.blockId) ?? null;
      };

      if (flow.startNode.type.startsWith("start.") === false) {
        throw new Error(
          `Flow ${FlowExecuteLocallyParams.flowId} has an invalid start block that is not of type 'start.'`
        );
      }

      let current = flow.startNode;

      await runBlock(current);
      const next = getNext(current.id, null);

      if (next === null) {
        return {
          output: {},
          logArray,
        };
      }

      current = next;

      while (current.type.startsWith("end.") === false) {
        const branch = await runBlock(current);
        const next = getNext(current.id, branch);

        if (next === null) {
          return {
            output: {},
            logArray,
          };
        }

        current = next;
      }

      await runBlock(current);
      const endBlock = current as Extract<FlowBlock, { type: "end.custom" }>;
      const result: Record<string, any> = {};
      const definitions = endBlock.data.outputParamDefinitionArray ?? [];
      for (const def of definitions) {
        result[def.name] = outputStore[current.id]?.[def.name] ?? null;
      }

      return {
        output: result,
        logArray: logArray,
      };
    } catch (error) {
      logArray.push({
        createdAt: new Date(),
        message: `Flow execution failed: ${
          error instanceof Error ? error.message : String(error)
        }`,
        severity: "error",
      });
      return {
        output: {},
        logArray,
      };
    }
  }
}
