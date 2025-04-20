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

    return await super.sendRequest<JUHUU.Property.Create.Response>(
      {
        method: "POST",
        url: "properties",
        body: {
          userId: PropertyCreateParams.userId,
          name: PropertyCreateParams.name,
          type: PropertyCreateParams.type,
        },
        authenticationNotOptional: true,
      },
      PropertyCreateOptions
    );
  }

  async retrieve(
    PropertyRetrieveParams: JUHUU.Property.Retrieve.Params,
    PropertyRetrieveOptions?: JUHUU.Property.Retrieve.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Property.Retrieve.Response>> {
    const queryArray: string[] = [];

    return await super.sendRequest<JUHUU.Property.Retrieve.Response>(
      {
        method: "GET",
        url:
          "properties/" +
          PropertyRetrieveParams.propertyId +
          "?" +
          queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: false,
      },
      PropertyRetrieveOptions
    );
  }

  async list(
    PropertyListParams: JUHUU.Property.List.Params,
    PropertyListOptions?: JUHUU.Property.List.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Property.List.Response>> {
    const queryArray: string[] = [];

    if (PropertyListParams.userId !== undefined) {
      queryArray.push("userId=" + PropertyListParams.userId);
    }

    return await super.sendRequest<JUHUU.Property.List.Response>(
      {
        method: "GET",
        url: "properties?" + queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: false,
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
          stripeEmail: PropertyUpdateParams.stripeEmail,
        },
        authenticationNotOptional: true,
      },
      PropertyUpdateOptions
    );
  }

  async onboarding(
    PropertyOnboardingParams: JUHUU.Property.Onboarding.Params,
    PropertyOnboardingOptions?: JUHUU.Property.Onboarding.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Property.Onboarding.Response>> {
    return await super.sendRequest<JUHUU.Property.Onboarding.Response>(
      {
        method: "POST",
        url: "properties/onboarding",
        body: {
          primaryColor: PropertyOnboardingParams.primaryColor,
          backgroundColor: PropertyOnboardingParams.backgroundColor,
          logo: PropertyOnboardingParams.logo,
          name: PropertyOnboardingParams.name,
        },
        authenticationNotOptional: true,
      },
      PropertyOnboardingOptions
    );
  }

  async retrieveStripeConnectPortalUrl(
    PropertyRetrieveStripeConnectPortalUrlParams: JUHUU.Property.RetrieveStripeConnectPortalUrl.Params,
    PropertyRetrieveStripeConnectPortalUrlOptions?: JUHUU.Property.RetrieveStripeConnectPortalUrl.Options
  ): Promise<
    JUHUU.HttpResponse<JUHUU.Property.RetrieveStripeConnectPortalUrl.Response>
  > {
    return await super.sendRequest<JUHUU.Property.RetrieveStripeConnectPortalUrl.Response>(
      {
        method: "GET",
        url:
          "properties/" +
          PropertyRetrieveStripeConnectPortalUrlParams.propertyId +
          "/retrieveStripeConnectPortalUrl",
        body: undefined,
        authenticationNotOptional: true,
      },
      PropertyRetrieveStripeConnectPortalUrlOptions
    );
  }

  async retrieveStripeCustomerPortalUrl(
    PropertyRetrieveStripeCustomerPortalUrlParams: JUHUU.Property.RetrieveStripeCustomerPortalUrl.Params,
    PropertyRetrieveStripeCustomerPortalUrlOptions?: JUHUU.Property.RetrieveStripeCustomerPortalUrl.Options
  ): Promise<
    JUHUU.HttpResponse<JUHUU.Property.RetrieveStripeCustomerPortalUrl.Response>
  > {
    return await super.sendRequest<JUHUU.Property.RetrieveStripeCustomerPortalUrl.Response>(
      {
        method: "GET",
        url:
          "properties/" +
          PropertyRetrieveStripeCustomerPortalUrlParams.propertyId +
          "/retrieveStripeCustomerPortalUrl",
        body: undefined,
        authenticationNotOptional: true,
      },
      PropertyRetrieveStripeCustomerPortalUrlOptions
    );
  }

  async retrieveStripeSubscriptionStartUrl(
    PropertyRetrieveStripeSubscriptionStartUrlParams: JUHUU.Property.RetrieveStripeSubscriptionStartUrl.Params,
    PropertyRetrieveStripeSubscriptionStartUrlOptions?: JUHUU.Property.RetrieveStripeSubscriptionStartUrl.Options
  ): Promise<
    JUHUU.HttpResponse<JUHUU.Property.RetrieveStripeSubscriptionStartUrl.Response>
  > {
    return await super.sendRequest<JUHUU.Property.RetrieveStripeSubscriptionStartUrl.Response>(
      {
        method: "GET",
        url:
          "properties/" +
          PropertyRetrieveStripeSubscriptionStartUrlParams.propertyId +
          "/retrieveStripeSubscriptionStartUrl",
        body: undefined,
        authenticationNotOptional: true,
      },
      PropertyRetrieveStripeSubscriptionStartUrlOptions
    );
  }

  async enableCapability(
    PropertyEnableCapabilityParams: JUHUU.Property.EnableCapability.Params,
    PropertyEnableCapabilityOptions?: JUHUU.Property.EnableCapability.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Property.EnableCapability.Response>> {
    return await super.sendRequest<JUHUU.Property.EnableCapability.Response>(
      {
        method: "PATCH",
        url:
          "properties/" +
          PropertyEnableCapabilityParams.propertyId +
          "/enableCapability",
        body: {
          capabilityType: PropertyEnableCapabilityParams.capabilityType,
          acceptTermsThatApplyToThatCapability:
            PropertyEnableCapabilityParams.acceptTermsThatApplyToThatCapability,
        },
        authenticationNotOptional: true,
      },
      PropertyEnableCapabilityOptions
    );
  }

  async acceptLatestAgreement(
    PropertyAcceptLatestAgreementParams: JUHUU.Property.AcceptLatestAgreement.Params,
    PropertyAcceptLatestAgreementOptions?: JUHUU.Property.AcceptLatestAgreement.Options
  ): Promise<
    JUHUU.HttpResponse<JUHUU.Property.AcceptLatestAgreement.Response>
  > {
    return await super.sendRequest<JUHUU.Property.AcceptLatestAgreement.Response>(
      {
        method: "PATCH",
        url:
          "properties/" +
          PropertyAcceptLatestAgreementParams.propertyId +
          "/acceptLatestAgreement",
        body: {},
        authenticationNotOptional: true,
      },
      PropertyAcceptLatestAgreementOptions
    );
  }
}
