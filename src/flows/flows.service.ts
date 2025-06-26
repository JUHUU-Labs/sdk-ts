import { JUHUU } from "..";
import Service from "../index.service";

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
          startBlock: FlowCreateParams.startBlock,
          blocks: FlowCreateParams.blocks,
          edges: FlowCreateParams.edges,
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
          startBlock: FlowUpdateParams.startBlock,
          blocks: FlowUpdateParams.blocks,
          edges: FlowUpdateParams.edges,
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
}
