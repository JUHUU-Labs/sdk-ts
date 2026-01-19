import { JUHUU } from "..";
import Service from "../index.service";

export default class UsersService extends Service {
  constructor(config: JUHUU.SetupConfig) {
    super(config);
  }

  async create(
    UserCreateParams: JUHUU.User.Create.Params,
    UserCreateOptions?: JUHUU.User.Create.Options,
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
      UserCreateOptions,
    );
  }

  async retrieve(
    UserRetrieveParams: JUHUU.User.Retrieve.Params,
    UserRetrieveOptions?: JUHUU.User.Retrieve.Options,
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
      UserRetrieveOptions,
    );
  }

  async registerEmailPassword(
    UserRegisterEmailPasswordParams: JUHUU.User.RegisterEmailPassword.Params,
    UserRegisterEmailPasswordOptions?: JUHUU.User.RegisterEmailPassword.Options,
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
      UserRegisterEmailPasswordOptions,
    );
  }

  async loginEmailPassword(
    UserLoginEmailPasswordParams: JUHUU.User.LoginEmailPassword.Params,
    UserLoginEmailPasswordOptions?: JUHUU.User.LoginEmailPassword.Options,
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
      UserLoginEmailPasswordOptions,
    );
  }

  async paymentMethodTokens(
    UserPaymentMethodTokensParams: JUHUU.User.PaymentMethodTokens.Params,
    UserPaymentMethodTokensOptions?: JUHUU.User.PaymentMethodTokens.Options,
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
      UserPaymentMethodTokensOptions,
    );
  }

  async refreshAccessToken(
    UserRefreshAccessTokenParams: JUHUU.User.RefreshAccessToken.Params,
    UserRefreshAccessTokenOptions?: JUHUU.User.RefreshAccessToken.Options,
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
      },
    );
  }

  async identify(
    UserIdentifyParams: JUHUU.User.Identify.Params,
    UserIdentifyUrlOptions?: JUHUU.User.Identify.Options,
  ): Promise<JUHUU.HttpResponse<JUHUU.User.Identify.Response>> {
    return await super.sendRequest<JUHUU.User.Identify.Response>(
      {
        method: "POST",
        url: "auth/identify",
        body: {
          identifier: UserIdentifyParams.identifier,
        },
        authenticationNotOptional: false,
      },
      UserIdentifyUrlOptions,
    );
  }

  async otpRequest(
    UserOtpRequestParams: JUHUU.User.OtpRequest.Params,
    UserOtpRequestOptions?: JUHUU.User.OtpRequest.Options,
  ): Promise<JUHUU.HttpResponse<JUHUU.User.OtpRequest.Response>> {
    return await super.sendRequest<JUHUU.User.OtpRequest.Response>(
      {
        method: "POST",
        url: "auth/otp/request",
        body: {
          destination: UserOtpRequestParams.destination,
          countryCode: UserOtpRequestParams.countryCode,
          nationalNumber: UserOtpRequestParams.nationalNumber,
          purpose: UserOtpRequestParams.purpose,
        },
        authenticationNotOptional: false,
      },
      UserOtpRequestOptions,
    );
  }

  async otpVerify(
    UserOtpVerifyParams: JUHUU.User.OtpVerify.Params,
    UserOtpVerifyOptions?: JUHUU.User.OtpVerify.Options,
  ): Promise<JUHUU.HttpResponse<JUHUU.User.OtpVerify.Response>> {
    return await super.sendRequest<JUHUU.User.OtpVerify.Response>(
      {
        method: "POST",
        url: "auth/otp/verify",
        body: {
          destination: UserOtpVerifyParams.destination,
          countryCode: UserOtpVerifyParams.countryCode,
          nationalNumber: UserOtpVerifyParams.nationalNumber,
          purpose: UserOtpVerifyParams.purpose,
          name: UserOtpVerifyParams.name,
          billingAddress: UserOtpVerifyParams.billingAddress,
          code: UserOtpVerifyParams.code,
        },
        authenticationNotOptional: false,
      },
      UserOtpVerifyOptions,
    );
  }

  async setPassword(
    UserSetPasswordParams: JUHUU.User.SetPassword.Params,
    UserSetPasswordOptions?: JUHUU.User.SetPassword.Options,
  ): Promise<JUHUU.HttpResponse<JUHUU.User.SetPassword.Response>> {
    return await super.sendRequest<JUHUU.User.SetPassword.Response>(
      {
        method: "PATCH",
        url: "auth/password/set",
        body: {
          password: UserSetPasswordParams.password,
        },
        authenticationNotOptional: true,
      },
      UserSetPasswordOptions,
    );
  }

  async changePhoneRequest(
    UserChangePhoneRequestParams: JUHUU.User.ChangePhoneRequest.Params,
    UserChangePhoneRequestOptions?: JUHUU.User.ChangePhoneRequest.Options,
  ): Promise<JUHUU.HttpResponse<JUHUU.User.ChangePhoneRequest.Response>> {
    return await super.sendRequest<JUHUU.User.ChangePhoneRequest.Response>(
      {
        method: "POST",
        url: "auth/phone/change",
        body: {
          phone: UserChangePhoneRequestParams.phone,
          countryCode: UserChangePhoneRequestParams.countryCode,
          nationalNumber: UserChangePhoneRequestParams.nationalNumber,
        },
        authenticationNotOptional: true,
      },
      UserChangePhoneRequestOptions,
    );
  }

  async changePhoneVerify(
    UserChangePhoneVerifyParams: JUHUU.User.ChangePhoneVerify.Params,
    UserChangePhoneVerifyOptions?: JUHUU.User.ChangePhoneVerify.Options,
  ): Promise<JUHUU.HttpResponse<JUHUU.User.ChangePhoneVerify.Response>> {
    return await super.sendRequest<JUHUU.User.ChangePhoneVerify.Response>(
      {
        method: "POST",
        url: "auth/phone/verify",
        body: {
          phone: UserChangePhoneVerifyParams.phone,
          countryCode: UserChangePhoneVerifyParams.countryCode,
          nationalNumber: UserChangePhoneVerifyParams.nationalNumber,
          code: UserChangePhoneVerifyParams.code,
        },
        authenticationNotOptional: true,
      },
      UserChangePhoneVerifyOptions,
    );
  }

  async removePhone(
    UserRemovePhoneParams: JUHUU.User.RemovePhone.Params,
    UserChangePhoneVerifyOptions?: JUHUU.User.RemovePhone.Options,
  ): Promise<JUHUU.HttpResponse<JUHUU.User.RemovePhone.Response>> {
    return await super.sendRequest<JUHUU.User.RemovePhone.Response>(
      {
        method: "DELETE",
        url: "auth/phone",
        authenticationNotOptional: true,
        body: undefined,
      },
      UserChangePhoneVerifyOptions,
    );
  }

  async changeEmailRequest(
    UserChangeEmailRequestParams: JUHUU.User.ChangeEmailRequest.Params,
    UserChangeEmailRequestOptions?: JUHUU.User.ChangeEmailRequest.Options,
  ): Promise<JUHUU.HttpResponse<JUHUU.User.ChangeEmailRequest.Response>> {
    return await super.sendRequest<JUHUU.User.ChangeEmailRequest.Response>(
      {
        method: "POST",
        url: "auth/email/change",
        body: {
          email: UserChangeEmailRequestParams.email,
        },
        authenticationNotOptional: true,
      },
      UserChangeEmailRequestOptions,
    );
  }

    async changeEmailVerify(
    UserChangeEmailVerifyParams: JUHUU.User.ChangeEmailVerify.Params,
    UserChangeEmailVerifyOptions?: JUHUU.User.ChangeEmailVerify.Options,
  ): Promise<JUHUU.HttpResponse<JUHUU.User.ChangeEmailVerify.Response>> {
    return await super.sendRequest<JUHUU.User.ChangeEmailVerify.Response>(
      {
        method: "POST",
        url: "auth/email/verify",
        body: {
          email: UserChangeEmailVerifyParams.email,
          code: UserChangeEmailVerifyParams.code,
        },
        authenticationNotOptional: true,
      },
      UserChangeEmailVerifyOptions,
    );
  }

   async removeEmail(
    UserRemoveEmailParams: JUHUU.User.RemoveEmail.Params,
    UserRemoveEmailVerifyOptions?: JUHUU.User.RemoveEmail.Options,
  ): Promise<JUHUU.HttpResponse<JUHUU.User.RemoveEmail.Response>> {
    return await super.sendRequest<JUHUU.User.RemoveEmail.Response>(
      {
        method: "DELETE",
        url: "auth/email",
        authenticationNotOptional: true,
        body: undefined,
      },
      UserRemoveEmailVerifyOptions,
    );
  }

  async getAvailableEmails(
    UserGetAvailableEmailsParams: JUHUU.User.GetAvailableEmails.Params,
    UserGetAvailableEmailsOptions?: JUHUU.User.GetAvailableEmails.Options,
  ): Promise<JUHUU.HttpResponse<JUHUU.User.GetAvailableEmails.Response>> {
    return await super.sendRequest<JUHUU.User.GetAvailableEmails.Response>(
      {
        method: "GET",
        url: "auth/emails",
        authenticationNotOptional: true,
        body: undefined,
      },
      UserGetAvailableEmailsOptions,
    );
  }

   async setPrimaryEmail(
    UserSetPrimaryEmailParams: JUHUU.User.SetPrimaryEmail.Params,
    UserSetPrimaryEmailOptions?: JUHUU.User.SetPrimaryEmail.Options,
  ): Promise<JUHUU.HttpResponse<JUHUU.User.SetPrimaryEmail.Response>> {
    return await super.sendRequest<JUHUU.User.SetPrimaryEmail.Response>(
      {
        method: "POST",
        url: "auth/email/primary",
        authenticationNotOptional: true,
        body: {
          email : UserSetPrimaryEmailParams.email
        },
      },
      UserSetPrimaryEmailOptions,
    );
  }

  async list(
    UserListParams: JUHUU.User.List.Params,
    UserListOptions?: JUHUU.User.List.Options,
  ): Promise<JUHUU.HttpResponse<JUHUU.User.List.Response>> {
    const queryArray: string[] = [];

    if (UserListParams.managementUserId !== undefined) {
      queryArray.push("managementUserId=" + UserListParams.managementUserId);
    }

    if (UserListParams.createdByPropertyId !== undefined) {
      queryArray.push(
        "createdByPropertyId=" + UserListParams.createdByPropertyId,
      );
    }

    if (UserListParams.customerOfPropertyId !== undefined) {
      queryArray.push(
        "customerOfPropertyId=" + UserListParams.customerOfPropertyId,
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
      UserListOptions,
    );
  }

  async update(
    UserUpdateParams: JUHUU.User.Update.Params,
    UserUpdateOptions?: JUHUU.User.Update.Options,
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
          expoPushTokenArray: UserUpdateParams?.expoPushTokenArray,
        },
        authenticationNotOptional: true,
      },
      UserUpdateOptions,
    );
  }

  async memberCreate(
    UserInviteMemberParams: JUHUU.User.InviteMember.Params,
    UserInviteMemberOptions?: JUHUU.User.InviteMember.Options,
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
      UserInviteMemberOptions,
    );
  }

  async memberDelete(
    UserRemoveMemberParams: JUHUU.User.RemoveMember.Params,
    UserRemoveMemberOptions?: JUHUU.User.RemoveMember.Options,
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
      UserRemoveMemberOptions,
    );
  }

  async delete(
    UserDeleteParams: JUHUU.User.Delete.Params,
    UserDeleteOptions?: JUHUU.User.Delete.Options,
  ): Promise<JUHUU.HttpResponse<JUHUU.User.Delete.Response>> {
    return await super.sendRequest<JUHUU.User.Delete.Response>(
      {
        method: "DELETE",
        url: "users/" + UserDeleteParams.userId,
        authenticationNotOptional: true,
        body: undefined,
      },
      UserDeleteOptions,
    );
  }

  async createIdentityVerificationUrl(
    UserCreateIdentityVerificationUrlParams: JUHUU.User.CreateIdentityVerificationUrl.Params,
    UserCreateIdentityVerificationUrlOptions?: JUHUU.User.CreateIdentityVerificationUrl.Options,
  ): Promise<
    JUHUU.HttpResponse<JUHUU.User.CreateIdentityVerificationUrl.Response>
  > {
    return await super.sendRequest<JUHUU.User.CreateIdentityVerificationUrl.Response>(
      {
        method: "POST",
        url:
          "users/" +
          UserCreateIdentityVerificationUrlParams.userId +
          "/createIdentityVerificationUrl",
        body: {
          propertyId: UserCreateIdentityVerificationUrlParams.propertyId,
        },
        authenticationNotOptional: true,
      },
      UserCreateIdentityVerificationUrlOptions,
    );
  }
}
