import { JUHUU } from "..";
import Service from "../index.service";

export default class PropertiesService extends Service {
  constructor(config: JUHUU.SetupConfig) {
    super(config);
  }

  async create(
    PropertyCreateParams: JUHUU.Property.Create.Params,
    PropertyCreateOptions?: JUHUU.Property.Create.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Property.Create.Response>> {
    const queryArray: string[] = [];

    return await super.sendRequest<JUHUU.Property.Create.Response>({
      method: "POST",
      url: "properties",
      body: {
        userId: PropertyCreateParams.userId,
        name: PropertyCreateParams.name,
        type: PropertyCreateParams.type,
      },
      useAuthentication: true,
    });
  }

  async retrieve(
    PropertyRetrieveParams: JUHUU.Property.Retrieve.Params,
    PropertyRetrieveOptions?: JUHUU.Property.Retrieve.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Property.Retrieve.Response>> {
    const queryArray: string[] = [];

    return await super.sendRequest<JUHUU.Property.Retrieve.Response>({
      method: "GET",
      url:
        "properties/" +
        PropertyRetrieveParams.propertyId +
        "?" +
        queryArray.join("&"),
      body: undefined,
      useAuthentication: false,
    });
  }

  async list(
    PropertyListParams: JUHUU.Property.List.Params,
    PropertyListOptions?: JUHUU.Property.List.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Property.List.Response>> {
    const queryArray: string[] = [];

    return await super.sendRequest<JUHUU.Property.List.Response>(
      {
        method: "GET",
        url: "properties?" + queryArray.join("&"),
        body: undefined,
        useAuthentication: false,
      },
      PropertyListOptions
    );
  }

  async update(
    PropertyUpdateParams: JUHUU.Property.Update.Params,
    PropertyUpdateOptions?: JUHUU.Property.Update.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Property.Update.Response>> {
    return await super.sendRequest<JUHUU.Property.Update.Response>(
      {
        method: "PATCH",
        url: "properties/" + PropertyUpdateParams.propertyId,
        body: {
          name: PropertyUpdateParams.name,
          legalName: PropertyUpdateParams.legalName,
          billingAddress: PropertyUpdateParams.billingAddress,
          email: PropertyUpdateParams.email,
          website: PropertyUpdateParams.website,
          phone: PropertyUpdateParams.phone,
          faqUrl: PropertyUpdateParams.faqUrl,
          colorScheme: PropertyUpdateParams.colorScheme,
          contactUrl: PropertyUpdateParams.contactUrl,
        },
        useAuthentication: true,
      },
      PropertyUpdateOptions
    );
  }

  async stripeAccountUrl(
    PropertyStripeAccountUrlParams: JUHUU.Property.StripeAccountUrl.Params,
    PropertyStripeAccountUrlOptions?: JUHUU.Property.StripeAccountUrl.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Property.StripeAccountUrl.Response>> {
    return await super.sendRequest<JUHUU.Property.StripeAccountUrl.Response>(
      {
        method: "GET",
        url:
          "properties/" +
          PropertyStripeAccountUrlParams.propertyId +
          "/stripeAccountUrl",
        body: undefined,
        useAuthentication: true,
      },
      PropertyStripeAccountUrlOptions
    );
  }
}
