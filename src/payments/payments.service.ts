import { JUHUU } from "../types";
import Service from "../index.service";

export default class PaymentsService extends Service {
  constructor(config: JUHUU.SetupConfig) {
    super(config);
  }

  async create() {}

  async retrieve(
    PaymentRetrieveParams: JUHUU.Payment.Retrieve.Params,
    PaymentRetrieveOptions?: JUHUU.Payment.Retrieve.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Payment.Retrieve.Response>> {
    const queryArray: string[] = [];

    if (PaymentRetrieveOptions?.expand !== undefined) {
      queryArray.push("expand=" + PaymentRetrieveOptions.expand.join(","));
    }

    return await super.sendRequest<JUHUU.Payment.Retrieve.Response>({
      method: "GET",
      url:
        "payments/" +
        PaymentRetrieveParams.paymentId +
        "?" +
        queryArray.join("&"),
      body: undefined,
      useAuthentication: true,
    });
  }

  async tokens(
    PaymentTokensParams: JUHUU.Payment.Tokens.Params,
    PaymentTokensOptions?: JUHUU.Payment.Tokens.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Payment.Tokens.Response>> {
    return await super.sendRequest<JUHUU.Payment.Tokens.Response>(
      {
        method: "GET",
        url: "payments/" + PaymentTokensParams.paymentId + "/tokens",
        body: undefined,
        useAuthentication: true,
      },
      PaymentTokensOptions
    );
  }
  async update() {}

  async delete() {}

  async retrieveInvoiceUrl(
    PaymentRetrieveInvoiceUrlParams: JUHUU.Payment.RetrieveInvoiceUrl.Params,
    PaymentRetrieveInvoiceUrlOptions?: JUHUU.Payment.RetrieveInvoiceUrl.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Payment.RetrieveInvoiceUrl.Response>> {
    const queryArray: string[] = [];

    return await super.sendRequest<JUHUU.Payment.RetrieveInvoiceUrl.Response>({
      method: "GET",
      url:
        "payments/" + PaymentRetrieveInvoiceUrlParams.paymentId + "/invoiceUrl",
      body: undefined,
      useAuthentication: true,
    });
  }
}
