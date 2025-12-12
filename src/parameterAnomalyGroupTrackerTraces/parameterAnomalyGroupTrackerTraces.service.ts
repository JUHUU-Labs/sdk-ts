import { JUHUU } from "..";
import Service from "../index.service";

export default class ParameterAnomalyGroupTrackerTracesService extends Service {
  constructor(config: JUHUU.SetupConfig) {
    super(config);
  }

  async list(
    ParameterAnomalyGroupTrackerTraceListParams: JUHUU.ParameterAnomalyGroupTrackerTrace.List.Params,
    ParameterAnomalyGroupTrackerTraceListOptions?: JUHUU.ParameterAnomalyGroupTrackerTrace.List.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.ParameterAnomalyGroupTrackerTrace.List.Response>> {
    const queryArray: string[] = [];

    if (ParameterAnomalyGroupTrackerTraceListParams?.propertyId !== undefined) {
      queryArray.push("propertyId=" + ParameterAnomalyGroupTrackerTraceListParams.propertyId);
    }

    if (ParameterAnomalyGroupTrackerTraceListParams?.parameterAnomalyGroupTrackerId !== undefined) {
      queryArray.push("parameterAnomalyGroupTrackerId=" + ParameterAnomalyGroupTrackerTraceListParams.parameterAnomalyGroupTrackerId);
    }

    if (ParameterAnomalyGroupTrackerTraceListOptions?.limit !== undefined) {
      queryArray.push("limit=" + ParameterAnomalyGroupTrackerTraceListOptions.limit);
    }

    if (ParameterAnomalyGroupTrackerTraceListOptions?.skip !== undefined) {
      queryArray.push("skip=" + ParameterAnomalyGroupTrackerTraceListOptions.skip);
    }

    return await super.sendRequest<JUHUU.ParameterAnomalyGroupTrackerTrace.List.Response>(
      {
        method: "GET",
        url: "parameterAnomalyGroupTrackerTraces?" + queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: false,
      },
      ParameterAnomalyGroupTrackerTraceListOptions
    );
  }

  async retrieve(
    ParameterAnomalyGroupTrackerTraceRetrieveParams: JUHUU.ParameterAnomalyGroupTrackerTrace.Retrieve.Params,
    ParameterAnomalyGroupTrackerTraceRetrieveOptions?: JUHUU.ParameterAnomalyGroupTrackerTrace.Retrieve.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.ParameterAnomalyGroupTrackerTrace.Retrieve.Response>> {
    return await super.sendRequest<JUHUU.ParameterAnomalyGroupTrackerTrace.Retrieve.Response>(
      {
        method: "GET",
        url: "parameterAnomalyGroupTrackerTraces/" + ParameterAnomalyGroupTrackerTraceRetrieveParams.parameterAnomalyGroupTrackerTraceId,
        body: undefined,
        authenticationNotOptional: false,
      },
      ParameterAnomalyGroupTrackerTraceRetrieveOptions
    );
  }

  async delete(
    ParameterAnomalyGroupTrackerTraceDeleteParams: JUHUU.ParameterAnomalyGroupTrackerTrace.Delete.Params,
    ParameterAnomalyGroupTrackerTraceDeleteOptions?: JUHUU.ParameterAnomalyGroupTrackerTrace.Delete.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.ParameterAnomalyGroupTrackerTrace.Delete.Response>> {
    return await super.sendRequest<JUHUU.ParameterAnomalyGroupTrackerTrace.Delete.Response>(
      {
        method: "DELETE",
        url: "parameterAnomalyGroupTrackerTraces/" + ParameterAnomalyGroupTrackerTraceDeleteParams.parameterAnomalyGroupTrackerTraceId,
        body: undefined,
        authenticationNotOptional: false,
      },
      ParameterAnomalyGroupTrackerTraceDeleteOptions
    );
  }
}
