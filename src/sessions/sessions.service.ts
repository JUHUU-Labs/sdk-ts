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
    return await super.sendRequest<JUHUU.Session.Create.Response>(
      {
        method: "POST",
        url: "sessions",
        body: {
          locationId: SessionCreateParams.locationId,
          tariffId: SessionCreateParams.tariffId,
          autoRenew: SessionCreateParams.autoRenew,
          type: SessionCreateParams.sessionType,
          isOffSession: SessionCreateParams.isOffSession,
          userId: SessionCreateParams.userId,
        },
        authenticationNotOptional: true,
      },
      SessionCreateOptions
    );
  }

  async export(
    SessionExportParams: JUHUU.Session.Export.Params,
    SessionExportOptions?: JUHUU.Session.Export.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Session.Export.Response>> {
    return await super.sendRequest<JUHUU.Session.Export.Response>(
      {
        method: "POST",
        url: "sessions/export",
        body: {
          propertyId: SessionExportParams.propertyId,
          outputType: SessionExportParams.outputType,
        },
        authenticationNotOptional: true,
      },
      SessionExportOptions
    );
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
      authenticationNotOptional: true,
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

    if (SessionListParams.locationGroupId !== undefined) {
      queryArray.push("locationGroupId=" + SessionListParams.locationGroupId);
    }

    if (SessionListParams.locationId !== undefined) {
      queryArray.push("locationId=" + SessionListParams.locationId);
    }

    if (SessionListOptions?.limit !== undefined) {
      queryArray.push("limit=" + SessionListOptions.limit);
    }

    if (SessionListOptions?.skip !== undefined) {
      queryArray.push("skip=" + SessionListOptions.skip);
    }

    return await super.sendRequest<JUHUU.Session.List.Response>(
      {
        method: "GET",
        url: "sessions?" + queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: true,
      },
      SessionListOptions
    );
  }

  async search(
    SessionSearchParams: JUHUU.Session.Search.Params,
    SessionSearchOptions?: JUHUU.Session.Search.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Session.Search.Response>> {
    const queryArray: string[] = [];

    if (SessionSearchParams.paymentId !== undefined) {
      queryArray.push("paymentId=" + SessionSearchParams.paymentId);
    }

    return await super.sendRequest<JUHUU.Session.Search.Response>(
      {
        method: "GET",
        url: "sessions/search?" + queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: true,
      },
      SessionSearchOptions
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
        authenticationNotOptional: true,
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
        authenticationNotOptional: true,
      },
      SessionTerminateOptions
    );
  }

  async attachLocation(
    SessionAttachLocationParams: JUHUU.Session.AttachLocation.Params,
    SessionLocationOptions?: JUHUU.Session.AttachLocation.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Session.AttachLocation.Response>> {
    return await super.sendRequest<JUHUU.Session.AttachLocation.Response>(
      {
        method: "POST",
        url: "sessions/" + SessionAttachLocationParams.sessionId + "/location",
        body: {
          locationId: SessionAttachLocationParams.locationId,
        },
        authenticationNotOptional: true,
      },
      SessionLocationOptions
    );
  }

  async attachUser(
    SessionAttachUserParams: JUHUU.Session.AttachUser.Params,
    SessionAttachUserOptions?: JUHUU.Session.AttachUser.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Session.AttachUser.Response>> {
    return await super.sendRequest<JUHUU.Session.AttachUser.Response>(
      {
        method: "POST",
        url: "sessions/" + SessionAttachUserParams.sessionId + "/user",
        body: {
          userId: SessionAttachUserParams.userId,
        },
        authenticationNotOptional: true,
      },
      SessionAttachUserOptions
    );
  }

  async detachUser(
    SessionDetachUserParams: JUHUU.Session.DetachUser.Params,
    SessionDetachUserOptions?: JUHUU.Session.DetachUser.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Session.DetachUser.Response>> {
    return await super.sendRequest<JUHUU.Session.DetachUser.Response>(
      {
        method: "DELETE",
        url: "sessions/" + SessionDetachUserParams.sessionId + "/user",
        body: undefined,
        authenticationNotOptional: true,
      },
      SessionDetachUserOptions
    );
  }

  async delete(
    SessionDeleteUserParams: JUHUU.Session.Delete.Params,
    SessionDeleteUserOptions?: JUHUU.Session.Delete.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Session.Delete.Response>> {
    return await super.sendRequest<JUHUU.Session.Delete.Response>(
      {
        method: "DELETE",
        url: "sessions/" + SessionDeleteUserParams.sessionId,
        body: undefined,
        authenticationNotOptional: true,
      },
      SessionDeleteUserOptions
    );
  }

  listen(
    SessionRealtimeParams: JUHUU.Session.Realtime.Params,
    SessionRealtimeOptions?: JUHUU.Session.Realtime.Options
  ): JUHUU.Session.Realtime.Response {
    const socket = super.connectToWebsocket<JUHUU.Session.Realtime.Response>({
      url: "sessions/" + SessionRealtimeParams.sessionId + "/websocket",
    });

    const onUpdated = (onUpdatedCallback: (message: any) => void) => {
      socket.on("updated", (message: any) => {
        onUpdatedCallback(message);
      });
    };

    return {
      onUpdated: onUpdated,
      close: () => {
        console.log("closing websocket connection");
        socket.close();
      },
    };
  }
}
