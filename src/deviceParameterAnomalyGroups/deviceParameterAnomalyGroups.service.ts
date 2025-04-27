import { JUHUU } from "..";
import Service from "../index.service";

export default class DeviceParameterAnomalyGroupsService extends Service {
  constructor(config: JUHUU.SetupConfig) {
    super(config);
  }

  async create(
    DeviceParameterAnomalyGroupCreateParams: JUHUU.DeviceParameterAnomalyGroup.Create.Params,
    DeviceParameterAnomalyGroupCreateOptions?: JUHUU.DeviceParameterAnomalyGroup.Create.Options
  ): Promise<
    JUHUU.HttpResponse<JUHUU.DeviceParameterAnomalyGroup.Create.Response>
  > {
    return await super.sendRequest<JUHUU.DeviceParameterAnomalyGroup.Create.Response>(
      {
        method: "POST",
        url: "deviceParameterAnomalyGroups",
        body: {
          propertyId: DeviceParameterAnomalyGroupCreateParams.propertyId,
          deviceParameterAnomalyGroupTrackerId:
            DeviceParameterAnomalyGroupCreateParams.deviceParameterAnomalyGroupTrackerId,
        },
        authenticationNotOptional: true,
      },
      DeviceParameterAnomalyGroupCreateOptions
    );
  }

  async list(
    DeviceParameterAnomalyGroupListParams: JUHUU.DeviceParameterAnomalyGroup.List.Params,
    DeviceParameterAnomalyGroupListOptions?: JUHUU.DeviceParameterAnomalyGroup.List.Options
  ): Promise<
    JUHUU.HttpResponse<JUHUU.DeviceParameterAnomalyGroup.List.Response>
  > {
    const queryArray: string[] = [];

    if (DeviceParameterAnomalyGroupListOptions?.limit !== undefined) {
      queryArray.push("limit=" + DeviceParameterAnomalyGroupListOptions.limit);
    }

    if (DeviceParameterAnomalyGroupListParams?.propertyId !== undefined) {
      queryArray.push(
        "propertyId=" + DeviceParameterAnomalyGroupListParams.propertyId
      );
    }

    if (DeviceParameterAnomalyGroupListOptions?.skip !== undefined) {
      queryArray.push("skip=" + DeviceParameterAnomalyGroupListOptions.skip);
    }

    return await super.sendRequest<JUHUU.DeviceParameterAnomalyGroup.List.Response>(
      {
        method: "GET",
        url: "articles?" + queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: false,
      },
      DeviceParameterAnomalyGroupListOptions
    );
  }

  async retrieve(
    DeviceParameterAnomalyGroupRetrieveParams: JUHUU.DeviceParameterAnomalyGroup.Retrieve.Params,
    DeviceParameterAnomalyGroupRetrieveOptions?: JUHUU.DeviceParameterAnomalyGroup.Retrieve.Options
  ): Promise<
    JUHUU.HttpResponse<JUHUU.DeviceParameterAnomalyGroup.Retrieve.Response>
  > {
    const queryArray: string[] = [];

    if (DeviceParameterAnomalyGroupRetrieveOptions?.expand !== undefined) {
      queryArray.push(
        "expand=" + DeviceParameterAnomalyGroupRetrieveOptions.expand.join(",")
      );
    }

    return await super.sendRequest<JUHUU.DeviceParameterAnomalyGroup.Retrieve.Response>(
      {
        method: "GET",
        url:
          "articles/" +
          DeviceParameterAnomalyGroupRetrieveParams.deviceParameterAnomalyGroupId +
          "?" +
          queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: false,
      },
      DeviceParameterAnomalyGroupRetrieveOptions
    );
  }

  async update(
    DeviceParameterAnomalyGroupUpdateParams: JUHUU.DeviceParameterAnomalyGroup.Update.Params,
    DeviceParameterAnomalyGroupUpdateOptions?: JUHUU.DeviceParameterAnomalyGroup.Update.Options
  ): Promise<
    JUHUU.HttpResponse<JUHUU.DeviceParameterAnomalyGroup.Update.Response>
  > {
    return await super.sendRequest<JUHUU.DeviceParameterAnomalyGroup.Update.Response>(
      {
        method: "PATCH",
        url:
          "deviceParameterAnomalyGroups/" +
          DeviceParameterAnomalyGroupUpdateParams.deviceParameterAnomalyGroupId,
        body: {
          deviceParameterAnomalyGroupId:
            DeviceParameterAnomalyGroupUpdateParams.deviceParameterAnomalyGroupId,
        },
        authenticationNotOptional: true,
      },
      DeviceParameterAnomalyGroupUpdateOptions
    );
  }

  async delete(
    DeviceParameterAnomalyGroupDeleteParams: JUHUU.DeviceParameterAnomalyGroup.Delete.Params,
    DeviceParameterAnomalyGroupDeleteOptions?: JUHUU.DeviceParameterAnomalyGroup.Delete.Options
  ): Promise<
    JUHUU.HttpResponse<JUHUU.DeviceParameterAnomalyGroup.Delete.Response>
  > {
    return await super.sendRequest<JUHUU.DeviceParameterAnomalyGroup.Delete.Response>(
      {
        method: "DELETE",
        url:
          "deviceParameterAnomalyGroups/" +
          DeviceParameterAnomalyGroupDeleteParams.deviceParameterAnomalyGroupId,
        authenticationNotOptional: true,
        body: undefined,
      },
      DeviceParameterAnomalyGroupDeleteOptions
    );
  }
}
