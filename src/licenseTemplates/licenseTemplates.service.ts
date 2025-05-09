import { JUHUU } from "..";
import Service from "../index.service";

export default class LicenseTemplatesService extends Service {
  constructor(config: JUHUU.SetupConfig) {
    super(config);
  }

  async create(
    LicenseTemplateCreateParams: JUHUU.LicenseTemplate.Create.Params,
    LicenseTemplateCreateOptions?: JUHUU.LicenseTemplate.Create.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.LicenseTemplate.Create.Response>> {
    return await super.sendRequest<JUHUU.LicenseTemplate.Create.Response>(
      {
        method: "POST",
        url: "licenseTemplates",
        body: {
          propertyId: LicenseTemplateCreateParams.propertyId,
          type: LicenseTemplateCreateParams.type,
          regex: LicenseTemplateCreateParams.regex,
          name: LicenseTemplateCreateParams.name,
        },
        authenticationNotOptional: true,
      },
      LicenseTemplateCreateOptions
    );
  }

  async list(
    LicenseTemplateListParams: JUHUU.LicenseTemplate.List.Params,
    LicenseTemplateListOptions?: JUHUU.LicenseTemplate.List.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.LicenseTemplate.List.Response>> {
    const queryArray: string[] = [];

    if (LicenseTemplateListParams.propertyId !== undefined) {
      queryArray.push("propertyId=" + LicenseTemplateListParams.propertyId);
    }

    if (LicenseTemplateListParams.limit !== undefined) {
      queryArray.push("limit=" + LicenseTemplateListParams.limit);
    }

    if (LicenseTemplateListParams.skip !== undefined) {
      queryArray.push("skip=" + LicenseTemplateListParams.skip);
    }

    return await super.sendRequest<JUHUU.LicenseTemplate.List.Response>(
      {
        method: "GET",
        url: "licenseTemplates?" + queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: true,
      },
      LicenseTemplateListOptions
    );
  }

  async retrieve(
    LicenseTemplateRetrieveParams: JUHUU.LicenseTemplate.Retrieve.Params,
    LicenseTemplateRetrieveOptions?: JUHUU.LicenseTemplate.Retrieve.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.LicenseTemplate.Retrieve.Response>> {
    const queryArray: string[] = [];

    // if (LicenseTemplateRetrieveOptions?.expand !== undefined) {
    //   queryArray.push(
    //     "expand=" + LicenseTemplateRetrieveOptions.expand.join(",")
    //   );
    // }

    return await super.sendRequest<JUHUU.LicenseTemplate.Retrieve.Response>({
      method: "GET",
      url:
        "licenseTemplates/" +
        LicenseTemplateRetrieveParams.licenseTemplateId +
        "?" +
        queryArray.join("&"),
      body: undefined,
      authenticationNotOptional: true,
    });
  }

  async regexValidate(
    LicenseTemplateRegexValidateParams: JUHUU.LicenseTemplate.RegexValidate.Params,
    LicenseTemplateRegexValidateOptions?: JUHUU.LicenseTemplate.RegexValidate.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.LicenseTemplate.RegexValidate.Response>> {
    return await super.sendRequest<JUHUU.LicenseTemplate.RegexValidate.Response>(
      {
        method: "POST",
        url:
          "licenseTemplates/" +
          LicenseTemplateRegexValidateParams.licenseTemplateId +
          "/regex/validate",
        body: {
          userId: LicenseTemplateRegexValidateParams.userId,
          text: LicenseTemplateRegexValidateParams.text,
          licenseTemplateId:
            LicenseTemplateRegexValidateParams.licenseTemplateId,
        },
        authenticationNotOptional: true,
      },
      LicenseTemplateRegexValidateOptions
    );
  }

  async delete(
    LicenseTemplateDeleteParams: JUHUU.LicenseTemplate.Delete.Params,
    LicenseTemplateDeleteOptions?: JUHUU.LicenseTemplate.Delete.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.LicenseTemplate.Delete.Response>> {
    return await super.sendRequest<JUHUU.LicenseTemplate.Delete.Response>(
      {
        method: "DELETE",
        url:
          "licenseTemplates/" + LicenseTemplateDeleteParams.licenseTemplateId,
        authenticationNotOptional: true,
        body: undefined,
      },
      LicenseTemplateDeleteOptions
    );
  }
}
