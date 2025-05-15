import { JUHUU } from "..";
import Service from "../index.service";

export default class ParameterHistoriesService extends Service {
  constructor(config: JUHUU.SetupConfig) {
    super(config);
  }

  async list(
    ParameterHistoryListParams: JUHUU.ParameterHistory.List.Params,
    ParameterHistoryListOptions?: JUHUU.ParameterHistory.List.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.ParameterHistory.List.Response>> {
    const queryArray: string[] = [];

    if (ParameterHistoryListOptions?.limit !== undefined) {
      queryArray.push("limit=" + ParameterHistoryListOptions.limit);
    }

    if (ParameterHistoryListParams?.propertyId !== undefined) {
      queryArray.push("propertyId=" + ParameterHistoryListParams.propertyId);
    }

    if (ParameterHistoryListOptions?.skip !== undefined) {
      queryArray.push("skip=" + ParameterHistoryListOptions.skip);
    }

    return await super.sendRequest<JUHUU.ParameterHistory.List.Response>(
      {
        method: "GET",
        url: "articles?" + queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: false,
      },
      ParameterHistoryListOptions
    );
  }

  async retrieve(
    ParameterHistoryRetrieveParams: JUHUU.ParameterHistory.Retrieve.Params,
    ParameterHistoryRetrieveOptions?: JUHUU.ParameterHistory.Retrieve.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.ParameterHistory.Retrieve.Response>> {
    const queryArray: string[] = [];

    if (ParameterHistoryRetrieveOptions?.expand !== undefined) {
      queryArray.push(
        "expand=" + ParameterHistoryRetrieveOptions.expand.join(",")
      );
    }

    return await super.sendRequest<JUHUU.ParameterHistory.Retrieve.Response>(
      {
        method: "GET",
        url:
          "articles/" +
          ParameterHistoryRetrieveParams.parameterHistoryId +
          "?" +
          queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: false,
      },
      ParameterHistoryRetrieveOptions
    );
  }
}
