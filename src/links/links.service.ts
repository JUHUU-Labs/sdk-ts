import { JUHUU } from "../types";
import Service from "../index.service";

export default class LinkService extends Service {
  constructor(config: JUHUU.SetupConfig) {
    super(config);
  }

  async create() {}

  async retrieve(
    LinkRetrieveParams: JUHUU.Link.Retrieve.Params,
    LinkRetrieveOptions?: JUHUU.Link.Retrieve.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Link.Retrieve.Response>> {
    const queryArray: string[] = [];

    return await super.sendRequest<JUHUU.Link.Retrieve.Response>({
      method: "GET",
      url: "links/" + LinkRetrieveParams.linkId + "?" + queryArray.join("&"),
      body: undefined,
      useAuthentication: false,
    });
  }

  async list(
    LinkListParams: JUHUU.Link.List.Params,
    LinkListOptions?: JUHUU.Link.List.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Link.List.Response>> {
    const queryArray: string[] = [];

    if (LinkListParams.propertyId !== undefined) {
      queryArray.push("propertyId=" + LinkListParams.propertyId);
    }

    if (LinkListParams.fiveLetterQr !== undefined) {
      queryArray.push("fiveLetterQr=" + LinkListParams.fiveLetterQr);
    }

    return await super.sendRequest<JUHUU.Link.List.Response>(
      {
        method: "GET",
        url: "links?" + queryArray.join("&"),
        body: undefined,
        useAuthentication: true,
      },
      LinkListOptions
    );
  }

  async update() {}

  async delete() {}

  async terminate() {}
}
