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

    if (ParameterHistoryListParams?.propertyId !== undefined) {
      queryArray.push("propertyId=" + ParameterHistoryListParams.propertyId);
    }

    if (ParameterHistoryListParams?.parameterId !== undefined) {
      queryArray.push("parameterId=" + ParameterHistoryListParams.parameterId);
    }

    if (ParameterHistoryListParams?.cursor !== undefined) {
      queryArray.push("cursor=" + ParameterHistoryListParams.cursor);
    }

    if (ParameterHistoryListParams?.createdAt?.gte !== undefined) {
      queryArray.push(
        "createdAt[gte]=" + ParameterHistoryListParams.createdAt.gte
      );
    }

    if (ParameterHistoryListParams?.createdAt?.lte !== undefined) {
      queryArray.push(
        "createdAt[lte]=" + ParameterHistoryListParams.createdAt.lte
      );
    }

    if (ParameterHistoryListParams?.createdAt?.gt !== undefined) {
      queryArray.push(
        "createdAt[gt]=" + ParameterHistoryListParams.createdAt.gt
      );
    }

    if (ParameterHistoryListParams?.createdAt?.lt !== undefined) {
      queryArray.push(
        "createdAt[lt]=" + ParameterHistoryListParams.createdAt.lt
      );
    }

    if (ParameterHistoryListOptions?.limit !== undefined) {
      queryArray.push("limit=" + ParameterHistoryListOptions.limit);
    }

    return await super.sendRequest<JUHUU.ParameterHistory.List.Response>(
      {
        method: "GET",
        url: "parameterHistories?" + queryArray.join("&"),
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
          "parameterHistories/" +
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
