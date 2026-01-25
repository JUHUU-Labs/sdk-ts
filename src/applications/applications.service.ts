import { JUHUU } from "..";
import Service from "../index.service";

export default class ApplicationsService extends Service {
  constructor(config: JUHUU.SetupConfig) {
    super(config);
  }

  async create(
    ApplicationCreateParams: JUHUU.Application.Create.Params,
    ApplicationOptions?: JUHUU.Application.Create.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Application.Create.Response>> {
    return await super.sendRequest<JUHUU.Application.Create.Response>(
      {
        method: "POST",
        url: "applications",
        body: {
          propertyId: ApplicationCreateParams.propertyId,
          colorScheme: ApplicationCreateParams.colorScheme,
          appIconLight: ApplicationCreateParams.appIconLight,
          appIconDark: ApplicationCreateParams.appIconDark,
        },
        authenticationNotOptional: true,
      },
      ApplicationOptions
    );
  }

  async retrieve(
    ApplicationRetrieveParams: JUHUU.Application.Retrieve.Params,
    ApplicationRetrieveOptions?: JUHUU.Application.Retrieve.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Application.Retrieve.Response>> {
    const queryArray: string[] = [];

    return await super.sendRequest<JUHUU.Application.Retrieve.Response>(
      {
        method: "GET",
        url:
          "applications/" +
          ApplicationRetrieveParams.applicationId +
          "?" +
          queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: false,
      },
      ApplicationRetrieveOptions
    );
  }

  async list(
    ApplicationListParams: JUHUU.Application.List.Params,
    ApplicationListOptions?: JUHUU.Application.List.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Application.List.Response>> {
    const queryArray: string[] = [];

    if (ApplicationListParams?.propertyId !== undefined) {
      queryArray.push("propertyId=" + ApplicationListParams.propertyId);
    }

    return await super.sendRequest<JUHUU.Application.List.Response>(
      {
        method: "GET",
        url: "applications?" + queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: false,
      },
      ApplicationListOptions
    );
  }

  async update(
    ApplicationUpdateParams: JUHUU.Application.Update.Params,
    ApplicationUpdateOptions?: JUHUU.Application.Update.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Application.Update.Response>> {
    return await super.sendRequest<JUHUU.Application.Update.Response>(
      {
        method: "PATCH",
        url: "applications/" + ApplicationUpdateParams.applicationId,
        body: {
          colorScheme: ApplicationUpdateParams.colorScheme,
          appIconLight: ApplicationUpdateParams.appIconLight,
          appIconDark: ApplicationUpdateParams.appIconDark,
          splashScreenImageLight:
            ApplicationUpdateParams.splashScreenImageLight,
          splashScreenImageDark: ApplicationUpdateParams.splashScreenImageDark,
          pointClusterId: ApplicationUpdateParams.pointClusterId,
          mapboxStyleUrlLight: ApplicationUpdateParams.mapboxStyleUrlLight,
          mapboxStyleUrlDark: ApplicationUpdateParams.mapboxStyleUrlDark,
          status: ApplicationUpdateParams.status,
        },
        authenticationNotOptional: true,
      },
      ApplicationUpdateOptions
    );
  }

  async delete(
    ApplicationDeleteParams: JUHUU.Application.Delete.Params,
    ApplicationDeleteOptions?: JUHUU.Application.Delete.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Application.Delete.Response>> {
    return await super.sendRequest<JUHUU.Application.Delete.Response>(
      {
        method: "DELETE",
        url: "applications/" + ApplicationDeleteParams.applicationId,
        authenticationNotOptional: true,
        body: undefined,
      },
      ApplicationDeleteOptions
    );
  }
}
