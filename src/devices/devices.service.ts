import { JUHUU } from "..";
import Service from "../index.service";

export default class DevicesService extends Service {
  constructor(config: JUHUU.SetupConfig) {
    super(config);
  }

  async create() {}

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
        useAuthentication: false,
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

    if (DeviceListParams?.rentable !== undefined) {
      queryArray.push("rentable=" + DeviceListParams.rentable);
    }

    if (DeviceListParams?.propertyId !== undefined) {
      queryArray.push("propertyId=" + DeviceListParams.propertyId);
    }

    if (DeviceListParams?.visible !== undefined) {
      queryArray.push("visible=" + DeviceListParams.visible);
    }

    if (DeviceListParams?.deviceTemplateId !== undefined) {
      queryArray.push("deviceTemplateId=" + DeviceListParams.deviceTemplateId);
    }

    if (DeviceListParams?.termId !== undefined) {
      queryArray.push("termId=" + DeviceListParams.termId);
    }

    return await super.sendRequest<JUHUU.Device.List.Response>(
      {
        method: "GET",
        url: "devices?" + queryArray.join("&"),
        body: undefined,
        useAuthentication: false,
      },
      DeviceListOptions
    );
  }

  async update() {}

  async delete() {}

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

  async message(
    DeviceMessageParams: JUHUU.Device.Message.Params,
    DeviceMessageOptions?: JUHUU.Device.Message.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Device.Message.Response>> {
    return await super.sendRequest<JUHUU.Device.Message.Response>(
      {
        method: "POST",
        url: "devices?" + DeviceMessageParams.deviceId + "/message",
        body: {
          message: DeviceMessageParams.message,
        },
        useAuthentication: true,
      },
      DeviceMessageOptions
    );
  }

  async parameterUpdate(
    DeviceParameterParams: JUHUU.Device.ParameterUpdate.Params,
    DeviceParameterOptions?: JUHUU.Device.ParameterUpdate.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Device.ParameterUpdate.Response>> {
    return await super.sendRequest<JUHUU.Device.ParameterUpdate.Response>(
      {
        method: "PATCH",
        url:
          "devices/" +
          DeviceParameterParams.deviceId +
          "/parameter/" +
          DeviceParameterParams.parameterName,
        body: {
          value: DeviceParameterParams.value,
        },
        useAuthentication: true,
      },
      DeviceParameterOptions
    );
  }

  async commandExecute(
    DeviceCommandExecuteParams: JUHUU.Device.CommandExecute.Params,
    DeviceCommandExecuteOptions?: JUHUU.Device.CommandExecute.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Device.CommandExecute.Response>> {
    return await super.sendRequest<JUHUU.Device.CommandExecute.Response>(
      {
        method: "POST",
        url:
          "devices/" +
          DeviceCommandExecuteParams.deviceId +
          "/command/" +
          DeviceCommandExecuteParams.commandName,
        body: {},
        useAuthentication: true,
      },
      DeviceCommandExecuteOptions
    );
  }
}
