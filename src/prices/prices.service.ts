import { JUHUU } from "..";
import Service from "../index.service";

export default class PricesService extends Service {
  constructor(config: JUHUU.SetupConfig) {
    super(config);
  }

  async create(
    params: JUHUU.Price.Create.Params,
    options?: JUHUU.Price.Create.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Price.Create.Response>> {
    return await super.sendRequest<JUHUU.Price.Create.Response>(
      {
        method: "POST",
        url: "prices",
        body: {
          userId: params.userId,
          productId: params.productId,
          name: params.name,
          type: params.type,
          status: params.status,
          amount: params.amount,
          currency: params.currency,
          taxBehavior: params.taxBehavior,
          taxPercentage: params.taxPercentage,
          recurringInterval: params.recurringInterval,
          recurringIntervalCount: params.recurringIntervalCount,
          trialPeriodDays: params.trialPeriodDays,
          usageType: params.usageType,
          tiers: params.tiers,
          discounts: params.discounts,
          metadata: params.metadata,
          isDefault: params.isDefault,
          priority: params.priority,
          minQuantity: params.minQuantity,
          maxQuantity: params.maxQuantity,
          unitLabel: params.unitLabel,
          transformQuantityDivideBy: params.transformQuantityDivideBy,
          transformQuantityRound: params.transformQuantityRound,
        },
        authenticationNotOptional: true,
      },
      options
    );
  }

  async list(
    params: JUHUU.Price.List.Params,
    options?: JUHUU.Price.List.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Price.List.Response>> {
    const queryArray: string[] = [];

    if (params?.userId !== undefined) {
      queryArray.push("userId=" + params.userId);
    }

    if (params?.productId !== undefined) {
      queryArray.push("productId=" + params.productId);
    }

    if (params?.name !== undefined) {
      queryArray.push("name=" + params.name);
    }

    if (params?.type !== undefined) {
      queryArray.push("type=" + params.type);
    }

    if (params?.status !== undefined) {
      queryArray.push("status=" + params.status);
    }

    if (params?.currency !== undefined) {
      queryArray.push("currency=" + params.currency);
    }

    if (params?.taxBehavior !== undefined) {
      queryArray.push("taxBehavior=" + params.taxBehavior);
    }

    if (params?.recurringInterval !== undefined) {
      queryArray.push("recurringInterval=" + params.recurringInterval);
    }

    if (params?.usageType !== undefined) {
      queryArray.push("usageType=" + params.usageType);
    }

    if (params?.isDefault !== undefined) {
      queryArray.push("isDefault=" + params.isDefault);
    }

    if (params?.category !== undefined) {
      queryArray.push("category=" + params.category);
    }

    if (options?.limit !== undefined) {
      queryArray.push("limit=" + options.limit);
    }

    if (options?.skip !== undefined) {
      queryArray.push("skip=" + options.skip);
    }

    return await super.sendRequest<JUHUU.Price.List.Response>(
      {
        method: "GET",
        url: "prices?" + queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: false,
      },
      options
    );
  }

  async retrieve(
    params: JUHUU.Price.Retrieve.Params,
    options?: JUHUU.Price.Retrieve.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Price.Retrieve.Response>> {
    const queryArray: string[] = [];

    return await super.sendRequest<JUHUU.Price.Retrieve.Response>(
      {
        method: "GET",
        url: "prices/" + params.priceId + "?" + queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: false,
      },
      options
    );
  }

  async update(
    params: JUHUU.Price.Update.Params,
    options?: JUHUU.Price.Update.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Price.Update.Response>> {
    return await super.sendRequest<JUHUU.Price.Update.Response>(
      {
        method: "PATCH",
        url: "prices/" + params.priceId,
        body: {
          userId: params.userId,
          productId: params.productId,
          name: params.name,
          type: params.type,
          status: params.status,
          amount: params.amount,
          currency: params.currency,
          taxBehavior: params.taxBehavior,
          taxPercentage: params.taxPercentage,
          recurringInterval: params.recurringInterval,
          recurringIntervalCount: params.recurringIntervalCount,
          trialPeriodDays: params.trialPeriodDays,
          usageType: params.usageType,
          tiers: params.tiers,
          discounts: params.discounts,
          metadata: params.metadata,
          isDefault: params.isDefault,
          priority: params.priority,
          minQuantity: params.minQuantity,
          maxQuantity: params.maxQuantity,
          unitLabel: params.unitLabel,
          transformQuantityDivideBy: params.transformQuantityDivideBy,
          transformQuantityRound: params.transformQuantityRound,
        },
        authenticationNotOptional: true,
      },
      options
    );
  }

  async delete(
    params: JUHUU.Price.Delete.Params,
    options?: JUHUU.Price.Delete.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Price.Delete.Response>> {
    return await super.sendRequest<JUHUU.Price.Delete.Response>(
      {
        method: "DELETE",
        url: "prices/" + params.priceId,
        authenticationNotOptional: true,
        body: undefined,
      },
      options
    );
  }
}