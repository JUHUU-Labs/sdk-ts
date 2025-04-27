import { JUHUU } from "..";
import Service from "../index.service";

export default class DeviceParameterAnomalyGroupTrackersService extends Service {
  constructor(config: JUHUU.SetupConfig) {
    super(config);
  }

  async create(
    DeviceParameterAnomalyGroupTrackerCreateParams: JUHUU.DeviceParameterAnomalyGroupTracker.Create.Params,
    DeviceParameterAnomalyGroupTrackerCreateOptions?: JUHUU.DeviceParameterAnomalyGroupTracker.Create.Options
  ): Promise<
    JUHUU.HttpResponse<JUHUU.DeviceParameterAnomalyGroupTracker.Create.Response>
  > {
    return await super.sendRequest<JUHUU.DeviceParameterAnomalyGroupTracker.Create.Response>(
      {
        method: "POST",
        url: "deviceParameterAnomalyGroupTrackers",
        body: {
          propertyId: DeviceParameterAnomalyGroupTrackerCreateParams.propertyId,
        },
        authenticationNotOptional: true,
      },
      DeviceParameterAnomalyGroupTrackerCreateOptions
    );
  }

  async list(
    DeviceParameterAnomalyGroupTrackerListParams: JUHUU.DeviceParameterAnomalyGroupTracker.List.Params,
    DeviceParameterAnomalyGroupTrackerListOptions?: JUHUU.DeviceParameterAnomalyGroupTracker.List.Options
  ): Promise<
    JUHUU.HttpResponse<JUHUU.DeviceParameterAnomalyGroupTracker.List.Response>
  > {
    const queryArray: string[] = [];

    if (DeviceParameterAnomalyGroupTrackerListOptions?.limit !== undefined) {
      queryArray.push(
        "limit=" + DeviceParameterAnomalyGroupTrackerListOptions.limit
      );
    }

    if (
      DeviceParameterAnomalyGroupTrackerListParams?.propertyId !== undefined
    ) {
      queryArray.push(
        "propertyId=" + DeviceParameterAnomalyGroupTrackerListParams.propertyId
      );
    }

    if (DeviceParameterAnomalyGroupTrackerListOptions?.skip !== undefined) {
      queryArray.push(
        "skip=" + DeviceParameterAnomalyGroupTrackerListOptions.skip
      );
    }

    return await super.sendRequest<JUHUU.DeviceParameterAnomalyGroupTracker.List.Response>(
      {
        method: "GET",
        url: "articles?" + queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: false,
      },
      DeviceParameterAnomalyGroupTrackerListOptions
    );
  }

  async retrieve(
    DeviceParameterAnomalyGroupTrackerRetrieveParams: JUHUU.DeviceParameterAnomalyGroupTracker.Retrieve.Params,
    DeviceParameterAnomalyGroupTrackerRetrieveOptions?: JUHUU.DeviceParameterAnomalyGroupTracker.Retrieve.Options
  ): Promise<
    JUHUU.HttpResponse<JUHUU.DeviceParameterAnomalyGroupTracker.Retrieve.Response>
  > {
    const queryArray: string[] = [];

    if (
      DeviceParameterAnomalyGroupTrackerRetrieveOptions?.expand !== undefined
    ) {
      queryArray.push(
        "expand=" +
          DeviceParameterAnomalyGroupTrackerRetrieveOptions.expand.join(",")
      );
    }

    return await super.sendRequest<JUHUU.DeviceParameterAnomalyGroupTracker.Retrieve.Response>(
      {
        method: "GET",
        url:
          "articles/" +
          DeviceParameterAnomalyGroupTrackerRetrieveParams.deviceParameterAnomalyGroupTrackerId +
          "?" +
          queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: false,
      },
      DeviceParameterAnomalyGroupTrackerRetrieveOptions
    );
  }

  async update(
    DeviceParameterAnomalyGroupTrackerUpdateParams: JUHUU.DeviceParameterAnomalyGroupTracker.Update.Params,
    DeviceParameterAnomalyGroupTrackerUpdateOptions?: JUHUU.DeviceParameterAnomalyGroupTracker.Update.Options
  ): Promise<
    JUHUU.HttpResponse<JUHUU.DeviceParameterAnomalyGroupTracker.Update.Response>
  > {
    return await super.sendRequest<JUHUU.DeviceParameterAnomalyGroupTracker.Update.Response>(
      {
        method: "PATCH",
        url:
          "deviceParameterAnomalyGroupTrackers/" +
          DeviceParameterAnomalyGroupTrackerUpdateParams.deviceParameterAnomalyGroupTrackerId,
        body: {
          title: DeviceParameterAnomalyGroupTrackerUpdateParams.title,
        },
        authenticationNotOptional: true,
      },
      DeviceParameterAnomalyGroupTrackerUpdateOptions
    );
  }

  async delete(
    DeviceParameterAnomalyGroupTrackerDeleteParams: JUHUU.DeviceParameterAnomalyGroupTracker.Delete.Params,
    DeviceParameterAnomalyGroupTrackerDeleteOptions?: JUHUU.DeviceParameterAnomalyGroupTracker.Delete.Options
  ): Promise<
    JUHUU.HttpResponse<JUHUU.DeviceParameterAnomalyGroupTracker.Delete.Response>
  > {
    return await super.sendRequest<JUHUU.DeviceParameterAnomalyGroupTracker.Delete.Response>(
      {
        method: "DELETE",
        url:
          "deviceParameterAnomalyGroupTrackers/" +
          DeviceParameterAnomalyGroupTrackerDeleteParams.deviceParameterAnomalyGroupTrackerId,
        authenticationNotOptional: true,
        body: undefined,
      },
      DeviceParameterAnomalyGroupTrackerDeleteOptions
    );
  }
}
