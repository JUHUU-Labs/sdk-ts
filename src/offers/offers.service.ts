import { JUHUU } from "..";
import Service from "../index.service";

export default class OffersService extends Service {
  constructor(config: JUHUU.SetupConfig) {
    super(config);
  }

  async create(
    params: JUHUU.Offer.Create.Params,
    options?: JUHUU.Offer.Create.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Offer.Create.Response>> {
    return await super.sendRequest<JUHUU.Offer.Create.Response>(
      {
        method: "POST",
        url: "offers",
        body: {
          userId: params.userId,
          name: params.name,
          description: params.description,
          type: params.type,
          status: params.status,
          scope: params.scope,
          code: params.code,
          title: params.title,
          subtitle: params.subtitle,
          imageUrl: params.imageUrl,
          bannerUrl: params.bannerUrl,
          landingPageUrl: params.landingPageUrl,
          termsAndConditions: params.termsAndConditions,
          conditions: params.conditions,
          discount: params.discount,
          usage: params.usage,
          targeting: params.targeting,
          scheduling: params.scheduling,
          metrics: params.metrics,
          priority: params.priority,
          isStackable: params.isStackable,
          requiresCouponCode: params.requiresCouponCode,
          isPublic: params.isPublic,
          isAutomaticallyApplied: params.isAutomaticallyApplied,
          notificationSettings: params.notificationSettings,
          lastModifiedBy: params.lastModifiedBy,
          approvedBy: params.approvedBy,
          approvedAt: params.approvedAt,
          tags: params.tags,
          customFields: params.customFields,
          integrationData: params.integrationData,
        },
        authenticationNotOptional: true,
      },
      options
    );
  }

  async list(
    params: JUHUU.Offer.List.Params,
    options?: JUHUU.Offer.List.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Offer.List.Response>> {
    const queryArray: string[] = [];

    if (params?.userId !== undefined) {
      queryArray.push("userId=" + params.userId);
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

    if (params?.scope !== undefined) {
      queryArray.push("scope=" + params.scope);
    }

    if (params?.code !== undefined) {
      queryArray.push("code=" + params.code);
    }

    if (params?.isPublic !== undefined) {
      queryArray.push("isPublic=" + params.isPublic);
    }

    if (params?.isActive !== undefined) {
      queryArray.push("isActive=" + params.isActive);
    }

    if (params?.requiresCouponCode !== undefined) {
      queryArray.push("requiresCouponCode=" + params.requiresCouponCode);
    }

    if (params?.priority !== undefined) {
      queryArray.push("priority=" + params.priority);
    }

    if (params?.tags !== undefined) {
      queryArray.push("tags=" + params.tags.join(","));
    }

    if (params?.sortBy !== undefined) {
      queryArray.push("sortBy=" + params.sortBy);
    }

    if (params?.sortOrder !== undefined) {
      queryArray.push("sortOrder=" + params.sortOrder);
    }

    if (options?.limit !== undefined) {
      queryArray.push("limit=" + options.limit);
    }

    return await super.sendRequest<JUHUU.Offer.List.Response>(
      {
        method: "GET",
        url: "offers?" + queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: false,
      },
      options
    );
  }

  async retrieve(
    params: JUHUU.Offer.Retrieve.Params,
    options?: JUHUU.Offer.Retrieve.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Offer.Retrieve.Response>> {
    const queryArray: string[] = [];

    return await super.sendRequest<JUHUU.Offer.Retrieve.Response>(
      {
        method: "GET",
        url: "offers/" + params.offerId + "?" + queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: false,
      },
      options
    );
  }

  async update(
    params: JUHUU.Offer.Update.Params,
    options?: JUHUU.Offer.Update.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Offer.Update.Response>> {
    return await super.sendRequest<JUHUU.Offer.Update.Response>(
      {
        method: "PATCH",
        url: "offers/" + params.offerId,
        body: {
          userId: params.userId,
          name: params.name,
          description: params.description,
          type: params.type,
          status: params.status,
          scope: params.scope,
          code: params.code,
          title: params.title,
          subtitle: params.subtitle,
          imageUrl: params.imageUrl,
          bannerUrl: params.bannerUrl,
          landingPageUrl: params.landingPageUrl,
          termsAndConditions: params.termsAndConditions,
          conditions: params.conditions,
          discount: params.discount,
          usage: params.usage,
          targeting: params.targeting,
          scheduling: params.scheduling,
          metrics: params.metrics,
          priority: params.priority,
          isStackable: params.isStackable,
          requiresCouponCode: params.requiresCouponCode,
          isPublic: params.isPublic,
          isAutomaticallyApplied: params.isAutomaticallyApplied,
          notificationSettings: params.notificationSettings,
          lastModifiedBy: params.lastModifiedBy,
          approvedBy: params.approvedBy,
          approvedAt: params.approvedAt,
          tags: params.tags,
          customFields: params.customFields,
          integrationData: params.integrationData,
        },
        authenticationNotOptional: true,
      },
      options
    );
  }

  async delete(
    params: JUHUU.Offer.Delete.Params,
    options?: JUHUU.Offer.Delete.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Offer.Delete.Response>> {
    return await super.sendRequest<JUHUU.Offer.Delete.Response>(
      {
        method: "DELETE",
        url: "offers/" + params.offerId,
        authenticationNotOptional: true,
        body: undefined,
      },
      options
    );
  }
}
