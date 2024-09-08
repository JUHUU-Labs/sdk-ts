import { JUHUU } from "..";
import Service from "../index.service";

export default class UsersService extends Service {
  constructor(config: JUHUU.SetupConfig) {
    super(config);
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
        useAuthentication: true,
      },
      UserRetrieveOptions
    );
  }

  async exists(
    UserExistsParams: JUHUU.User.Exists.Params,
    UserExistsOptions?: JUHUU.User.Exists.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.User.Exists.Response>> {
    return await super.sendRequest<JUHUU.User.Exists.Response>(
      {
        method: "GET",
        url: "users/exists?email=" + UserExistsParams.email,
        body: undefined,
        useAuthentication: false,
      },
      UserExistsOptions
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
        useAuthentication: false,
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
        useAuthentication: false,
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
        useAuthentication: true,
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
        useAuthentication: true,
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

    if (UserListParams.propertyId !== undefined) {
      queryArray.push("propertyId=" + UserListParams.propertyId);
    }

    return await super.sendRequest<JUHUU.User.List.Response>(
      {
        method: "GET",
        url: "users?" + queryArray.join("&"),
        body: undefined,
        useAuthentication: true,
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
          licenseArray: UserUpdateParams?.licenseArray,
          platform: UserUpdateParams?.platform,
          languageCode: UserUpdateParams?.languageCode,
          appVersion: UserUpdateParams?.appVersion,
          billingAddress: UserUpdateParams?.billingAddress,
          vat: UserUpdateParams?.vat,
          acceptedTermIdArray: UserUpdateParams?.acceptedTermIdArray,
        },
        useAuthentication: true,
      },
      UserUpdateOptions
    );
  }

  async inviteEmployee(
    UserInviteEmployeeParams: JUHUU.User.InviteEmployee.Params,
    UserInviteEmployeeOptions?: JUHUU.User.InviteEmployee.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.User.InviteEmployee.Response>> {
    return await super.sendRequest<JUHUU.User.InviteEmployee.Response>(
      {
        method: "POST",
        url: "users/" + UserInviteEmployeeParams.userId + "/inviteEmployee",
        body: {
          userId: UserInviteEmployeeParams?.userIdToInvite,
          email: UserInviteEmployeeParams?.email,
        },
        useAuthentication: true,
      },
      UserInviteEmployeeOptions
    );
  }

  async removeEmployee(
    UserRemoveEmployeeParams: JUHUU.User.RemoveEmployee.Params,
    UserRemoveEmployeeOptions?: JUHUU.User.RemoveEmployee.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.User.RemoveEmployee.Response>> {
    return await super.sendRequest<JUHUU.User.RemoveEmployee.Response>(
      {
        method: "PATCH",
        url: "users/" + UserRemoveEmployeeParams.userId + "/removeEmployee",
        body: {
          userId: UserRemoveEmployeeParams.userIdToRemove,
        },
        useAuthentication: true,
      },
      UserRemoveEmployeeOptions
    );
  }
}
