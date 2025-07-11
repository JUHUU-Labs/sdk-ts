import { JUHUU } from "..";
import Service from "../index.service";

export default class ParameterAnomalyGroupTrackersService extends Service {
  constructor(config: JUHUU.SetupConfig) {
    super(config);
  }

  async create(
    ParameterAnomalyGroupTrackerCreateParams: JUHUU.ParameterAnomalyGroupTracker.Create.Params,
    ParameterAnomalyGroupTrackerCreateOptions?: JUHUU.ParameterAnomalyGroupTracker.Create.Options
  ): Promise<
    JUHUU.HttpResponse<JUHUU.ParameterAnomalyGroupTracker.Create.Response>
  > {
    return await super.sendRequest<JUHUU.ParameterAnomalyGroupTracker.Create.Response>(
      {
        method: "POST",
        url: "parameterAnomalyGroupTrackers",
        body: {
          propertyId: ParameterAnomalyGroupTrackerCreateParams.propertyId,
        },
        authenticationNotOptional: true,
      },
      ParameterAnomalyGroupTrackerCreateOptions
    );
  }

  async list(
    ParameterAnomalyGroupTrackerListParams: JUHUU.ParameterAnomalyGroupTracker.List.Params,
    ParameterAnomalyGroupTrackerListOptions?: JUHUU.ParameterAnomalyGroupTracker.List.Options
  ): Promise<
    JUHUU.HttpResponse<JUHUU.ParameterAnomalyGroupTracker.List.Response>
  > {
    const queryArray: string[] = [];

    if (ParameterAnomalyGroupTrackerListOptions?.limit !== undefined) {
      queryArray.push("limit=" + ParameterAnomalyGroupTrackerListOptions.limit);
    }

    if (ParameterAnomalyGroupTrackerListParams?.propertyId !== undefined) {
      queryArray.push(
        "propertyId=" + ParameterAnomalyGroupTrackerListParams.propertyId
      );
    }

    if (ParameterAnomalyGroupTrackerListOptions?.skip !== undefined) {
      queryArray.push("skip=" + ParameterAnomalyGroupTrackerListOptions.skip);
    }

    return await super.sendRequest<JUHUU.ParameterAnomalyGroupTracker.List.Response>(
      {
        method: "GET",
        url: "parameterAnomalyGroupTrackers?" + queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: false,
      },
      ParameterAnomalyGroupTrackerListOptions
    );
  }

  async retrieve(
    ParameterAnomalyGroupTrackerRetrieveParams: JUHUU.ParameterAnomalyGroupTracker.Retrieve.Params,
    ParameterAnomalyGroupTrackerRetrieveOptions?: JUHUU.ParameterAnomalyGroupTracker.Retrieve.Options
  ): Promise<
    JUHUU.HttpResponse<JUHUU.ParameterAnomalyGroupTracker.Retrieve.Response>
  > {
    const queryArray: string[] = [];

    if (ParameterAnomalyGroupTrackerRetrieveOptions?.expand !== undefined) {
      queryArray.push(
        "expand=" + ParameterAnomalyGroupTrackerRetrieveOptions.expand.join(",")
      );
    }

    return await super.sendRequest<JUHUU.ParameterAnomalyGroupTracker.Retrieve.Response>(
      {
        method: "GET",
        url:
          "parameterAnomalyGroupTrackers/" +
          ParameterAnomalyGroupTrackerRetrieveParams.parameterAnomalyGroupTrackerId +
          "?" +
          queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: false,
      },
      ParameterAnomalyGroupTrackerRetrieveOptions
    );
  }

  async update(
    ParameterAnomalyGroupTrackerUpdateParams: JUHUU.ParameterAnomalyGroupTracker.Update.Params,
    ParameterAnomalyGroupTrackerUpdateOptions?: JUHUU.ParameterAnomalyGroupTracker.Update.Options
  ): Promise<
    JUHUU.HttpResponse<JUHUU.ParameterAnomalyGroupTracker.Update.Response>
  > {
    return await super.sendRequest<JUHUU.ParameterAnomalyGroupTracker.Update.Response>(
      {
        method: "PATCH",
        url:
          "parameterAnomalyGroupTrackers/" +
          ParameterAnomalyGroupTrackerUpdateParams.parameterAnomalyGroupTrackerId,
        body: {
          name: ParameterAnomalyGroupTrackerUpdateParams.name,
        },
        authenticationNotOptional: true,
      },
      ParameterAnomalyGroupTrackerUpdateOptions
    );
  }

  async delete(
    ParameterAnomalyGroupTrackerDeleteParams: JUHUU.ParameterAnomalyGroupTracker.Delete.Params,
    ParameterAnomalyGroupTrackerDeleteOptions?: JUHUU.ParameterAnomalyGroupTracker.Delete.Options
  ): Promise<
    JUHUU.HttpResponse<JUHUU.ParameterAnomalyGroupTracker.Delete.Response>
  > {
    return await super.sendRequest<JUHUU.ParameterAnomalyGroupTracker.Delete.Response>(
      {
        method: "DELETE",
        url:
          "parameterAnomalyGroupTrackers/" +
          ParameterAnomalyGroupTrackerDeleteParams.parameterAnomalyGroupTrackerId,
        authenticationNotOptional: true,
        body: undefined,
      },
      ParameterAnomalyGroupTrackerDeleteOptions
    );
  }

  async analyze(
    ParameterAnomalyGroupTrackerAnalyzeParams: JUHUU.ParameterAnomalyGroupTracker.Analyze.Params,
    ParameterAnomalyGroupTrackerAnalyzeOptions?: JUHUU.ParameterAnomalyGroupTracker.Analyze.Options
  ): Promise<
    JUHUU.HttpResponse<JUHUU.ParameterAnomalyGroupTracker.Analyze.Response>
  > {
    return await super.sendRequest<JUHUU.ParameterAnomalyGroupTracker.Analyze.Response>(
      {
        method: "POST",
        url:
          "parameterAnomalyGroupTrackers/" +
          ParameterAnomalyGroupTrackerAnalyzeParams.parameterAnomalyGroupTrackerId +
          "/analyze",
        body: undefined,
        authenticationNotOptional: true,
      },
      ParameterAnomalyGroupTrackerAnalyzeOptions
    );
  }
}
