import { JUHUU } from "..";
import Service from "../index.service";

export default class OrdersService extends Service {
  constructor(config: JUHUU.SetupConfig) {
    super(config);
  }

  async create(
    params: JUHUU.Order.Create.Params,
    options?: JUHUU.Order.Create.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Order.Create.Response>> {
    return await super.sendRequest<JUHUU.Order.Create.Response>(
      {
        method: "POST",
        url: "orders",
        body: {
          userId: params.userId,
          orderNumber: params.orderNumber,
          status: params.status,
          paymentStatus: params.paymentStatus,
          items: params.items,
          subtotal: params.subtotal,
          tax: params.tax,
          shipping: params.shipping,
          total: params.total,
          currency: params.currency,
          shippingAddress: params.shippingAddress,
          billingAddress: params.billingAddress,
          orderDate: params.orderDate,
          estimatedDeliveryDate: params.estimatedDeliveryDate,
          actualDeliveryDate: params.actualDeliveryDate,
          notes: params.notes,
        },
        authenticationNotOptional: true,
      },
      options
    );
  }

  async list(
    params: JUHUU.Order.List.Params,
    options?: JUHUU.Order.List.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Order.List.Response>> {
    const queryArray: string[] = [];

    if (params?.userId !== undefined) {
      queryArray.push("userId=" + params.userId);
    }

    if (params?.orderNumber !== undefined) {
      queryArray.push("orderNumber=" + params.orderNumber);
    }

    if (params?.status !== undefined) {
      queryArray.push("status=" + params.status);
    }

    if (params?.paymentStatus !== undefined) {
      queryArray.push("paymentStatus=" + params.paymentStatus);
    }

    if (params?.currency !== undefined) {
      queryArray.push("currency=" + params.currency);
    }

    if (options?.limit !== undefined) {
      queryArray.push("limit=" + options.limit);
    }

    if (options?.skip !== undefined) {
      queryArray.push("skip=" + options.skip);
    }

    return await super.sendRequest<JUHUU.Order.List.Response>(
      {
        method: "GET",
        url: "orders?" + queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: false,
      },
      options
    );
  }

  async retrieve(
    params: JUHUU.Order.Retrieve.Params,
    options?: JUHUU.Order.Retrieve.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Order.Retrieve.Response>> {
    const queryArray: string[] = [];

    return await super.sendRequest<JUHUU.Order.Retrieve.Response>(
      {
        method: "GET",
        url: "orders/" + params.orderId + "?" + queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: false,
      },
      options
    );
  }

  async update(
    params: JUHUU.Order.Update.Params,
    options?: JUHUU.Order.Update.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Order.Update.Response>> {
    return await super.sendRequest<JUHUU.Order.Update.Response>(
      {
        method: "PATCH",
        url: "orders/" + params.orderId,
        body: {
          userId: params.userId,
          orderNumber: params.orderNumber,
          status: params.status,
          paymentStatus: params.paymentStatus,
          items: params.items,
          subtotal: params.subtotal,
          tax: params.tax,
          shipping: params.shipping,
          total: params.total,
          currency: params.currency,
          shippingAddress: params.shippingAddress,
          billingAddress: params.billingAddress,
          orderDate: params.orderDate,
          estimatedDeliveryDate: params.estimatedDeliveryDate,
          actualDeliveryDate: params.actualDeliveryDate,
          notes: params.notes,
        },
        authenticationNotOptional: true,
      },
      options
    );
  }

  async delete(
    params: JUHUU.Order.Delete.Params,
    options?: JUHUU.Order.Delete.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Order.Delete.Response>> {
    return await super.sendRequest<JUHUU.Order.Delete.Response>(
      {
        method: "DELETE",
        url: "orders/" + params.orderId,
        authenticationNotOptional: true,
        body: undefined,
      },
      options
    );
  }
}