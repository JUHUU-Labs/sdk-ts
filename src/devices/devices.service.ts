import { JUHUU } from "..";
import Service from "../index.service";

export default class DevicesService extends Service {
  constructor(config: JUHUU.SetupConfig) {
    super(config);
  }

  async create(
    DeviceCreateParams: JUHUU.Device.Create.Params,
    DeviceCreateOptions?: JUHUU.Device.Create.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Device.Create.Response>> {
    return await super.sendRequest<JUHUU.Device.Create.Response>(
      {
        method: "POST",
        url: "devices",
        body: {
          propertyId: DeviceCreateParams.propertyId,
          deviceTemplateId: DeviceCreateParams.deviceTemplateId,
          name: DeviceCreateParams.name,
          acceptTerms: DeviceCreateParams.acceptTerms,
        },
        authenticationNotOptional: true,
      },
      DeviceCreateOptions
    );
  }

  async retrieve(
    DeviceRetrieveParams: JUHUU.Device.Retrieve.Params,
    DeviceRetrieveOptions?: JUHUU.Device.Retrieve.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Device.Retrieve.Response>> {
    const queryArray: string[] = [];

    if (DeviceRetrieveParams?.source !== undefined) {
      queryArray.push("source=" + DeviceRetrieveParams.source);
    }

    if (DeviceRetrieveOptions?.expand !== undefined) {
      queryArray.push("expand=" + DeviceRetrieveOptions.expand.join(","));
    }

    return await super.sendRequest<JUHUU.Device.Retrieve.Response>(
      {
        method: "GET",
        url:
          "devices/" +
          DeviceRetrieveParams.deviceId +
          "?" +
          queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: false,
      },
      DeviceRetrieveOptions
    );
  }

  async list(
    DeviceListParams: JUHUU.Device.List.Params,
    DeviceListOptions?: JUHUU.Device.List.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Device.List.Response>> {
    const queryArray: string[] = [];

    if (DeviceListParams?.statusArray !== undefined) {
      queryArray.push("statusArray=" + DeviceListParams.statusArray.join(","));
    }

    if (DeviceListParams?.propertyId !== undefined) {
      queryArray.push("propertyId=" + DeviceListParams.propertyId);
    }

    if (DeviceListParams?.deviceTemplateId !== undefined) {
      queryArray.push("deviceTemplateId=" + DeviceListParams.deviceTemplateId);
    }

    if (DeviceListOptions?.limit !== undefined) {
      queryArray.push("limit=" + DeviceListOptions.limit);
    }

    if (DeviceListOptions?.skip !== undefined) {
      queryArray.push("skip=" + DeviceListOptions.skip);
    }

    return await super.sendRequest<JUHUU.Device.List.Response>(
      {
        method: "GET",
        url: "devices?" + queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: false,
      },
      DeviceListOptions
    );
  }

  async update(
    DeviceUpdateParams: JUHUU.Device.Update.Params,
    DeviceUpdateOptions?: JUHUU.Device.Update.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Device.Update.Response>> {
    return await super.sendRequest<JUHUU.Device.Update.Response>(
      {
        method: "PATCH",
        url: "devices/" + DeviceUpdateParams.deviceId,
        body: {
          status: DeviceUpdateParams.status,
          name: DeviceUpdateParams.name,
          description: DeviceUpdateParams.description,
          latitude: DeviceUpdateParams.latitude,
          longitude: DeviceUpdateParams.longitude,
          connectorId: DeviceUpdateParams.connectorId,
          connectorParameter: DeviceUpdateParams.connectorParameter,
          disabled: DeviceUpdateParams.disabled,
        },
        authenticationNotOptional: true,
      },
      DeviceUpdateOptions
    );
  }

  listen(
    DeviceRealtimeParams: JUHUU.Device.Realtime.Params,
    DeviceRealtimeOptions?: JUHUU.Device.Realtime.Options
  ): JUHUU.Device.Realtime.Response {
    const socket = super.connectToWebsocket<JUHUU.Device.Realtime.Response>({
      url: "devices/" + DeviceRealtimeParams.deviceId + "/websocket",
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

  async nodeExecute(
    DeviceNodeExecuteParams: JUHUU.Device.NodeExecute.Params,
    DeviceNodeExecuteOptions?: JUHUU.Device.NodeExecute.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Device.NodeExecute.Response>> {
    return await super.sendRequest<JUHUU.Device.NodeExecute.Response>(
      {
        method: "POST",
        url:
          "devices/" +
          DeviceNodeExecuteParams.deviceId +
          "/node/" +
          DeviceNodeExecuteParams.nodeId,
        body: {},
        authenticationNotOptional: true,
      },
      DeviceNodeExecuteOptions
    );
  }

  async delete(
    DeviceDeleteParams: JUHUU.Device.Delete.Params,
    DeviceDeleteOptions?: JUHUU.Device.Delete.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Device.Delete.Response>> {
    return await super.sendRequest<JUHUU.Device.Delete.Response>(
      {
        method: "DELETE",
        url: "devices/" + DeviceDeleteParams.deviceId,
        authenticationNotOptional: true,
        body: undefined,
      },
      DeviceDeleteOptions
    );
  }
}
