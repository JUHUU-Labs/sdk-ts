import { JUHUU } from "../index";
import Service from "../index.service";

export default class ProductService extends Service {
    constructor(config: JUHUU.SetupConfig) {
        super(config);
    }

    async listProducts(
        productListParams: JUHUU.Product.List.Params,
        productListOptions?: JUHUU.Product.List.Options
    ): Promise<JUHUU.HttpResponse<JUHUU.Product.List.Response>> {
        const queryArray: string[] = [];

        // Check if 'category' exists in productListParams
        if (productListParams.category !== undefined) {
            queryArray.push("category=" + productListParams.category);
        }

        return await super.sendRequest<JUHUU.Product.List.Response>(
            {
                method: "GET",
                url: "products?" + queryArray.join("&"),
                body: undefined,
                useAuthentication: false,
            },
            productListOptions
        );
    }

    async retrieveProduct(
        productRetrieveParams: JUHUU.Product.Retrieve.Params,
        productRetrieveOptions?: JUHUU.Product.Retrieve.Options
    ): Promise<JUHUU.HttpResponse<JUHUU.Product.Retrieve.Response>> {
        const queryArray: string[] = [];

        // Check if 'expand' exists in productRetrieveOptions
        if (productRetrieveOptions?.expand !== undefined) {
            queryArray.push("expand=" + productRetrieveOptions.expand.join(","));
        }

        return await super.sendRequest<JUHUU.Product.Retrieve.Response>(
            {
                method: "GET",
                url: `products/${productRetrieveParams.productId}?${queryArray.join("&")}`,
                body: undefined,
                useAuthentication: false,
            },
            productRetrieveOptions
        );
    }
}
