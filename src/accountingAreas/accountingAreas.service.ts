import { JUHUU } from "..";
import Service from "../index.service";

export default class AccountingAreasService extends Service {
  constructor(config: JUHUU.SetupConfig) {
    super(config);
  }

  async create(
    AccountingAreaCreateParams: JUHUU.AccountingArea.Create.Params,
    AccountingAreaCreateOptions?: JUHUU.AccountingArea.Create.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.AccountingArea.Create.Response>> {
    return await super.sendRequest<JUHUU.AccountingArea.Create.Response>(
      {
        method: "POST",
        url: "accountingAreas",
        body: {
          propertyId: AccountingAreaCreateParams.propertyId,
          name: AccountingAreaCreateParams.name,
        },
        authenticationNotOptional: true,
      },
      AccountingAreaCreateOptions
    );
  }

  async retrieve(
    AccountingAreaRetrieveParams: JUHUU.AccountingArea.Retrieve.Params,
    AccountingAreaRetrieveOptions?: JUHUU.AccountingArea.Retrieve.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.AccountingArea.Retrieve.Response>> {
    const queryArray: string[] = [];

    if (AccountingAreaRetrieveOptions?.expand !== undefined) {
      queryArray.push(
        "expand=" + AccountingAreaRetrieveOptions.expand.join(",")
      );
    }

    return await super.sendRequest<JUHUU.AccountingArea.Retrieve.Response>(
      {
        method: "GET",
        url:
          "accountingAreas/" +
          AccountingAreaRetrieveParams.accountingAreaId +
          "?" +
          queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: false,
      },
      AccountingAreaRetrieveOptions
    );
  }

  async list(
    AccountingAreaListParams: JUHUU.AccountingArea.List.Params,
    AccountingAreaListOptions?: JUHUU.AccountingArea.List.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.AccountingArea.List.Response>> {
    const queryArray: string[] = [];

    if (AccountingAreaListParams?.propertyId !== undefined) {
      queryArray.push("propertyId=" + AccountingAreaListParams.propertyId);
    }

    return await super.sendRequest<JUHUU.AccountingArea.List.Response>(
      {
        method: "GET",
        url: "accountingAreas?" + queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: false,
      },
      AccountingAreaListOptions
    );
  }

  async delete(
    AccountingAreaDeleteParams: JUHUU.AccountingArea.Delete.Params,
    AccountingAreaDeleteOptions?: JUHUU.AccountingArea.Delete.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.AccountingArea.Delete.Response>> {
    return await super.sendRequest<JUHUU.AccountingArea.Delete.Response>(
      {
        method: "DELETE",
        url: "accountingAreas/" + AccountingAreaDeleteParams.accountingAreaId,
        authenticationNotOptional: true,
        body: undefined,
      },
      AccountingAreaDeleteOptions
    );
  }
}
