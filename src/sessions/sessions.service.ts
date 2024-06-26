import { JUHUU } from "..";
import Service from "../index.service";

export default class SessionService extends Service {
  constructor(config: JUHUU.SetupConfig) {
    super(config);
  }

  async create(
    SessionCreateParams: JUHUU.Session.Create.Params,
    SessionCreateOptions?: JUHUU.Session.Create.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Session.Create.Response>> {
    return await super.sendRequest<JUHUU.Session.Retrieve.Response>({
      method: "POST",
      url: "sessions",
      body: {
        locationId: SessionCreateParams.locationId,
        tariffId: SessionCreateParams.tariffId,
        autoRenew: SessionCreateParams.autoRenew,
        type: SessionCreateParams.sessionType,
        isOffSession: SessionCreateParams.isOffSession,
        idempotencyKey: SessionCreateParams.idempotencyKey,
        userId: SessionCreateParams.userId,
      },
      useAuthentication: true,
    });
  }

  async retrieve(
    SessionRetrieveParams: JUHUU.Session.Retrieve.Params,
    SessionRetrieveOptions?: JUHUU.Session.Retrieve.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Session.Retrieve.Response>> {
    const queryArray: string[] = [];

    if (SessionRetrieveOptions?.expand !== undefined) {
      queryArray.push("expand=" + SessionRetrieveOptions.expand.join(","));
    }

    return await super.sendRequest<JUHUU.Session.Retrieve.Response>({
      method: "GET",
      url:
        "sessions/" +
        SessionRetrieveParams.sessionId +
        "?" +
        queryArray.join("&"),
      body: undefined,
      useAuthentication: true,
    });
  }

  async list(
    SessionListParams: JUHUU.Session.List.Params,
    SessionListOptions?: JUHUU.Session.List.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Session.List.Response>> {
    const queryArray: string[] = [];

    if (SessionListParams.userId !== undefined) {
      queryArray.push("userId=" + SessionListParams.userId);
    }

    if (SessionListParams.propertyId !== undefined) {
      queryArray.push("propertyId=" + SessionListParams.propertyId);
    }

    if (SessionListParams.statusArray !== undefined) {
      queryArray.push("statusArray=" + SessionListParams.statusArray.join(","));
    }

    if (SessionListParams.managementUserId !== undefined) {
      queryArray.push("managementUserId=" + SessionListParams.managementUserId);
    }

    return await super.sendRequest<JUHUU.Session.List.Response>(
      {
        method: "GET",
        url: "sessions?" + queryArray.join("&"),
        body: undefined,
        useAuthentication: true,
      },
      SessionListOptions
    );
  }

  async update(
    SessionUpdateParams: JUHUU.Session.Update.Params,
    SessionUpdateOptions?: JUHUU.Session.Update.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Session.Update.Response>> {
    return await super.sendRequest<JUHUU.Session.Update.Response>(
      {
        method: "PATCH",
        url: "sessions/" + SessionUpdateParams.sessionId,
        body: {
          autoRenew: SessionUpdateParams?.autoRenew,
        },
        useAuthentication: true,
      },
      SessionUpdateOptions
    );
  }

  async terminate(
    SessionTerminateParams: JUHUU.Session.Terminate.Params,
    SessionTerminateOptions?: JUHUU.Session.Terminate.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Session.Terminate.Response>> {
    return await super.sendRequest<JUHUU.Session.Terminate.Response>(
      {
        method: "PATCH",
        url: "sessions/" + SessionTerminateParams.sessionId + "/terminate",
        body: {
          isOffSession: SessionTerminateParams.isOffSession,
        },
        useAuthentication: true,
      },
      SessionTerminateOptions
    );
  }

  async attachLocation(
    SessionTerminateParams: JUHUU.Session.AttachLocation.Params,
    SessionTerminateOptions?: JUHUU.Session.AttachLocation.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Session.AttachLocation.Response>> {
    return await super.sendRequest<JUHUU.Session.AttachLocation.Response>(
      {
        method: "PATCH",
        url: "sessions/" + SessionTerminateParams.sessionId + "/attachLocation",
        body: {
          locationId: SessionTerminateParams.locationId,
        },
        useAuthentication: true,
      },
      SessionTerminateOptions
    );
  }
}
