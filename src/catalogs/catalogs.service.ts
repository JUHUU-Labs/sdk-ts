import { JUHUU } from "..";
import Service from "../index.service";

export default class CatalogsService extends Service {
  constructor(config: JUHUU.SetupConfig) {
    super(config);
  }

  async create(
    params: JUHUU.Catalog.Create.Params,
    options?: JUHUU.Catalog.Create.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Catalog.Create.Response>> {
    return await super.sendRequest<JUHUU.Catalog.Create.Response>(
      {
        method: "POST",
        url: "catalogs",
        body: {
          userId: params.userId,
          name: params.name,
          type: params.type,
          status: params.status,
          visibility: params.visibility,
          categories: params.categories,
          products: params.products,
          settings: params.settings,
          metadata: params.metadata,
          publishedAt: params.publishedAt,
          archivedAt: params.archivedAt,
          lastSyncedAt: params.lastSyncedAt,
          version: params.version,
          isDefault: params.isDefault,
          viewCount: params.viewCount,
          productCount: params.productCount,
          categoryCount: params.categoryCount,
          accessToken: params.accessToken,
          externalId: params.externalId,
          webhookUrl: params.webhookUrl,
        },
        authenticationNotOptional: true,
      },
      options
    );
  }

  async list(
    params: JUHUU.Catalog.List.Params,
    options?: JUHUU.Catalog.List.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Catalog.List.Response>> {
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

    if (params?.visibility !== undefined) {
      queryArray.push("visibility=" + params.visibility);
    }

    if (params?.isDefault !== undefined) {
      queryArray.push("isDefault=" + params.isDefault);
    }

    if (params?.industry !== undefined) {
      queryArray.push("industry=" + params.industry);
    }

    if (params?.region !== undefined) {
      queryArray.push("region=" + params.region);
    }

    if (params?.language !== undefined) {
      queryArray.push("language=" + params.language);
    }

    if (params?.externalId !== undefined) {
      queryArray.push("externalId=" + params.externalId);
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

    return await super.sendRequest<JUHUU.Catalog.List.Response>(
      {
        method: "GET",
        url: "catalogs?" + queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: false,
      },
      options
    );
  }

  async retrieve(
    params: JUHUU.Catalog.Retrieve.Params,
    options?: JUHUU.Catalog.Retrieve.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Catalog.Retrieve.Response>> {
    const queryArray: string[] = [];

    return await super.sendRequest<JUHUU.Catalog.Retrieve.Response>(
      {
        method: "GET",
        url: "catalogs/" + params.catalogId + "?" + queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: false,
      },
      options
    );
  }

  async update(
    params: JUHUU.Catalog.Update.Params,
    options?: JUHUU.Catalog.Update.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Catalog.Update.Response>> {
    return await super.sendRequest<JUHUU.Catalog.Update.Response>(
      {
        method: "PATCH",
        url: "catalogs/" + params.catalogId,
        body: {
          userId: params.userId,
          name: params.name,
          type: params.type,
          status: params.status,
          visibility: params.visibility,
          categories: params.categories,
          products: params.products,
          settings: params.settings,
          metadata: params.metadata,
          publishedAt: params.publishedAt,
          archivedAt: params.archivedAt,
          lastSyncedAt: params.lastSyncedAt,
          version: params.version,
          isDefault: params.isDefault,
          viewCount: params.viewCount,
          productCount: params.productCount,
          categoryCount: params.categoryCount,
          accessToken: params.accessToken,
          externalId: params.externalId,
          webhookUrl: params.webhookUrl,
        },
        authenticationNotOptional: true,
      },
      options
    );
  }

  async delete(
    params: JUHUU.Catalog.Delete.Params,
    options?: JUHUU.Catalog.Delete.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Catalog.Delete.Response>> {
    return await super.sendRequest<JUHUU.Catalog.Delete.Response>(
      {
        method: "DELETE",
        url: "catalogs/" + params.catalogId,
        authenticationNotOptional: true,
        body: undefined,
      },
      options
    );
  }
}
