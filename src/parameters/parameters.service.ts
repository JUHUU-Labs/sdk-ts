import { JUHUU, LanguageCodeArray } from "..";
import Service from "../index.service";

export default class ParametersService extends Service {
  constructor(config: JUHUU.SetupConfig) {
    super(config);
  }

  async create(
    ParameterCreateParams: JUHUU.Parameter.Create.Params,
    ParameterCreateOptions?: JUHUU.Parameter.Create.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Parameter.Create.Response>> {
    return await super.sendRequest<JUHUU.Parameter.Create.Response>(
      {
        method: "POST",
        url: "parameters",
        body: {
          propertyId: ParameterCreateParams.propertyId,
          type: ParameterCreateParams.type,
          name: ParameterCreateParams.name,
          description: ParameterCreateParams.description,
          currentValue: ParameterCreateParams.currentValue,
          enumArray: ParameterCreateParams.enumArray,
          reference: ParameterCreateParams.reference,
        },
        authenticationNotOptional: true,
      },
      ParameterCreateOptions
    );
  }

  async list(
    ParameterListParams: JUHUU.Parameter.List.Params,
    ParameterListOptions?: JUHUU.Parameter.List.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Parameter.List.Response>> {
    const queryArray: string[] = [];

    if (ParameterListParams?.parameterAnomalyGroupId !== undefined) {
      queryArray.push(
        "parameterAnomalyGroupId=" + ParameterListParams.parameterAnomalyGroupId
      );
    }

    if (ParameterListParams?.propertyId !== undefined) {
      queryArray.push("propertyId=" + ParameterListParams.propertyId);
    }

    if (ParameterListOptions?.skip !== undefined) {
      queryArray.push("skip=" + ParameterListOptions.skip);
    }

    if (ParameterListOptions?.limit !== undefined) {
      queryArray.push("limit=" + ParameterListOptions.limit);
    }

    return await super.sendRequest<JUHUU.Parameter.List.Response>(
      {
        method: "GET",
        url: "parameters?" + queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: false,
      },
      ParameterListOptions
    );
  }

  async retrieve(
    ParameterRetrieveParams: JUHUU.Parameter.Retrieve.Params,
    ParameterRetrieveOptions?: JUHUU.Parameter.Retrieve.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Parameter.Retrieve.Response>> {
    const queryArray: string[] = [];

    if (ParameterRetrieveParams?.deviceId !== undefined) {
      queryArray.push("deviceId=" + ParameterRetrieveParams.deviceId);
    }

    if (ParameterRetrieveOptions?.expand !== undefined) {
      queryArray.push("expand=" + ParameterRetrieveOptions.expand.join(","));
    }

    return await super.sendRequest<JUHUU.Parameter.Retrieve.Response>(
      {
        method: "GET",
        url:
          "parameters/" +
          ParameterRetrieveParams.parameterId +
          "?" +
          queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: false,
      },
      ParameterRetrieveOptions
    );
  }

  async update(
    ParameterUpdateParams: JUHUU.Parameter.Update.Params,
    ParameterUpdateOptions?: JUHUU.Parameter.Update.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Parameter.Update.Response>> {
    return await super.sendRequest<JUHUU.Parameter.Update.Response>(
      {
        method: "PATCH",
        url: "parameters/" + ParameterUpdateParams.parameterId,
        body: {
          name: ParameterUpdateParams.name,
          currentValue: ParameterUpdateParams.currentValue,
          deviceId: ParameterUpdateParams.deviceId,
        },
        authenticationNotOptional: true,
      },
      ParameterUpdateOptions
    );
  }

  async delete(
    ParameterDeleteParams: JUHUU.Parameter.Delete.Params,
    ParameterDeleteOptions?: JUHUU.Parameter.Delete.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Parameter.Delete.Response>> {
    return await super.sendRequest<JUHUU.Parameter.Delete.Response>(
      {
        method: "DELETE",
        url: "parameters/" + ParameterDeleteParams.parameterId,
        authenticationNotOptional: true,
        body: undefined,
      },
      ParameterDeleteOptions
    );
  }

  listen(
    ParameterRealtimeParams: JUHUU.Parameter.Realtime.Params,
    ParameterRealtimeOptions?: JUHUU.Parameter.Realtime.Options
  ): JUHUU.Parameter.Realtime.Response {
    const socket = super.connectToWebsocket<JUHUU.Parameter.Realtime.Response>({
      url: "parameters/" + ParameterRealtimeParams.parameterId + "/websocket",
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
