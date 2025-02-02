import { JUHUU } from "..";
import Service from "../index.service";

export default class TermsService extends Service {
  constructor(config: JUHUU.SetupConfig) {
    super(config);
  }

  async create(
    TermCreateParams: JUHUU.Term.Create.Params,
    TermCreateOptions?: JUHUU.Term.Create.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Term.Create.Response>> {
    return await super.sendRequest<JUHUU.Term.Create.Response>(
      {
        method: "POST",
        url: "terms",
        body: {
          propertyId: TermCreateParams.propertyId,
          name: TermCreateParams.name,
        },
        authenticationNotOptional: true,
      },
      TermCreateOptions
    );
  }

  async retrieve(
    TermRetrieveParams: JUHUU.Term.Retrieve.Params,
    TermRetrieveOptions?: JUHUU.Term.Retrieve.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Term.Retrieve.Response>> {
    const queryArray: string[] = [];

    if (TermRetrieveOptions?.expand !== undefined) {
      queryArray.push("expand=" + TermRetrieveOptions.expand.join(","));
    }

    return await super.sendRequest<JUHUU.Term.Retrieve.Response>(
      {
        method: "GET",
        url: "terms/" + TermRetrieveParams.termId + "?" + queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: false,
      },
      TermRetrieveOptions
    );
  }

  async list(
    TermListParams: JUHUU.Term.List.Params,
    TermListOptions?: JUHUU.Term.List.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Term.List.Response>> {
    const queryArray: string[] = [];

    if (TermListParams?.propertyId !== undefined) {
      queryArray.push("propertyId=" + TermListParams.propertyId);
    }

    return await super.sendRequest<JUHUU.Term.List.Response>(
      {
        method: "GET",
        url: "terms?" + queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: false,
      },
      TermListOptions
    );
  }

  async update(
    TermUpdateParams: JUHUU.Term.Update.Params,
    TermUpdateOptions?: JUHUU.Term.Update.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Term.Update.Response>> {
    return await super.sendRequest<JUHUU.Term.Update.Response>(
      {
        method: "PATCH",
        url: "terms/" + TermUpdateParams.termId,
        body: {
          name: TermUpdateParams.name,
          dsgvoUrl: TermUpdateParams.dsgvoUrl,
          url: TermUpdateParams.url,
        },
        authenticationNotOptional: true,
      },
      TermUpdateOptions
    );
  }

  async accept(
    TermAcceptParams: JUHUU.Term.Accept.Params,
    TermAcceptOptions?: JUHUU.Term.Accept.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Term.Accept.Response>> {
    return await super.sendRequest<JUHUU.Term.Accept.Response>(
      {
        method: "PATCH",
        url: "terms/" + TermAcceptParams.termId + "/accept",
        body: {
          userId: TermAcceptParams.userId,
        },
        authenticationNotOptional: true,
      },
      TermAcceptOptions
    );
  }

  async delete(
    TermDeleteParams: JUHUU.Term.Delete.Params,
    TermDeleteOptions?: JUHUU.Term.Delete.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Term.Delete.Response>> {
    return await super.sendRequest<JUHUU.Term.Delete.Response>(
      {
        method: "DELETE",
        url: "terms/" + TermDeleteParams.termId,
        authenticationNotOptional: true,
        body: undefined,
      },
      TermDeleteOptions
    );
  }
}
