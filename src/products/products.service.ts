import { JUHUU } from "../index";
import Service from "../index.service";

export default class ProductService extends Service {
  constructor(config: JUHUU.SetupConfig) {
    super(config);
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
        useAuthentication: false,
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
        useAuthentication: false,
      },
      options
    );
  }
}
