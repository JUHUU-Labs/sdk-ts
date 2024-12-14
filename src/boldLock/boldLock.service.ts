import { JUHUU } from "..";
import Service from "../index.service";

export default class BoldLockService extends Service {
  constructor(config: JUHUU.SetupConfig) {
    super(config);
  }

  async configuration(
    BoldLockRetrieveParams: JUHUU.BoldLock.Configuration.Params,
    BoldLockRetrieveOptions?: JUHUU.BoldLock.Configuration.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.BoldLock.Configuration.Response>> {
    const queryArray: string[] = [];

    return await super.sendRequest<JUHUU.BoldLock.Configuration.Response>(
      {
        method: "GET",
        url:
          "boldLock/configuration?deviceId=" + BoldLockRetrieveParams.deviceId,
        body: undefined,
        authenticationNotOptional: true,
      },
      BoldLockRetrieveOptions
    );
  }
}
