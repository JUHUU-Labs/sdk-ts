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

  async update() {}

  async delete() {}

  async terminate() {}
}
