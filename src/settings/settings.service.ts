import { JUHUU, Settings } from "..";
import Service from "../index.service";

export default class SettingsService extends Service {
  constructor(config: JUHUU.SetupConfig) {
    super(config);
  }

  async retrieve(): Promise<JUHUU.HttpResponse<Settings>> {
    return await super.sendRequest<Settings>({
      method: "GET",
      url: "sessions/",
      body: undefined,
      authenticationNotOptional: false,
    });
  }

  async sendSupportRequest(
    SessionCreateParams: JUHUU.Settings.SendSupportRequest.Params,
    SessionCreateOptions?: JUHUU.Settings.SendSupportRequest.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Settings.SendSupportRequest.Response>> {
    return await super.sendRequest<JUHUU.Settings.SendSupportRequest.Response>(
      {
        method: "POST",
        url: "settings/sendSupportRequest",
        body: {
          message: SessionCreateParams.message,
        },
        authenticationNotOptional: false,
      },
      SessionCreateOptions
    );
  }
}
