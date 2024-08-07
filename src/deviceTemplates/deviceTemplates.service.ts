import { JUHUU } from "..";
import Service from "../index.service";

export default class DeviceTemplatesService extends Service {
  constructor(config: JUHUU.SetupConfig) {
    super(config);
  }

  async create() {}

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
        useAuthentication: false,
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
        useAuthentication: false,
      },
      DeviceTemplateListOptions
    );
  }
}
