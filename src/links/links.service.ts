import { JUHUU } from "..";
import Service from "../index.service";

export default class LinkService extends Service {
  constructor(config: JUHUU.SetupConfig) {
    super(config);
  }

  async create(
    LinkCreateParams: JUHUU.Link.Create.Params,
    LinkCreateOptions?: JUHUU.Link.Create.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Link.Create.Response>> {
    return await super.sendRequest<JUHUU.Link.Create.Response>(
      {
        method: "POST",
        url: "links",
        body: {
          propertyId: LinkCreateParams.propertyId,
        },
        useAuthentication: true,
      },
      LinkCreateOptions
    );
  }

  async retrieve(
    LinkRetrieveParams: JUHUU.Link.Retrieve.Params,
    LinkRetrieveOptions?: JUHUU.Link.Retrieve.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Link.Retrieve.Response>> {
    const queryArray: string[] = [];

    return await super.sendRequest<JUHUU.Link.Retrieve.Response>(
      {
        method: "GET",
        url: "links/" + LinkRetrieveParams.linkId + "?" + queryArray.join("&"),
        body: undefined,
        useAuthentication: false,
      },
      LinkRetrieveOptions
    );
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

  async delete(
    LinkDeleteParams: JUHUU.Link.Delete.Params,
    LinkDeleteOptions?: JUHUU.Link.Delete.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Link.Delete.Response>> {
    return await super.sendRequest<JUHUU.Link.Delete.Response>(
      {
        method: "DELETE",
        url: "links/" + LinkDeleteParams.linkId,
        useAuthentication: true,
        body: undefined,
      },
      LinkDeleteOptions
    );
  }
}
