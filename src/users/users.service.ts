import { JUHUU } from "..";
import Service from "../index.service";

export default class UsersService extends Service {
  constructor(config: JUHUU.SetupConfig) {
    super(config);
  }

  async create(
    UserCreateParams: JUHUU.User.Create.Params,
    UserCreateOptions?: JUHUU.User.Create.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.User.Create.Response>> {
    return await super.sendRequest<JUHUU.User.Create.Response>(
      {
        method: "POST",
        url: "users",
        body: {
          name: UserCreateParams.name,
          type: UserCreateParams.type,
          createdByPropertyId: UserCreateParams.createdByPropertyId,
          licenseArray: UserCreateParams.licenseArray,
        },
        authenticationNotOptional: true,
      },
      UserCreateOptions
    );
  }

  async retrieve(
    UserRetrieveParams: JUHUU.User.Retrieve.Params,
    UserRetrieveOptions?: JUHUU.User.Retrieve.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.User.Retrieve.Response>> {
    const queryArray: string[] = [];

    // if (UserRetrieveOptions?.expand !== undefined) {
    //     queryArray.push(
    //         "expand=" + UserRetrieveOptions.expand.join(","),
    //     );
    // }

    return await super.sendRequest<JUHUU.User.Retrieve.Response>(
      {
        method: "GET",
        url: "users/" + UserRetrieveParams.userId + "?" + queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: true,
      },
      UserRetrieveOptions
    );
  }

  async registerEmailPassword(
    UserRegisterEmailPasswordParams: JUHUU.User.RegisterEmailPassword.Params,
    UserRegisterEmailPasswordOptions?: JUHUU.User.RegisterEmailPassword.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.User.RegisterEmailPassword.Response>> {
    return await super.sendRequest<JUHUU.User.RegisterEmailPassword.Response>(
      {
        method: "POST",
        url: "auth/emailPassword/register",
        body: {
          email: UserRegisterEmailPasswordParams.email,
          password: UserRegisterEmailPasswordParams.password,
        },
        authenticationNotOptional: false,
      },
      UserRegisterEmailPasswordOptions
    );
  }

  async loginEmailPassword(
    UserLoginEmailPasswordParams: JUHUU.User.LoginEmailPassword.Params,
    UserLoginEmailPasswordOptions?: JUHUU.User.LoginEmailPassword.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.User.LoginEmailPassword.Response>> {
    return await super.sendRequest<JUHUU.User.LoginEmailPassword.Response>(
      {
        method: "POST",
        url: "auth/emailPassword/login",
        body: {
          email: UserLoginEmailPasswordParams.email,
          password: UserLoginEmailPasswordParams.password,
        },
        authenticationNotOptional: false,
      },
      UserLoginEmailPasswordOptions
    );
  }

  async paymentMethodTokens(
    UserPaymentMethodTokensParams: JUHUU.User.PaymentMethodTokens.Params,
    UserPaymentMethodTokensOptions?: JUHUU.User.PaymentMethodTokens.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.User.PaymentMethodTokens.Response>> {
    return await super.sendRequest<JUHUU.User.PaymentMethodTokens.Response>(
      {
        method: "GET",
        url:
          "users/" +
          UserPaymentMethodTokensParams.userId +
          "/paymentMethodTokens",
        body: undefined,
        authenticationNotOptional: true,
      },
      UserPaymentMethodTokensOptions
    );
  }

  async refreshAccessToken(
    UserRefreshAccessTokenParams: JUHUU.User.RefreshAccessToken.Params,
    UserRefreshAccessTokenOptions?: JUHUU.User.RefreshAccessToken.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.User.RefreshAccessToken.Response>> {
    return await super.sendRequest<JUHUU.User.RefreshAccessToken.Response>(
      {
        method: "GET",
        url: "auth/refresh",
        body: undefined,
        authenticationNotOptional: true,
      },
      {
        accessToken: UserRefreshAccessTokenParams?.refreshToken,
        ...UserRefreshAccessTokenOptions,
      }
    );
  }

  async list(
    UserListParams: JUHUU.User.List.Params,
    UserListOptions?: JUHUU.User.List.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.User.List.Response>> {
    const queryArray: string[] = [];

    if (UserListParams.managementUserId !== undefined) {
      queryArray.push("managementUserId=" + UserListParams.managementUserId);
    }

    if (UserListParams.createdByPropertyId !== undefined) {
      queryArray.push(
        "createdByPropertyId=" + UserListParams.createdByPropertyId
      );
    }

    if (UserListParams.customerOfPropertyId !== undefined) {
      queryArray.push(
        "customerOfPropertyId=" + UserListParams.customerOfPropertyId
      );
    }

    if (UserListParams?.license?.cardId !== undefined) {
      queryArray.push("license[cardId]=" + UserListParams?.license?.cardId);
    }

    if (UserListOptions?.skip !== undefined) {
      queryArray.push("skip=" + UserListOptions.skip);
    }

    if (UserListOptions?.limit !== undefined) {
      queryArray.push("limit=" + UserListOptions.limit);
    }

    return await super.sendRequest<JUHUU.User.List.Response>(
      {
        method: "GET",
        url: "users?" + queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: true,
      },
      UserListOptions
    );
  }

  async update(
    UserUpdateParams: JUHUU.User.Update.Params,
    UserUpdateOptions?: JUHUU.User.Update.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.User.Update.Response>> {
    return await super.sendRequest<JUHUU.User.Update.Response>(
      {
        method: "PATCH",
        url: "users/" + UserUpdateParams.userId,
        body: {
          name: UserUpdateParams?.name,
          platform: UserUpdateParams?.platform,
          languageCode: UserUpdateParams?.languageCode,
          appVersion: UserUpdateParams?.appVersion,
          billingAddress: UserUpdateParams?.billingAddress,
          taxCodeArray: UserUpdateParams?.taxCodeArray,
          acceptedTermIdArray: UserUpdateParams?.acceptedTermIdArray,
          group: UserUpdateParams?.group,
        },
        authenticationNotOptional: true,
      },
      UserUpdateOptions
    );
  }

  async memberCreate(
    UserInviteMemberParams: JUHUU.User.InviteMember.Params,
    UserInviteMemberOptions?: JUHUU.User.InviteMember.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.User.InviteMember.Response>> {
    return await super.sendRequest<JUHUU.User.InviteMember.Response>(
      {
        method: "POST",
        url: "users/" + UserInviteMemberParams.userId + "/members",
        body: {
          userId: UserInviteMemberParams?.userIdToInvite,
          email: UserInviteMemberParams?.email,
        },
        authenticationNotOptional: true,
      },
      UserInviteMemberOptions
    );
  }

  async memberDelete(
    UserRemoveMemberParams: JUHUU.User.RemoveMember.Params,
    UserRemoveMemberOptions?: JUHUU.User.RemoveMember.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.User.RemoveMember.Response>> {
    return await super.sendRequest<JUHUU.User.RemoveMember.Response>(
      {
        method: "DELETE",
        url:
          "users/" +
          UserRemoveMemberParams.managementUserId +
          "/members/" +
          UserRemoveMemberParams.memberUserId,
        body: undefined,
        authenticationNotOptional: true,
      },
      UserRemoveMemberOptions
    );
  }

  async delete(
    UserDeleteParams: JUHUU.User.Delete.Params,
    UserDeleteOptions?: JUHUU.User.Delete.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.User.Delete.Response>> {
    return await super.sendRequest<JUHUU.User.Delete.Response>(
      {
        method: "DELETE",
        url: "users/" + UserDeleteParams.userId,
        authenticationNotOptional: true,
        body: undefined,
      },
      UserDeleteOptions
    );
  }

  async createIdentityVerificationUrl(
    UserCreateIdentityVerificationUrlParams: JUHUU.User.CreateIdentityVerificationUrl.Params,
    UserCreateIdentityVerificationUrlOptions?: JUHUU.User.CreateIdentityVerificationUrl.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.User.CreateIdentityVerificationUrl.Response>> {
    return await super.sendRequest<JUHUU.User.CreateIdentityVerificationUrl.Response>(
      {
        method: "POST",
        url: "users/" + UserCreateIdentityVerificationUrlParams.userId + "/createIdentityVerificationUrl",
        body: {
          propertyId: UserCreateIdentityVerificationUrlParams.propertyId,
        },
        authenticationNotOptional: true,
      },
      UserCreateIdentityVerificationUrlOptions
    );
  }
}
