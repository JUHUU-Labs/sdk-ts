import { JUHUU } from "../index";
import Service from "../index.service";

export default class ProductService extends Service {
    constructor(config: JUHUU.SetupConfig) {
        super(config);
    }

    async list(
        params: JUHUU.Product.List.Params,
        options?: JUHUU.Product.List.Options
    ): Promise<JUHUU.HttpResponse<JUHUU.Product.List.Response>> {
        const queryArray: string[] = [];

        // Check if 'category' exists in params
        if (params.category !== undefined) {
            queryArray.push("category=" + params.category);
        }

        return await super.sendRequest<JUHUU.Product.List.Response>(
            {
                method: "GET",
                url: "products?" + queryArray.join("&"),
                body: undefined,
                useAuthentication: false,
            },
            options
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
                url:
                    "products/" +
                    params.productId +
                    "?" +
                    queryArray.join("&"),
                body: undefined,
                useAuthentication: false,
            },
            options
        );
    }
}
