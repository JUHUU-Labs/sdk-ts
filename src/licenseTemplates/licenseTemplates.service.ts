import { JUHUU } from "..";
import Service from "../index.service";

export default class LicenseTemplatesService extends Service {
  constructor(config: JUHUU.SetupConfig) {
    super(config);
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
        useAuthentication: true,
      },
      LicenseTemplateListOptions
    );
  }

  async retrieve(
    LicenseTemplateRetrieveParams: JUHUU.LicenseTemplate.Retrieve.Params,
    LicenseTemplateRetrieveOptions?: JUHUU.LicenseTemplate.Retrieve.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.LicenseTemplate.Retrieve.Response>> {
    const queryArray: string[] = [];

    if (LicenseTemplateRetrieveOptions?.expand !== undefined) {
      queryArray.push(
        "expand=" + LicenseTemplateRetrieveOptions.expand.join(",")
      );
    }

    return await super.sendRequest<JUHUU.LicenseTemplate.Retrieve.Response>({
      method: "GET",
      url:
        "licenseTemplates/" +
        LicenseTemplateRetrieveParams.licenseTemplateId +
        "?" +
        queryArray.join("&"),
      body: undefined,
      useAuthentication: true,
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
        useAuthentication: true,
      },
      LicenseTemplateRegexValidateOptions
    );
  }
}
