import { JUHUU } from "..";
import Service from "../index.service";

export default class FlowTracesService extends Service {
  constructor(config: JUHUU.SetupConfig) {
    super(config);
  }

  async list(
    FlowTraceListParams: JUHUU.FlowTrace.List.Params,
    FlowTraceListOptions?: JUHUU.FlowTrace.List.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.FlowTrace.List.Response>> {
    const queryArray: string[] = [];

    if (FlowTraceListParams?.propertyId !== undefined) {
      queryArray.push("propertyId=" + FlowTraceListParams.propertyId);
    }

    if (FlowTraceListParams?.flowId !== undefined) {
      queryArray.push("flowId=" + FlowTraceListParams.flowId);
    }

    if (FlowTraceListOptions?.limit !== undefined) {
      queryArray.push("limit=" + FlowTraceListOptions.limit);
    }

    if (FlowTraceListOptions?.skip !== undefined) {
      queryArray.push("skip=" + FlowTraceListOptions.skip);
    }

    return await super.sendRequest<JUHUU.FlowTrace.List.Response>(
      {
        method: "GET",
        url: "flowTraces?" + queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: false,
      },
      FlowTraceListOptions
    );
  }

  async retrieve(
    FlowTraceRetrieveParams: JUHUU.FlowTrace.Retrieve.Params,
    FlowTraceRetrieveOptions?: JUHUU.FlowTrace.Retrieve.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.FlowTrace.Retrieve.Response>> {
    return await super.sendRequest<JUHUU.FlowTrace.Retrieve.Response>(
      {
        method: "GET",
        url: "flowTraces/" + FlowTraceRetrieveParams.flowTraceId,
        body: undefined,
        authenticationNotOptional: false,
      },
      FlowTraceRetrieveOptions
    );
  }
}
