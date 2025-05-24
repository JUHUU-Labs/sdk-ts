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
          implementationVersion: TapkeyCredentialsParams.implementationVersion,
        },
        authenticationNotOptional: true,
      },
      TapkeyCredentialsOptions
    );
  }

  async grantAccess(
    TapkeyGrantAccessParams: JUHUU.Tapkey.GrantAccess.Params,
    TapkeyGrantAccessOptions?: JUHUU.Tapkey.GrantAccess.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Tapkey.GrantAccess.Response>> {
    const queryArray: string[] = [];

    return await super.sendRequest<JUHUU.Tapkey.GrantAccess.Response>(
      {
        method: "POST",
        url: "tapkey/grantAccess",
        body: {
          userId: TapkeyGrantAccessParams.userId,
          deviceId: TapkeyGrantAccessParams.deviceId,
          implementationVersion: TapkeyGrantAccessParams.implementationVersion,
        },
        authenticationNotOptional: true,
      },
      TapkeyGrantAccessOptions
    );
  }
}
