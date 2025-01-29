import { JUHUU } from "../index";
import Service from "../index.service";

export default class ProductService extends Service {
  constructor(config: JUHUU.SetupConfig) {
    super(config);
  }

  async create(
    ProductCreateParams: JUHUU.Product.Create.Params,
    ProductCreateOptions?: JUHUU.Product.Create.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Product.Create.Response>> {
    return await super.sendRequest<JUHUU.Product.Create.Response>(
      {
        method: "POST",
        url: "products",
        body: {
          propertyId: ProductCreateParams.propertyId,
          name: ProductCreateParams.name,
        },
        authenticationNotOptional: true,
      },
      ProductCreateOptions
    );
  }

  async list(
    ProductListParams: JUHUU.Product.List.Params,
    ProductListOptions?: JUHUU.Product.List.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Product.List.Response>> {
    const queryArray: string[] = [];

    if (ProductListParams.categoryArray !== undefined) {
      queryArray.push(
        "categoryArray=" + ProductListParams.categoryArray.join(",")
      );
    }

    if (ProductListParams.modalityArray !== undefined) {
      queryArray.push(
        "modalityArray=" + ProductListParams.modalityArray.join(",")
      );
    }

    if (ProductListParams.sectorArray !== undefined) {
      queryArray.push("sectorArray=" + ProductListParams.sectorArray.join(","));
    }

    if (ProductListParams.technologyArray !== undefined) {
      queryArray.push(
        "technologyArray=" + ProductListParams.technologyArray.join(",")
      );
    }

    if (ProductListParams?.propertyId !== undefined) {
      queryArray.push("propertyId=" + ProductListParams.propertyId);
    }

    return await super.sendRequest<JUHUU.Product.List.Response>(
      {
        method: "GET",
        url: "products?" + queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: false,
      },
      ProductListOptions
    );
  }

  async retrieve(
    params: JUHUU.Product.Retrieve.Params,
    options?: JUHUU.Product.Retrieve.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Product.Retrieve.Response>> {
    const queryArray: string[] = [];

    if (options?.expand !== undefined) {
      queryArray.push("expand=" + options.expand.join(","));
    }

    return await super.sendRequest<JUHUU.Product.Retrieve.Response>(
      {
        method: "GET",
        url: "products/" + params.productId + "?" + queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: false,
      },
      options
    );
  }

  async update(
    ProductUpdateParams: JUHUU.Product.Update.Params,
    ProductUpdateOptions?: JUHUU.Product.Update.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Product.Update.Response>> {
    return await super.sendRequest<JUHUU.Product.Update.Response>(
      {
        method: "PATCH",
        url: "products/" + ProductUpdateParams.productId,
        body: {
          name: ProductUpdateParams.name,
          previewText: ProductUpdateParams.previewText,
          description: ProductUpdateParams.description,
          highlightArray: ProductUpdateParams.highlightArray,
          purposeArray: ProductUpdateParams.purposeArray,
          technologyArray: ProductUpdateParams.technologyArray,
          articleId: ProductUpdateParams.articleId,
        },
        authenticationNotOptional: true,
      },
      ProductUpdateOptions
    );
  }

  async delete(
    ProductDeleteParams: JUHUU.Product.Delete.Params,
    ProductDeleteOptions?: JUHUU.Product.Delete.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Product.Delete.Response>> {
    return await super.sendRequest<JUHUU.Product.Delete.Response>(
      {
        method: "DELETE",
        url: "products/" + ProductDeleteParams.productId,
        authenticationNotOptional: true,
        body: undefined,
      },
      ProductDeleteOptions
    );
  }
}
