import { JUHUU, LanguageCodeArray } from "..";
import Service from "../index.service";

export default class ApiKeysService extends Service {
  constructor(config: JUHUU.SetupConfig) {
    super(config);
  }

  async create(
    ApiKeyCreateParams: JUHUU.ApiKey.Create.Params,
    ApiKeyCreateOptions?: JUHUU.ApiKey.Create.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.ApiKey.Create.Response>> {
    return await super.sendRequest<JUHUU.ApiKey.Create.Response>(
      {
        method: "POST",
        url: "apiKeys",
        body: {
          propertyId: ApiKeyCreateParams.propertyId,
        },
        authenticationNotOptional: true,
      },
      ApiKeyCreateOptions
    );
  }

  async list(
    ApiKeyListParams: JUHUU.ApiKey.List.Params,
    ApiKeyListOptions?: JUHUU.ApiKey.List.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.ApiKey.List.Response>> {
    const queryArray: string[] = [];

    if (ApiKeyListOptions?.limit !== undefined) {
      queryArray.push("limit=" + ApiKeyListOptions.limit);
    }

    if (ApiKeyListParams?.propertyId !== undefined) {
      queryArray.push("propertyId=" + ApiKeyListParams.propertyId);
    }

    if (ApiKeyListParams?.statusArray !== undefined) {
      queryArray.push("statusArray=" + ApiKeyListParams.statusArray.join(","));
    }

    if (ApiKeyListOptions?.skip !== undefined) {
      queryArray.push("skip=" + ApiKeyListOptions.skip);
    }

    return await super.sendRequest<JUHUU.ApiKey.List.Response>(
      {
        method: "GET",
        url: "apiKeys?" + queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: false,
      },
      ApiKeyListOptions
    );
  }

  async retrieve(
    ApiKeyRetrieveParams: JUHUU.ApiKey.Retrieve.Params,
    ApiKeyRetrieveOptions?: JUHUU.ApiKey.Retrieve.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.ApiKey.Retrieve.Response>> {
    const queryArray: string[] = [];

    if (ApiKeyRetrieveOptions?.expand !== undefined) {
      queryArray.push("expand=" + ApiKeyRetrieveOptions.expand.join(","));
    }

    return await super.sendRequest<JUHUU.ApiKey.Retrieve.Response>(
      {
        method: "GET",
        url:
          "apiKeys/" +
          ApiKeyRetrieveParams.apiKeyId +
          "?" +
          queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: false,
      },
      ApiKeyRetrieveOptions
    );
  }

  async update(
    ApiKeyUpdateParams: JUHUU.ApiKey.Update.Params,
    ApiKeyUpdateOptions?: JUHUU.ApiKey.Update.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.ApiKey.Update.Response>> {
    return await super.sendRequest<JUHUU.ApiKey.Update.Response>(
      {
        method: "PATCH",
        url: "apiKeys/" + ApiKeyUpdateParams.apiKeyId,
        body: {
          status: ApiKeyUpdateParams.status,
        },
        authenticationNotOptional: true,
      },
      ApiKeyUpdateOptions
    );
  }
}
