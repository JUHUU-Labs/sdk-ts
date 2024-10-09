import { JUHUU, LanguageCodeArray } from "..";
import Service from "../index.service";

export default class ArticleEmbeddingsService extends Service {
  constructor(config: JUHUU.SetupConfig) {
    super(config);
  }

  async list(
    ArticleEmbeddingListParams: JUHUU.ArticleEmbedding.List.Params,
    ArticleEmbeddingListOptions?: JUHUU.ArticleEmbedding.List.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.ArticleEmbedding.List.Response>> {
    const queryArray: string[] = [];

    if (ArticleEmbeddingListOptions?.limit !== undefined) {
      queryArray.push("limit=" + ArticleEmbeddingListOptions.limit);
    }

    if (ArticleEmbeddingListParams?.articleId !== undefined) {
      queryArray.push("articleId=" + ArticleEmbeddingListParams.articleId);
    }

    if (ArticleEmbeddingListOptions?.skip !== undefined) {
      queryArray.push("skip=" + ArticleEmbeddingListOptions.skip);
    }

    return await super.sendRequest<JUHUU.ArticleEmbedding.List.Response>(
      {
        method: "GET",
        url: "articleEmbeddingEmbeddings?" + queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: false,
      },
      ArticleEmbeddingListOptions
    );
  }

  async retrieve(
    ArticleEmbeddingRetrieveParams: JUHUU.ArticleEmbedding.Retrieve.Params,
    ArticleEmbeddingRetrieveOptions?: JUHUU.ArticleEmbedding.Retrieve.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.ArticleEmbedding.Retrieve.Response>> {
    const queryArray: string[] = [];

    if (ArticleEmbeddingRetrieveOptions?.expand !== undefined) {
      queryArray.push(
        "expand=" + ArticleEmbeddingRetrieveOptions.expand.join(",")
      );
    }

    return await super.sendRequest<JUHUU.ArticleEmbedding.Retrieve.Response>(
      {
        method: "GET",
        url:
          "articleEmbeddingEmbeddings/" +
          ArticleEmbeddingRetrieveParams.articleEmbeddingId +
          "?" +
          queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: false,
      },
      ArticleEmbeddingRetrieveOptions
    );
  }
}
