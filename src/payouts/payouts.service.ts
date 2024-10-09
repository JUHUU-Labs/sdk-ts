import { JUHUU } from "..";
import Service from "../index.service";

export default class PayoutsService extends Service {
  constructor(config: JUHUU.SetupConfig) {
    super(config);
  }

  async retrieve(
    PayoutRetrieveParams: JUHUU.Payout.Retrieve.Params,
    PayoutRetrieveOptions?: JUHUU.Payout.Retrieve.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Payout.Retrieve.Response>> {
    const queryArray: string[] = [];

    if (PayoutRetrieveOptions?.expand !== undefined) {
      queryArray.push("expand=" + PayoutRetrieveOptions.expand.join(","));
    }

    return await super.sendRequest<JUHUU.Payout.Retrieve.Response>(
      {
        method: "GET",
        url:
          "payouts/" +
          PayoutRetrieveParams.payoutId +
          "?" +
          queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: false,
      },
      PayoutRetrieveOptions
    );
  }

  async list(
    PayoutListParams: JUHUU.Payout.List.Params,
    PayoutListOptions?: JUHUU.Payout.List.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Payout.List.Response>> {
    const queryArray: string[] = [];

    if (PayoutListParams?.propertyId !== undefined) {
      queryArray.push("propertyId=" + PayoutListParams.propertyId);
    }

    return await super.sendRequest<JUHUU.Payout.List.Response>(
      {
        method: "GET",
        url: "payouts?" + queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: false,
      },
      PayoutListOptions
    );
  }
}
