import { JUHUU } from "..";
import Service from "../index.service";

export default class ApplicationVersionsService extends Service {
  constructor(config: JUHUU.SetupConfig) {
    super(config);
  }

  async create(
    ApplicationVersionCreateParams: JUHUU.ApplicationVersion.Create.Params,
    ApplicationVersionCreateOptions?: JUHUU.ApplicationVersion.Create.Options
  ): Promise<
    JUHUU.HttpResponse<JUHUU.ApplicationVersion.Create.Response>
  > {
    return await super.sendRequest<JUHUU.ApplicationVersion.Create.Response>(
      {
        method: "POST",
        url: "applicationVersions",
        body: {
          applicationId: ApplicationVersionCreateParams.applicationId,
          propertyId: ApplicationVersionCreateParams.propertyId,
          type: ApplicationVersionCreateParams.type,
        },
        authenticationNotOptional: true,
      },
      ApplicationVersionCreateOptions
    );
  }

  async retrieve(
    ApplicationVersionRetrieveParams: JUHUU.ApplicationVersion.Retrieve.Params,
    ApplicationVersionRetrieveOptions?: JUHUU.ApplicationVersion.Retrieve.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.ApplicationVersion.Retrieve.Response>> {
    const queryArray: string[] = [];

    return await super.sendRequest<JUHUU.ApplicationVersion.Retrieve.Response>(
      {
        method: "GET",
        url:
          "applicationVersions/" +
          ApplicationVersionRetrieveParams.applicationVersionId +
          "?" +
          queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: false,
      },
      ApplicationVersionRetrieveOptions
    );
  }

  async list(
    ApplicationVersionListParams: JUHUU.ApplicationVersion.List.Params,
    ApplicationVersionListOptions?: JUHUU.ApplicationVersion.List.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.ApplicationVersion.List.Response>> {
    const queryArray: string[] = [];

    if (ApplicationVersionListParams?.applicationId !== undefined) {
      queryArray.push(
        "applicationId=" + ApplicationVersionListParams.applicationId
      );
    }

    return await super.sendRequest<JUHUU.ApplicationVersion.List.Response>(
      {
        method: "GET",
        url: "applicationVersions?" + queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: false,
      },
      ApplicationVersionListOptions
    );
  }

  async update(
    ApplicationVersionUpdateParams: JUHUU.ApplicationVersion.Update.Params,
    ApplicationVersionUpdateOptions?: JUHUU.ApplicationVersion.Update.Options
  ): Promise<
    JUHUU.HttpResponse<JUHUU.ApplicationVersion.Update.Response>
  > {
    return await super.sendRequest<JUHUU.ApplicationVersion.Update.Response>(
      {
        method: "PATCH",
        url:
          "applicationVersions/" +
          ApplicationVersionUpdateParams.applicationVersionId,
        body: {
          status: ApplicationVersionUpdateParams.status,
          versionCode: ApplicationVersionUpdateParams.versionCode,
        },
        authenticationNotOptional: true,
      },
      ApplicationVersionUpdateOptions
    );
  }

  async delete(
    ApplicationVersionDeleteParams: JUHUU.ApplicationVersion.Delete.Params,
    ApplicationVersionDeleteOptions?: JUHUU.ApplicationVersion.Delete.Options
  ): Promise<
    JUHUU.HttpResponse<JUHUU.ApplicationVersion.Delete.Response>
  > {
    return await super.sendRequest<JUHUU.ApplicationVersion.Delete.Response>(
      {
        method: "DELETE",
        url:
          "applicationVersions/" +
          ApplicationVersionDeleteParams.applicationVersionId,
        authenticationNotOptional: true,
        body: undefined,
      },
      ApplicationVersionDeleteOptions
    );
  }
}
