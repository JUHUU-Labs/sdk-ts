import { JUHUU } from "..";
import Service from "../index.service";

export default class PropertiesService extends Service {
  constructor(config: JUHUU.SetupConfig) {
    super(config);
  }

  async create(
    PropertyCreateParams: JUHUU.Property.Create.Params,
    PropertyCreateOptions?: JUHUU.Property.Create.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Property.Create.Response>> {
    const queryArray: string[] = [];

    return await super.sendRequest<JUHUU.Property.Create.Response>({
      method: "POST",
      url: "properties",
      body: {
        userId: PropertyCreateParams.userId,
        name: PropertyCreateParams.name,
        type: PropertyCreateParams.type,
      },
      useAuthentication: true,
    });
  }

  async retrieve(
    PropertyRetrieveParams: JUHUU.Property.Retrieve.Params,
    PropertyRetrieveOptions?: JUHUU.Property.Retrieve.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Property.Retrieve.Response>> {
    const queryArray: string[] = [];

    return await super.sendRequest<JUHUU.Property.Retrieve.Response>({
      method: "GET",
      url:
        "properties/" +
        PropertyRetrieveParams.propertyId +
        "?" +
        queryArray.join("&"),
      body: undefined,
      useAuthentication: false,
    });
  }

  async list(
    PropertyListParams: JUHUU.Property.List.Params,
    PropertyListOptions?: JUHUU.Property.List.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Property.List.Response>> {
    const queryArray: string[] = [];

    return await super.sendRequest<JUHUU.Property.List.Response>(
      {
        method: "GET",
        url: "properties?" + queryArray.join("&"),
        body: undefined,
        useAuthentication: false,
      },
      PropertyListOptions
    );
  }

  async update() {}

  async delete() {}

  async terminate() {}
}
