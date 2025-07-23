import { JUHUU } from "..";
import Service from "../index.service";

export default class EmzService extends Service {
  constructor(config: JUHUU.SetupConfig) {
    super(config);
  }

  async credentials(
    EmzCredentialsParams: JUHUU.Emz.Credentials.Params,
    EmzCredentialsOptions?: JUHUU.Emz.Credentials.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Emz.Credentials.Response>> {
    const queryArray: string[] = [];

    return await super.sendRequest<JUHUU.Emz.Credentials.Response>(
      {
        method: "POST",
        url: "emz/credentials",
        body: {
          deviceId: EmzCredentialsParams.deviceId,
        },
        authenticationNotOptional: true,
      },
      EmzCredentialsOptions
    );
  }
  async logs(
    EmzLogsParams: JUHUU.Emz.Logs.Params,
    EmzLogsOptions?: JUHUU.Emz.Logs.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Emz.Logs.Response>> {
    const queryArray: string[] = [];

    return await super.sendRequest<JUHUU.Emz.Logs.Response>(
      {
        method: "POST",
        url: "emz/logs",
        body: {
          userId: EmzLogsParams.userId,
          logArray: EmzLogsParams.logArray,
        },
        authenticationNotOptional: true,
      },
      EmzLogsOptions
    );
  }
}
