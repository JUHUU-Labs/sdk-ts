import { JUHUU } from "..";
import Service from "../index.service";

export default class TapkeyService extends Service {
  constructor(config: JUHUU.SetupConfig) {
    super(config);
  }

  async credentials(
    TapkeyCredentialsParams: JUHUU.Tapkey.Credentials.Params,
    TapkeyCredentialsOptions?: JUHUU.Tapkey.Credentials.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Tapkey.Credentials.Response>> {
    const queryArray: string[] = [];

    return await super.sendRequest<JUHUU.Tapkey.Credentials.Response>(
      {
        method: "POST",
        url: "tapkey/credentials",
        body: {
          userId: TapkeyCredentialsParams.userId,
          deviceId: TapkeyCredentialsParams.deviceId,
        },
        authenticationNotOptional: true,
      },
      TapkeyCredentialsOptions
    );
  }
}
