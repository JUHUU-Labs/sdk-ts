import { JUHUU } from "..";
import Service from "../index.service";

export default class ParameterAnomalyGroupsService extends Service {
  constructor(config: JUHUU.SetupConfig) {
    super(config);
  }

  async create(
    ParameterAnomalyGroupCreateParams: JUHUU.ParameterAnomalyGroup.Create.Params,
    ParameterAnomalyGroupCreateOptions?: JUHUU.ParameterAnomalyGroup.Create.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.ParameterAnomalyGroup.Create.Response>> {
    return await super.sendRequest<JUHUU.ParameterAnomalyGroup.Create.Response>(
      {
        method: "POST",
        url: "parameterAnomalyGroups",
        body: {
          propertyId: ParameterAnomalyGroupCreateParams.propertyId,
          parameterAnomalyGroupTrackerId:
            ParameterAnomalyGroupCreateParams.parameterAnomalyGroupTrackerId,
          name: ParameterAnomalyGroupCreateParams.name,
          featureReferenceParameterIdArray:
            ParameterAnomalyGroupCreateParams.featureReferenceParameterIdArray,
        },
        authenticationNotOptional: true,
      },
      ParameterAnomalyGroupCreateOptions
    );
  }

  async list(
    ParameterAnomalyGroupListParams: JUHUU.ParameterAnomalyGroup.List.Params,
    ParameterAnomalyGroupListOptions?: JUHUU.ParameterAnomalyGroup.List.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.ParameterAnomalyGroup.List.Response>> {
    const queryArray: string[] = [];

    if (
      ParameterAnomalyGroupListParams?.parameterAnomalyGroupTrackerId !==
      undefined
    ) {
      queryArray.push(
        "parameterAnomalyGroupTrackerId=" +
          ParameterAnomalyGroupListParams.parameterAnomalyGroupTrackerId
      );
    }

    if (ParameterAnomalyGroupListOptions?.limit !== undefined) {
      queryArray.push("limit=" + ParameterAnomalyGroupListOptions.limit);
    }

    if (ParameterAnomalyGroupListParams?.propertyId !== undefined) {
      queryArray.push(
        "propertyId=" + ParameterAnomalyGroupListParams.propertyId
      );
    }

    if (ParameterAnomalyGroupListOptions?.skip !== undefined) {
      queryArray.push("skip=" + ParameterAnomalyGroupListOptions.skip);
    }

    return await super.sendRequest<JUHUU.ParameterAnomalyGroup.List.Response>(
      {
        method: "GET",
        url: "parameterAnomalyGroups?" + queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: false,
      },
      ParameterAnomalyGroupListOptions
    );
  }

  async retrieve(
    ParameterAnomalyGroupRetrieveParams: JUHUU.ParameterAnomalyGroup.Retrieve.Params,
    ParameterAnomalyGroupRetrieveOptions?: JUHUU.ParameterAnomalyGroup.Retrieve.Options
  ): Promise<
    JUHUU.HttpResponse<JUHUU.ParameterAnomalyGroup.Retrieve.Response>
  > {
    const queryArray: string[] = [];

    if (ParameterAnomalyGroupRetrieveOptions?.expand !== undefined) {
      queryArray.push(
        "expand=" + ParameterAnomalyGroupRetrieveOptions.expand.join(",")
      );
    }

    return await super.sendRequest<JUHUU.ParameterAnomalyGroup.Retrieve.Response>(
      {
        method: "GET",
        url:
          "parameterAnomalyGroups/" +
          ParameterAnomalyGroupRetrieveParams.parameterAnomalyGroupId +
          "?" +
          queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: false,
      },
      ParameterAnomalyGroupRetrieveOptions
    );
  }

  async update(
    ParameterAnomalyGroupUpdateParams: JUHUU.ParameterAnomalyGroup.Update.Params,
    ParameterAnomalyGroupUpdateOptions?: JUHUU.ParameterAnomalyGroup.Update.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.ParameterAnomalyGroup.Update.Response>> {
    return await super.sendRequest<JUHUU.ParameterAnomalyGroup.Update.Response>(
      {
        method: "PATCH",
        url:
          "parameterAnomalyGroups/" +
          ParameterAnomalyGroupUpdateParams.parameterAnomalyGroupId,
        body: {
          parameterAnomalyGroupTrackerId:
            ParameterAnomalyGroupUpdateParams.parameterAnomalyGroupTrackerId,
          name: ParameterAnomalyGroupUpdateParams.name,
          featureReferenceParameterIdArray:
            ParameterAnomalyGroupUpdateParams.featureReferenceParameterIdArray,
        },
        authenticationNotOptional: true,
      },
      ParameterAnomalyGroupUpdateOptions
    );
  }

  async delete(
    ParameterAnomalyGroupDeleteParams: JUHUU.ParameterAnomalyGroup.Delete.Params,
    ParameterAnomalyGroupDeleteOptions?: JUHUU.ParameterAnomalyGroup.Delete.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.ParameterAnomalyGroup.Delete.Response>> {
    return await super.sendRequest<JUHUU.ParameterAnomalyGroup.Delete.Response>(
      {
        method: "DELETE",
        url:
          "parameterAnomalyGroups/" +
          ParameterAnomalyGroupDeleteParams.parameterAnomalyGroupId,
        authenticationNotOptional: true,
        body: undefined,
      },
      ParameterAnomalyGroupDeleteOptions
    );
  }
}
