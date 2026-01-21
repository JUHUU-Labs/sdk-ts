import { JUHUU } from "..";
import Service from "../index.service";

export default class AuthService extends Service {
  constructor(config: JUHUU.SetupConfig) {
    super(config);
  }

  async registerEmailPassword(
    AuthRegisterEmailPasswordParams: JUHUU.User.RegisterEmailPassword.Params,
    AuthRegisterEmailPasswordOptions?: JUHUU.User.RegisterEmailPassword.Options,
  ): Promise<JUHUU.HttpResponse<JUHUU.User.RegisterEmailPassword.Response>> {
    return await super.sendRequest<JUHUU.User.RegisterEmailPassword.Response>(
      {
        method: "POST",
        url: "auth/emailPassword/register",
        body: {
          email: AuthRegisterEmailPasswordParams.email,
          password: AuthRegisterEmailPasswordParams.password,
        },
        authenticationNotOptional: false,
      },
      AuthRegisterEmailPasswordOptions,
    );
  }

  async loginEmailPassword(
    AuthLoginEmailPasswordParams: JUHUU.User.LoginEmailPassword.Params,
    AuthLoginEmailPasswordOptions?: JUHUU.User.LoginEmailPassword.Options,
  ): Promise<JUHUU.HttpResponse<JUHUU.User.LoginEmailPassword.Response>> {
    return await super.sendRequest<JUHUU.User.LoginEmailPassword.Response>(
      {
        method: "POST",
        url: "auth/emailPassword/login",
        body: {
          email: AuthLoginEmailPasswordParams.email,
          password: AuthLoginEmailPasswordParams.password,
        },
        authenticationNotOptional: false,
      },
      AuthLoginEmailPasswordOptions,
    );
  }

  async refreshAccessToken(
    AuthRefreshAccessTokenParams: JUHUU.User.RefreshAccessToken.Params,
    AuthRefreshAccessTokenOptions?: JUHUU.User.RefreshAccessToken.Options,
  ): Promise<JUHUU.HttpResponse<JUHUU.User.RefreshAccessToken.Response>> {
    return await super.sendRequest<JUHUU.User.RefreshAccessToken.Response>(
      {
        method: "GET",
        url: "auth/refresh",
        body: undefined,
        authenticationNotOptional: true,
      },
      {
        accessToken: AuthRefreshAccessTokenParams?.refreshToken,
        ...AuthRefreshAccessTokenOptions,
      },
    );
  }

  async identify(
    AuthIdentifyParams: JUHUU.User.Identify.Params,
    AuthIdentifyOptions?: JUHUU.User.Identify.Options,
  ): Promise<JUHUU.HttpResponse<JUHUU.User.Identify.Response>> {
    return await super.sendRequest<JUHUU.User.Identify.Response>(
      {
        method: "POST",
        url: "auth/identify",
        body: {
          identifier: AuthIdentifyParams.identifier,
        },
        authenticationNotOptional: false,
      },
      AuthIdentifyOptions,
    );
  }

  async otpRequest(
    AuthOtpRequestParams: JUHUU.User.OtpRequest.Params,
    AuthOtpRequestOptions?: JUHUU.User.OtpRequest.Options,
  ): Promise<JUHUU.HttpResponse<JUHUU.User.OtpRequest.Response>> {
    return await super.sendRequest<JUHUU.User.OtpRequest.Response>(
      {
        method: "POST",
        url: "auth/otp/request",
        body: {
          destination: AuthOtpRequestParams.destination,
          countryCode: AuthOtpRequestParams.countryCode,
          nationalNumber: AuthOtpRequestParams.nationalNumber,
          purpose: AuthOtpRequestParams.purpose,
        },
        authenticationNotOptional: false,
      },
      AuthOtpRequestOptions,
    );
  }

  async otpVerify(
    AuthOtpVerifyParams: JUHUU.User.OtpVerify.Params,
    AuthOtpVerifyOptions?: JUHUU.User.OtpVerify.Options,
  ): Promise<JUHUU.HttpResponse<JUHUU.User.OtpVerify.Response>> {
    return await super.sendRequest<JUHUU.User.OtpVerify.Response>(
      {
        method: "POST",
        url: "auth/otp/verify",
        body: {
          destination: AuthOtpVerifyParams.destination,
          countryCode: AuthOtpVerifyParams.countryCode,
          nationalNumber: AuthOtpVerifyParams.nationalNumber,
          purpose: AuthOtpVerifyParams.purpose,
          name: AuthOtpVerifyParams.name,
          billingAddress: AuthOtpVerifyParams.billingAddress,
          code: AuthOtpVerifyParams.code,
        },
        authenticationNotOptional: false,
      },
      AuthOtpVerifyOptions,
    );
  }

