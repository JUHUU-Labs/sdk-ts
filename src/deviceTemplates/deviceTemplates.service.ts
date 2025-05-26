import { JUHUU } from "..";
import Service from "../index.service";

export default class DeviceTemplatesService extends Service {
  constructor(config: JUHUU.SetupConfig) {
    super(config);
  }

  async create(
    DeviceTemplateCreateParams: JUHUU.DeviceTemplate.Create.Params,
    DeviceTemplateCreateOptions?: JUHUU.DeviceTemplate.Create.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.DeviceTemplate.Create.Response>> {
    return await super.sendRequest<JUHUU.DeviceTemplate.Create.Response>(
      {
        method: "POST",
        url: "deviceTemplates",
        body: {
          propertyId: DeviceTemplateCreateParams.propertyId,
          name: DeviceTemplateCreateParams.name,
        },
        authenticationNotOptional: true,
      },
      DeviceTemplateCreateOptions
    );
  }

  async retrieve(
    DeviceTemplateRetrieveParams: JUHUU.DeviceTemplate.Retrieve.Params,
    DeviceTemplateRetrieveOptions?: JUHUU.DeviceTemplate.Retrieve.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.DeviceTemplate.Retrieve.Response>> {
    const queryArray: string[] = [];

    if (DeviceTemplateRetrieveParams?.source !== undefined) {
      queryArray.push("source=" + DeviceTemplateRetrieveParams.source);
    }

    return await super.sendRequest<JUHUU.DeviceTemplate.Retrieve.Response>(
      {
        method: "GET",
        url:
          "deviceTemplates/" +
          DeviceTemplateRetrieveParams.deviceTemplateId +
          "?" +
          queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: false,
      },
      DeviceTemplateRetrieveOptions
    );
  }

  async list(
    DeviceTemplateListParams: JUHUU.DeviceTemplate.List.Params,
    DeviceTemplateListOptions?: JUHUU.DeviceTemplate.List.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.DeviceTemplate.List.Response>> {
    const queryArray: string[] = [];

    if (DeviceTemplateListParams?.propertyId !== undefined) {
      queryArray.push("propertyId=" + DeviceTemplateListParams.propertyId);
    }

    return await super.sendRequest<JUHUU.DeviceTemplate.List.Response>(
      {
        method: "GET",
        url: "deviceTemplates?" + queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: false,
      },
      DeviceTemplateListOptions
    );
  }

  async delete(
    DeviceTemplateDeleteParams: JUHUU.DeviceTemplate.Delete.Params,
    DeviceTemplateDeleteOptions?: JUHUU.DeviceTemplate.Delete.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.DeviceTemplate.Delete.Response>> {
    return await super.sendRequest<JUHUU.DeviceTemplate.Delete.Response>(
      {
        method: "DELETE",
        url: "deviceTemplates/" + DeviceTemplateDeleteParams.deviceTemplateId,
        authenticationNotOptional: true,
        body: undefined,
      },
      DeviceTemplateDeleteOptions
    );
  }
}
