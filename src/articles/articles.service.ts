import { JUHUU, LanguageCodeArray } from "..";
import Service from "../index.service";

export default class ArticlesService extends Service {
  constructor(config: JUHUU.SetupConfig) {
    super(config);
  }

  async create(
    ArticleCreateParams: JUHUU.Article.Create.Params,
    ArticleCreateOptions?: JUHUU.Article.Create.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Article.Create.Response>> {
    return await super.sendRequest<JUHUU.Article.Create.Response>(
      {
        method: "POST",
        url: "articles",
        body: {
          propertyId: ArticleCreateParams.propertyId,
        },
        authenticationNotOptional: true,
      },
      ArticleCreateOptions
    );
  }

  async list(
    ArticleListParams: JUHUU.Article.List.Params,
    ArticleListOptions?: JUHUU.Article.List.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Article.List.Response>> {
    const queryArray: string[] = [];

    if (ArticleListOptions?.limit !== undefined) {
      queryArray.push("limit=" + ArticleListOptions.limit);
    }

    if (ArticleListParams?.propertyId !== undefined) {
      queryArray.push("propertyId=" + ArticleListParams.propertyId);
    }

    if (ArticleListParams?.statusArray !== undefined) {
      queryArray.push("statusArray=" + ArticleListParams.statusArray.join(","));
    }

    if (ArticleListOptions?.skip !== undefined) {
      queryArray.push("skip=" + ArticleListOptions.skip);
    }

    return await super.sendRequest<JUHUU.Article.List.Response>(
      {
        method: "GET",
        url: "articles?" + queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: false,
      },
      ArticleListOptions
    );
  }

  async retrieve(
    ArticleRetrieveParams: JUHUU.Article.Retrieve.Params,
    ArticleRetrieveOptions?: JUHUU.Article.Retrieve.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Article.Retrieve.Response>> {
    const queryArray: string[] = [];

    if (ArticleRetrieveOptions?.expand !== undefined) {
      queryArray.push("expand=" + ArticleRetrieveOptions.expand.join(","));
    }

    return await super.sendRequest<JUHUU.Article.Retrieve.Response>(
      {
        method: "GET",
        url:
          "articles/" +
          ArticleRetrieveParams.articleId +
          "?" +
          queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: false,
      },
      ArticleRetrieveOptions
    );
  }

  async update(
    ArticleUpdateParams: JUHUU.Article.Update.Params,
    ArticleUpdateOptions?: JUHUU.Article.Update.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Article.Update.Response>> {
    return await super.sendRequest<JUHUU.Article.Update.Response>(
      {
        method: "PATCH",
        url: "articles/" + ArticleUpdateParams.articleId,
        body: {
          title: ArticleUpdateParams.title,
          subtitle: ArticleUpdateParams.subtitle,
          parentArticleId: ArticleUpdateParams.parentArticleId,
          markdownContent: ArticleUpdateParams.markdownContent,
          status: ArticleUpdateParams.status,
          languageCodeArray: ArticleUpdateParams.languageCodeArray,
        },
        authenticationNotOptional: true,
      },
      ArticleUpdateOptions
    );
  }

  async delete(
    ArticleDeleteParams: JUHUU.Article.Delete.Params,
    ArticleDeleteOptions?: JUHUU.Article.Delete.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Article.Delete.Response>> {
    return await super.sendRequest<JUHUU.Article.Delete.Response>(
      {
        method: "DELETE",
        url: "articles/" + ArticleDeleteParams.articleId,
        authenticationNotOptional: true,
        body: undefined,
      },
      ArticleDeleteOptions
    );
  }

  async search(
    ArticleSearchParams: JUHUU.Article.Search.Params,
    ArticleSearchOptions?: JUHUU.Article.Search.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Article.Search.Response>> {
    const queryArray: string[] = [];

    if (ArticleSearchParams?.text !== undefined) {
      queryArray.push("text=" + ArticleSearchParams.text);
    }

    if (ArticleSearchParams?.slug !== undefined) {
      queryArray.push("slug=" + ArticleSearchParams.slug);
    }

    if (ArticleSearchOptions?.limit !== undefined) {
      queryArray.push("limit=" + ArticleSearchOptions.limit);
    }

    if (ArticleSearchOptions?.skip !== undefined) {
      queryArray.push("skip=" + ArticleSearchOptions.skip);
    }

    return await super.sendRequest<JUHUU.Article.Search.Response>(
      {
        method: "GET",
        url: "articles/search?" + queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: false,
      },
      ArticleSearchOptions
    );
  }
}