  async setPassword(
    AuthSetPasswordParams: JUHUU.User.SetPassword.Params,
    AuthSetPasswordOptions?: JUHUU.User.SetPassword.Options,
  ): Promise<JUHUU.HttpResponse<JUHUU.User.SetPassword.Response>> {
    return await super.sendRequest<JUHUU.User.SetPassword.Response>(
      {
        method: "PATCH",
        url: "auth/password/set",
        body: {
          password: AuthSetPasswordParams.password,
        },
        authenticationNotOptional: true,
      },
      AuthSetPasswordOptions,
    );
  }

  async removePassword(
    AuthRemovePasswordParams: JUHUU.User.RemovePassword.Params,
    AuthRemovePasswordOptions?: JUHUU.User.RemovePassword.Options,
  ): Promise<JUHUU.HttpResponse<JUHUU.User.RemovePassword.Response>> {
    return await super.sendRequest<JUHUU.User.RemovePassword.Response>(
      {
        method: "DELETE",
        url: "auth/password",
        body: undefined,
        authenticationNotOptional: true,
      },
      AuthRemovePasswordOptions,
    );
  }

  async removeGoogle(
    AuthRemoveGoogleParams: JUHUU.User.RemoveGoogle.Params,
    AuthRemoveGoogleOptions?: JUHUU.User.RemoveGoogle.Options,
  ): Promise<JUHUU.HttpResponse<JUHUU.User.RemoveGoogle.Response>> {
    return await super.sendRequest<JUHUU.User.RemoveGoogle.Response>(
      {
        method: "DELETE",
        url: "auth/google",
        body: undefined,
        authenticationNotOptional: true,
      },
      AuthRemoveGoogleOptions,
    );
  }

  async removeApple(
    AuthRemoveAppleParams: JUHUU.User.RemoveApple.Params,
    AuthRemoveAppleOptions?: JUHUU.User.RemoveApple.Options,
  ): Promise<JUHUU.HttpResponse<JUHUU.User.RemoveApple.Response>> {
    return await super.sendRequest<JUHUU.User.RemoveApple.Response>(
      {
        method: "DELETE",
        url: "auth/apple",
        body: undefined,
        authenticationNotOptional: true,
      },
      AuthRemoveAppleOptions,
    );
  }



  async changePhoneRequest(
    AuthChangePhoneRequestParams: JUHUU.User.ChangePhoneRequest.Params,
    AuthChangePhoneRequestOptions?: JUHUU.User.ChangePhoneRequest.Options,
  ): Promise<JUHUU.HttpResponse<JUHUU.User.ChangePhoneRequest.Response>> {
    return await super.sendRequest<JUHUU.User.ChangePhoneRequest.Response>(
      {
        method: "POST",
        url: "auth/phone/change",
        body: {
          phone: AuthChangePhoneRequestParams.phone,
          countryCode: AuthChangePhoneRequestParams.countryCode,
          nationalNumber: AuthChangePhoneRequestParams.nationalNumber,
        },
        authenticationNotOptional: true,
      },
      AuthChangePhoneRequestOptions,
    );
  }

  async changePhoneVerify(
    AuthChangePhoneVerifyParams: JUHUU.User.ChangePhoneVerify.Params,
    AuthChangePhoneVerifyOptions?: JUHUU.User.ChangePhoneVerify.Options,
  ): Promise<JUHUU.HttpResponse<JUHUU.User.ChangePhoneVerify.Response>> {
    return await super.sendRequest<JUHUU.User.ChangePhoneVerify.Response>(
      {
        method: "POST",
        url: "auth/phone/verify",
        body: {
          phone: AuthChangePhoneVerifyParams.phone,
          countryCode: AuthChangePhoneVerifyParams.countryCode,
          nationalNumber: AuthChangePhoneVerifyParams.nationalNumber,
          code: AuthChangePhoneVerifyParams.code,
        },
        authenticationNotOptional: true,
      },
      AuthChangePhoneVerifyOptions,
    );
  }

