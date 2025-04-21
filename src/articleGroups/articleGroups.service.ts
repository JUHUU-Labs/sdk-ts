import { JUHUU } from "..";
import Service from "../index.service";

export default class ArticleGroupGroupsService extends Service {
  constructor(config: JUHUU.SetupConfig) {
    super(config);
  }

  async create(
    ArticleGroupCreateParams: JUHUU.ArticleGroup.Create.Params,
    ArticleGroupCreateOptions?: JUHUU.ArticleGroup.Create.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.ArticleGroup.Create.Response>> {
    return await super.sendRequest<JUHUU.ArticleGroup.Create.Response>(
      {
        method: "POST",
        url: "articleGroups",
        body: {
          propertyId: ArticleGroupCreateParams.propertyId,
        },
        authenticationNotOptional: true,
      },
      ArticleGroupCreateOptions
    );
  }

  async list(
    ArticleGroupListParams: JUHUU.ArticleGroup.List.Params,
    ArticleGroupListOptions?: JUHUU.ArticleGroup.List.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.ArticleGroup.List.Response>> {
    const queryArray: string[] = [];

    if (ArticleGroupListParams?.propertyId !== undefined) {
      queryArray.push("propertyId=" + ArticleGroupListParams.propertyId);
    }

    if (ArticleGroupListParams?.articleGroupId !== undefined) {
      queryArray.push(
        "articleGroupId=" + ArticleGroupListParams.articleGroupId
      );
    }

    if (ArticleGroupListOptions?.limit !== undefined) {
      queryArray.push("limit=" + ArticleGroupListOptions.limit);
    }

    if (ArticleGroupListOptions?.skip !== undefined) {
      queryArray.push("skip=" + ArticleGroupListOptions.skip);
    }

    return await super.sendRequest<JUHUU.ArticleGroup.List.Response>(
      {
        method: "GET",
        url: "articleGroups?" + queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: false,
      },
      ArticleGroupListOptions
    );
  }

  async retrieve(
    ArticleGroupRetrieveParams: JUHUU.ArticleGroup.Retrieve.Params,
    ArticleGroupRetrieveOptions?: JUHUU.ArticleGroup.Retrieve.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.ArticleGroup.Retrieve.Response>> {
    const queryArray: string[] = [];

    if (ArticleGroupRetrieveOptions?.expand !== undefined) {
      queryArray.push("expand=" + ArticleGroupRetrieveOptions.expand.join(","));
    }

    return await super.sendRequest<JUHUU.ArticleGroup.Retrieve.Response>(
      {
        method: "GET",
        url:
          "articleGroups/" +
          ArticleGroupRetrieveParams.articleGroupId +
          "?" +
          queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: false,
      },
      ArticleGroupRetrieveOptions
    );
  }

  async update(
    ArticleGroupUpdateParams: JUHUU.ArticleGroup.Update.Params,
    ArticleGroupUpdateOptions?: JUHUU.ArticleGroup.Update.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.ArticleGroup.Update.Response>> {
    return await super.sendRequest<JUHUU.ArticleGroup.Update.Response>(
      {
        method: "PATCH",
        url: "articleGroups/" + ArticleGroupUpdateParams.articleId,
        body: {
          title: ArticleGroupUpdateParams.title,
        },
        authenticationNotOptional: true,
      },
      ArticleGroupUpdateOptions
    );
  }

  async delete(
    ArticleGroupDeleteParams: JUHUU.ArticleGroup.Delete.Params,
    ArticleGroupDeleteOptions?: JUHUU.ArticleGroup.Delete.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.ArticleGroup.Delete.Response>> {
    return await super.sendRequest<JUHUU.ArticleGroup.Delete.Response>(
      {
        method: "DELETE",
        url: "articleGroups/" + ArticleGroupDeleteParams.articleGroupId,
        authenticationNotOptional: true,
        body: undefined,
      },
      ArticleGroupDeleteOptions
    );
  }
}
