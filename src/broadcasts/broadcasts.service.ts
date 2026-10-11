import { JUHUU } from "..";
import Service from "../index.service";

export default class BroadcastsService extends Service {
  constructor(config: JUHUU.SetupConfig) {
    super(config);
  }

  /**
   * Sends an email to every customer of the property that has a verified
   * email. The emails are created in the background, use retrieve or list
   * to follow the progress.
   */
  async create(
    params: JUHUU.Broadcast.Create.Params,
    options?: JUHUU.Broadcast.Create.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Broadcast.Create.Response>> {
    return await super.sendRequest<JUHUU.Broadcast.Create.Response>(
      {
        method: "POST",
        url: "broadcasts",
        body: {
          propertyId: params.propertyId,
          subject: params.subject,
          message: params.message,
        },
        authenticationNotOptional: true,
      },
      options
    );
  }

  async list(
    params: JUHUU.Broadcast.List.Params,
    options?: JUHUU.Broadcast.List.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Broadcast.List.Response>> {
    const queryArray: string[] = [];

    queryArray.push("propertyId=" + params.propertyId);

    if (params.statusArray !== undefined) {
      queryArray.push("statusArray=" + params.statusArray.join(","));
    }

    if (options?.limit !== undefined) {
      queryArray.push("limit=" + options.limit);
    }

    if (options?.cursor !== undefined) {
      queryArray.push("cursor=" + options.cursor);
    }

    return await super.sendRequest<JUHUU.Broadcast.List.Response>(
      {
        method: "GET",
        url: "broadcasts?" + queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: true,
      },
      options
    );
  }

  async retrieve(
    params: JUHUU.Broadcast.Retrieve.Params,
    options?: JUHUU.Broadcast.Retrieve.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Broadcast.Retrieve.Response>> {
    return await super.sendRequest<JUHUU.Broadcast.Retrieve.Response>(
      {
        method: "GET",
        url: "broadcasts/" + params.broadcastId,
        body: undefined,
        authenticationNotOptional: true,
      },
      options
    );
  }
}