  async removePhone(
    AuthRemovePhoneParams: JUHUU.User.RemovePhone.Params,
    AuthRemovePhoneOptions?: JUHUU.User.RemovePhone.Options,
  ): Promise<JUHUU.HttpResponse<JUHUU.User.RemovePhone.Response>> {
    return await super.sendRequest<JUHUU.User.RemovePhone.Response>(
      {
        method: "DELETE",
        url: "auth/phone",
        authenticationNotOptional: true,
        body: undefined,
      },
      AuthRemovePhoneOptions,
    );
  }

  async changeEmailRequest(
    AuthChangeEmailRequestParams: JUHUU.User.ChangeEmailRequest.Params,
    AuthChangeEmailRequestOptions?: JUHUU.User.ChangeEmailRequest.Options,
  ): Promise<JUHUU.HttpResponse<JUHUU.User.ChangeEmailRequest.Response>> {
    return await super.sendRequest<JUHUU.User.ChangeEmailRequest.Response>(
      {
        method: "POST",
        url: "auth/email/change",
        body: {
          email: AuthChangeEmailRequestParams.email,
        },
        authenticationNotOptional: true,
      },
      AuthChangeEmailRequestOptions,
    );
  }

  async changeEmailVerify(
    AuthChangeEmailVerifyParams: JUHUU.User.ChangeEmailVerify.Params,
    AuthChangeEmailVerifyOptions?: JUHUU.User.ChangeEmailVerify.Options,
  ): Promise<JUHUU.HttpResponse<JUHUU.User.ChangeEmailVerify.Response>> {
    return await super.sendRequest<JUHUU.User.ChangeEmailVerify.Response>(
      {
        method: "POST",
        url: "auth/email/verify",
        body: {
          email: AuthChangeEmailVerifyParams.email,
          code: AuthChangeEmailVerifyParams.code,
        },
        authenticationNotOptional: true,
      },
      AuthChangeEmailVerifyOptions,
    );
  }

  async removeEmail(
    AuthRemoveEmailParams: JUHUU.User.RemoveEmail.Params,
    AuthRemoveEmailOptions?: JUHUU.User.RemoveEmail.Options,
  ): Promise<JUHUU.HttpResponse<JUHUU.User.RemoveEmail.Response>> {
    return await super.sendRequest<JUHUU.User.RemoveEmail.Response>(
      {
        method: "DELETE",
        url: "auth/email",
        authenticationNotOptional: true,
        body: undefined,
      },
      AuthRemoveEmailOptions,
    );
  }

  async getAvailableEmails(
    AuthGetAvailableEmailsParams: JUHUU.User.GetAvailableEmails.Params,
    AuthGetAvailableEmailsOptions?: JUHUU.User.GetAvailableEmails.Options,
  ): Promise<JUHUU.HttpResponse<JUHUU.User.GetAvailableEmails.Response>> {
    return await super.sendRequest<JUHUU.User.GetAvailableEmails.Response>(
      {
        method: "GET",
        url: "auth/emails",
        authenticationNotOptional: true,
        body: undefined,
      },
      AuthGetAvailableEmailsOptions,
    );
  }

  async getAuthMethods(
    AuthGetAuthMethodsParams: JUHUU.User.GetAuthMethods.Params,
    AuthGetAuthMethodsOptions?: JUHUU.User.GetAuthMethods.Options,
  ): Promise<JUHUU.HttpResponse<JUHUU.User.GetAuthMethods.Response>> {
    return await super.sendRequest<JUHUU.User.GetAuthMethods.Response>(
      {
        method: "GET",
        url: "auth/methods",
        authenticationNotOptional: true,
        body: undefined,
      },
      AuthGetAuthMethodsOptions,
    );
  }

  async setPrimaryEmail(
    AuthSetPrimaryEmailParams: JUHUU.User.SetPrimaryEmail.Params,
    AuthSetPrimaryEmailOptions?: JUHUU.User.SetPrimaryEmail.Options,
  ): Promise<JUHUU.HttpResponse<JUHUU.User.SetPrimaryEmail.Response>> {
    return await super.sendRequest<JUHUU.User.SetPrimaryEmail.Response>(
      {
        method: "POST",
        url: "auth/email/primary",
        authenticationNotOptional: true,
        body: {
          email: AuthSetPrimaryEmailParams.email,
        },
      },
      AuthSetPrimaryEmailOptions,
    );
  }
}
