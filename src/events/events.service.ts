import { JUHUU } from "..";
import Service from "../index.service";

export default class EventsService extends Service {
  constructor(config: JUHUU.SetupConfig) {
    super(config);
  }

  async retrieve(
    EventRetrieveParams: JUHUU.Event.Retrieve.Params,
    EventRetrieveOptions?: JUHUU.Event.Retrieve.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Event.Retrieve.Response>> {
    const queryArray: string[] = [];

    if (EventRetrieveOptions?.expand !== undefined) {
      queryArray.push("expand=" + EventRetrieveOptions.expand.join(","));
    }

    return await super.sendRequest<JUHUU.Event.Retrieve.Response>(
      {
        method: "GET",
        url:
          "events/" + EventRetrieveParams.eventId + "?" + queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: false,
      },
      EventRetrieveOptions
    );
  }

  async list(
    EventListParams: JUHUU.Event.List.Params,
    EventListOptions?: JUHUU.Event.List.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Event.List.Response>> {
    const queryArray: string[] = [];

    if (EventListParams?.propertyId !== undefined) {
      queryArray.push("propertyId=" + EventListParams.propertyId);
    }

    if (EventListParams?.paymentId !== undefined) {
      queryArray.push("paymentId=" + EventListParams.paymentId);
    }

    return await super.sendRequest<JUHUU.Event.List.Response>(
      {
        method: "GET",
        url: "events?" + queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: false,
      },
      EventListOptions
    );
  }
}
