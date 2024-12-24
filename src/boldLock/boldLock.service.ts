import { JUHUU } from "..";
import Service from "../index.service";

export default class BoldLockService extends Service {
  constructor(config: JUHUU.SetupConfig) {
    super(config);
  }

  async credentials(
    BoldLockCredentialsParams: JUHUU.BoldLock.Credentials.Params,
    BoldLockCredentialsOptions?: JUHUU.BoldLock.Credentials.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.BoldLock.Credentials.Response>> {
    const queryArray: string[] = [];

    return await super.sendRequest<JUHUU.BoldLock.Credentials.Response>(
      {
        method: "POST",
        url: "boldLock/credentials",
        body: {
          userId: BoldLockCredentialsParams.userId,
          deviceId: BoldLockCredentialsParams.deviceId,
        },
        authenticationNotOptional: true,
      },
      BoldLockCredentialsOptions
    );
  }

  async grantAccess(
    BoldLockGrantAccessParams: JUHUU.BoldLock.GrantAccess.Params,
    BoldLockGrantAccessOptions?: JUHUU.BoldLock.GrantAccess.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.BoldLock.GrantAccess.Response>> {
    const queryArray: string[] = [];

    return await super.sendRequest<JUHUU.BoldLock.GrantAccess.Response>(
      {
        method: "POST",
        url: "boldLock/grantAccess",
        body: {
          userId: BoldLockGrantAccessParams.userId,
          deviceId: BoldLockGrantAccessParams.deviceId,
        },
        authenticationNotOptional: true,
      },
      BoldLockGrantAccessOptions
    );
  }
}
