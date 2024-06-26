import { JUHUU } from "..";
import Service from "../index.service";

export default class TermsService extends Service {
  constructor(config: JUHUU.SetupConfig) {
    super(config);
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
        useAuthentication: false,
      },
      TermRetrieveOptions
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
        useAuthentication: true,
      },
      TermAcceptOptions
    );
  }
}
