import { JUHUU } from "..";
import Service from "../index.service";

export default class BasketsService extends Service {
  constructor(config: JUHUU.SetupConfig) {
    super(config);
  }

  async create(
    params: JUHUU.Basket.Create.Params,
    options?: JUHUU.Basket.Create.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Basket.Create.Response>> {
    return await super.sendRequest<JUHUU.Basket.Create.Response>(
      {
        method: "POST",
        url: "baskets",
        body: {
          userId: params.userId,
          sessionId: params.sessionId,
          status: params.status,
          items: params.items,
          itemCount: params.itemCount,
          subtotal: params.subtotal,
          discountTotal: params.discountTotal,
          taxEstimate: params.taxEstimate,
          shippingEstimate: params.shippingEstimate,
          total: params.total,
          currency: params.currency,
          expiresAt: params.expiresAt,
          notes: params.notes,
        },
        authenticationNotOptional: true,
      },
      options
    );
  }

  async list(
    params: JUHUU.Basket.List.Params,
    options?: JUHUU.Basket.List.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Basket.List.Response>> {
    const queryArray: string[] = [];

    if (params?.userId !== undefined) {
      queryArray.push("userId=" + params.userId);
    }

    if (params?.sessionId !== undefined) {
      queryArray.push("sessionId=" + params.sessionId);
    }

    if (params?.status !== undefined) {
      queryArray.push("status=" + params.status);
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

    return await super.sendRequest<JUHUU.Basket.List.Response>(
      {
        method: "GET",
        url: "baskets?" + queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: false,
      },
      options
    );
  }

  async retrieve(
    params: JUHUU.Basket.Retrieve.Params,
    options?: JUHUU.Basket.Retrieve.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Basket.Retrieve.Response>> {
    const queryArray: string[] = [];

    return await super.sendRequest<JUHUU.Basket.Retrieve.Response>(
      {
        method: "GET",
        url: "baskets/" + params.basketId + "?" + queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: false,
      },
      options
    );
  }

  async update(
    params: JUHUU.Basket.Update.Params,
    options?: JUHUU.Basket.Update.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Basket.Update.Response>> {
    return await super.sendRequest<JUHUU.Basket.Update.Response>(
      {
        method: "PATCH",
        url: "baskets/" + params.basketId,
        body: {
          userId: params.userId,
          sessionId: params.sessionId,
          status: params.status,
          items: params.items,
          itemCount: params.itemCount,
          subtotal: params.subtotal,
          discountTotal: params.discountTotal,
          taxEstimate: params.taxEstimate,
          shippingEstimate: params.shippingEstimate,
          total: params.total,
          currency: params.currency,
          expiresAt: params.expiresAt,
          notes: params.notes,
        },
        authenticationNotOptional: true,
      },
      options
    );
  }

  async delete(
    params: JUHUU.Basket.Delete.Params,
    options?: JUHUU.Basket.Delete.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Basket.Delete.Response>> {
    return await super.sendRequest<JUHUU.Basket.Delete.Response>(
      {
        method: "DELETE",
        url: "baskets/" + params.basketId,
        authenticationNotOptional: true,
        body: undefined,
      },
      options
    );
  }
}