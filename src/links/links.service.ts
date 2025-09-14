import { JUHUU } from "..";
import Service from "../index.service";

export default class LinkService extends Service {
  constructor(config: JUHUU.SetupConfig) {
    super(config);
  }

  async search(
    LinkSearchParams: JUHUU.Link.Search.Params,
    LinkSearchOptions?: JUHUU.Link.Search.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Link.Search.Response>> {
    const queryArray: string[] = [];

    if (LinkSearchParams.q !== undefined) {
      queryArray.push("q=" + LinkSearchParams.q);
    }

    return await super.sendRequest<JUHUU.Link.Search.Response>(
      {
        method: "GET",
        url: "links/search?" + queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: false,
      },
      LinkSearchOptions
    );
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
          name: LinkCreateParams.name,
          fiveLetterQr: LinkCreateParams.fiveLetterQr,
          referenceObject: LinkCreateParams.referenceObject,
          referenceObjectId: LinkCreateParams.referenceObjectId,
        },
        authenticationNotOptional: true,
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
        authenticationNotOptional: false,
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

    if (LinkListParams.referenceObjectId !== undefined) {
      queryArray.push("referenceObjectId=" + LinkListParams.referenceObjectId);
    }

    return await super.sendRequest<JUHUU.Link.List.Response>(
      {
        method: "GET",
        url: "links?" + queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: false,
      },
      LinkListOptions
    );
  }

  async update(
    LinkUpdateParams: JUHUU.Link.Update.Params,
    LinkUpdateOptions?: JUHUU.Link.Update.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Link.Update.Response>> {
    return await super.sendRequest<JUHUU.Link.Update.Response>(
      {
        method: "PATCH",
        url: "links/" + LinkUpdateParams.linkId,
        body: {
          name: LinkUpdateParams.name,
          referenceObject: LinkUpdateParams.referenceObject,
          referenceObjectId: LinkUpdateParams.referenceObjectId,
        },
        authenticationNotOptional: true,
      },
      LinkUpdateOptions
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
        authenticationNotOptional: true,
        body: undefined,
      },
      LinkDeleteOptions
    );
  }
}
