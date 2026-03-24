import { JUHUU } from "..";
import Service from "../index.service";

export default class PaymentRefundsService extends Service {
  constructor(config: JUHUU.SetupConfig) {
    super(config);
  }

  async create(
    PaymentRefundCreateParams: JUHUU.PaymentRefund.Create.Params,
    PaymentRefundCreateOptions?: JUHUU.PaymentRefund.Create.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.PaymentRefund.Create.Response>> {
    return await super.sendRequest<JUHUU.PaymentRefund.Create.Response>(
      {
        method: "POST",
        url: "paymentRefunds",
        body: {
          paymentId: PaymentRefundCreateParams.paymentId,
          amountToArriveAtUser: PaymentRefundCreateParams.amountToArriveAtUser,
          reason: PaymentRefundCreateParams.reason,
        },
        authenticationNotOptional: true,
      },
      PaymentRefundCreateOptions
    );
  }

  async list(
    PaymentRefundListParams: JUHUU.PaymentRefund.List.Params,
    PaymentRefundListOptions?: JUHUU.PaymentRefund.List.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.PaymentRefund.List.Response>> {
    const queryArray: string[] = [];

    if (PaymentRefundListParams.userId !== undefined) {
      queryArray.push("userId=" + PaymentRefundListParams.userId);
    }

    if (PaymentRefundListParams.propertyId !== undefined) {
      queryArray.push("propertyId=" + PaymentRefundListParams.propertyId);
    }

    if (PaymentRefundListParams.statusArray !== undefined) {
      queryArray.push(
        "statusArray=" + PaymentRefundListParams.statusArray.join(",")
      );
    }

    if (PaymentRefundListParams?.createdAt?.gte !== undefined) {
      queryArray.push(
        "createdAt[gte]=" + PaymentRefundListParams.createdAt.gte
      );
    }

    if (PaymentRefundListParams?.createdAt?.lte !== undefined) {
      queryArray.push(
        "createdAt[lte]=" + PaymentRefundListParams.createdAt.lte
      );
    }

    if (PaymentRefundListOptions?.limit !== undefined) {
      queryArray.push("limit=" + PaymentRefundListOptions.limit);
    }

    if (PaymentRefundListOptions?.cursor !== undefined) {
      queryArray.push("cursor=" + PaymentRefundListOptions.cursor);
    }

    if (PaymentRefundListParams.paymentId !== undefined) {
      queryArray.push("paymentId=" + PaymentRefundListParams.paymentId);
    }

    const response = await super.sendRequest<
      JUHUU.PaymentRefund.List.Response | JUHUU.PaymentRefund.Object[]
    >(
      {
        method: "GET",
        url: "paymentRefunds?" + queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: true,
      },
      PaymentRefundListOptions
    );

    if (Array.isArray(response.data)) {
      response.data = {
        paymentRefundArray: response.data,
        count: response.data.length,
        hasMore: false,
        cursor: null,
      };
    }

    return response as JUHUU.HttpResponse<JUHUU.PaymentRefund.List.Response>;
  }

  async retrieve(
    PaymentRefundRetrieveParams: JUHUU.PaymentRefund.Retrieve.Params,
    PaymentRefundRetrieveOptions?: JUHUU.PaymentRefund.Retrieve.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.PaymentRefund.Retrieve.Response>> {
    const queryArray: string[] = [];

    if (PaymentRefundRetrieveOptions?.expand !== undefined) {
      queryArray.push(
        "expand=" + PaymentRefundRetrieveOptions.expand.join(",")
      );
    }

    return await super.sendRequest<JUHUU.PaymentRefund.Retrieve.Response>({
      method: "GET",
      url:
        "paymentRefunds/" +
        PaymentRefundRetrieveParams.paymentRefundId +
        "?" +
        queryArray.join("&"),
      body: undefined,
      authenticationNotOptional: true,
    });
  }

  async retrieveInvoiceUrl(
    PaymentRefundRetrieveInvoiceUrlParams: JUHUU.PaymentRefund.RetrieveInvoiceUrl.Params,
    PaymentRefundRetrieveInvoiceUrlOptions?: JUHUU.PaymentRefund.RetrieveInvoiceUrl.Options
  ): Promise<
    JUHUU.HttpResponse<JUHUU.PaymentRefund.RetrieveInvoiceUrl.Response>
  > {
    const queryArray: string[] = [];

    return await super.sendRequest<JUHUU.PaymentRefund.RetrieveInvoiceUrl.Response>(
      {
        method: "GET",
        url:
          "paymentRefunds/" +
          PaymentRefundRetrieveInvoiceUrlParams.paymentRefundId +
          "/invoiceUrl",
        body: undefined,
        authenticationNotOptional: true,
      }
    );
  }
}
