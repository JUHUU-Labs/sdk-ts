import { JUHUU } from "..";
import Service from "../index.service";

export default class PaymentsService extends Service {
  constructor(config: JUHUU.SetupConfig) {
    super(config);
  }

  async list(
    PaymentListParams: JUHUU.Payment.List.Params,
    PaymentListOptions?: JUHUU.Payment.List.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Payment.List.Response>> {
    const queryArray: string[] = [];

    if (PaymentListParams.userId !== undefined) {
      queryArray.push("userId=" + PaymentListParams.userId);
    }

    if (PaymentListParams.propertyId !== undefined) {
      queryArray.push("propertyId=" + PaymentListParams.propertyId);
    }

    if (PaymentListParams.statusArray !== undefined) {
      queryArray.push("statusArray=" + PaymentListParams.statusArray.join(","));
    }

    if (PaymentListParams?.createdAt?.gte !== undefined) {
      queryArray.push("createdAt[gte]=" + PaymentListParams.createdAt.gte);
    }

    if (PaymentListParams?.createdAt?.lte !== undefined) {
      queryArray.push("createdAt[lte]=" + PaymentListParams.createdAt.lte);
    }

    if (PaymentListParams.limit !== undefined) {
      queryArray.push("limit=" + PaymentListParams.limit);
    }

    if (PaymentListParams.skip !== undefined) {
      queryArray.push("skip=" + PaymentListParams.skip);
    }

    return await super.sendRequest<JUHUU.Payment.List.Response>(
      {
        method: "GET",
        url: "payments?" + queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: true,
      },
      PaymentListOptions
    );
  }

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
      authenticationNotOptional: true,
    });
  }

  async search(
    PaymentSearchParams: JUHUU.Payment.Search.Params,
    PaymentSearchOptions?: JUHUU.Payment.Search.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Payment.Search.Response>> {
    const queryArray: string[] = [];

    if (PaymentSearchParams.providerPaymentId !== undefined) {
      queryArray.push(
        "providerPaymentId=" + PaymentSearchParams.providerPaymentId
      );
    }

    return await super.sendRequest<JUHUU.Payment.Search.Response>(
      {
        method: "GET",
        url: "payments/search?" + queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: true,
      },
      PaymentSearchOptions
    );
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
        authenticationNotOptional: true,
      },
      PaymentTokensOptions
    );
  }

  async retrieveInvoiceUrl(
    PaymentRetrieveInvoiceUrlParams: JUHUU.Payment.RetrieveInvoiceUrl.Params,
    PaymentRetrieveInvoiceUrlOptions?: JUHUU.Payment.RetrieveInvoiceUrl.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Payment.RetrieveInvoiceUrl.Response>> {
    const queryArray: string[] = [];

    return await super.sendRequest<JUHUU.Payment.RetrieveInvoiceUrl.Response>(
      {
        method: "GET",
        url:
          "payments/" +
          PaymentRetrieveInvoiceUrlParams.paymentId +
          "/invoiceUrl",
        body: undefined,
        authenticationNotOptional: true,
      },
      PaymentRetrieveInvoiceUrlOptions
    );
  }

  async capture(
    PaymentCaptureParams: JUHUU.Payment.Capture.Params,
    PaymentCaptureOptions?: JUHUU.Payment.Capture.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Payment.Capture.Response>> {
    return await super.sendRequest<JUHUU.Payment.Capture.Response>(
      {
        method: "PATCH",
        url: "payments/" + PaymentCaptureParams.paymentId + "/capture",
        body: {
          customAmount: PaymentCaptureParams.customAmount,
          mode: PaymentCaptureParams.mode,
        },
        authenticationNotOptional: true,
      },
      PaymentCaptureOptions
    );
  }

  async cancel(
    PaymentCancelParams: JUHUU.Payment.Cancel.Params,
    PaymentCancelOptions?: JUHUU.Payment.Cancel.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Payment.Cancel.Response>> {
    return await super.sendRequest<JUHUU.Payment.Cancel.Response>(
      {
        method: "PATCH",
        url: "payments/" + PaymentCancelParams.paymentId + "/cancel",
        body: undefined,
        authenticationNotOptional: true,
      },
      PaymentCancelOptions
    );
  }
}
