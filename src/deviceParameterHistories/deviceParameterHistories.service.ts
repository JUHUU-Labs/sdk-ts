import { JUHUU } from "..";
import Service from "../index.service";

export default class DeviceParameterHistoriesService extends Service {
  constructor(config: JUHUU.SetupConfig) {
    super(config);
  }

  async list(
    DeviceParameterHistoryListParams: JUHUU.DeviceParameterHistory.List.Params,
    DeviceParameterHistoryListOptions?: JUHUU.DeviceParameterHistory.List.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.DeviceParameterHistory.List.Response>> {
    const queryArray: string[] = [];

    if (DeviceParameterHistoryListOptions?.limit !== undefined) {
      queryArray.push("limit=" + DeviceParameterHistoryListOptions.limit);
    }

    if (DeviceParameterHistoryListParams?.propertyId !== undefined) {
      queryArray.push(
        "propertyId=" + DeviceParameterHistoryListParams.propertyId
      );
    }

    if (DeviceParameterHistoryListOptions?.skip !== undefined) {
      queryArray.push("skip=" + DeviceParameterHistoryListOptions.skip);
    }

    return await super.sendRequest<JUHUU.DeviceParameterHistory.List.Response>(
      {
        method: "GET",
        url: "articles?" + queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: false,
      },
      DeviceParameterHistoryListOptions
    );
  }

  async retrieve(
    DeviceParameterHistoryRetrieveParams: JUHUU.DeviceParameterHistory.Retrieve.Params,
    DeviceParameterHistoryRetrieveOptions?: JUHUU.DeviceParameterHistory.Retrieve.Options
  ): Promise<
    JUHUU.HttpResponse<JUHUU.DeviceParameterHistory.Retrieve.Response>
  > {
    const queryArray: string[] = [];

    if (DeviceParameterHistoryRetrieveOptions?.expand !== undefined) {
      queryArray.push(
        "expand=" + DeviceParameterHistoryRetrieveOptions.expand.join(",")
      );
    }

    return await super.sendRequest<JUHUU.DeviceParameterHistory.Retrieve.Response>(
      {
        method: "GET",
        url:
          "articles/" +
          DeviceParameterHistoryRetrieveParams.deviceParameterHistoryId +
          "?" +
          queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: false,
      },
      DeviceParameterHistoryRetrieveOptions
    );
  }
}
