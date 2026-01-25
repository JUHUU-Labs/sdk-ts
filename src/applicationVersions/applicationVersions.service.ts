import { JUHUU } from "..";
import Service from "../index.service";

export default class ApplicationVersionsService extends Service {
  constructor(config: JUHUU.SetupConfig) {
    super(config);
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
}
