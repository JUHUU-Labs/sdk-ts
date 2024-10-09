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
}
