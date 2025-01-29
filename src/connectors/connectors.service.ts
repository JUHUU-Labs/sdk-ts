import { JUHUU } from "..";
import Service from "../index.service";

export default class ConnectorsService extends Service {
  constructor(config: JUHUU.SetupConfig) {
    super(config);
  }

  async create(
    ConnectorCreateParams: JUHUU.Connector.Create.Params,
    ConnectorCreateOptions?: JUHUU.Connector.Create.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Connector.Create.Response>> {
    return await super.sendRequest<JUHUU.Connector.Create.Response>(
      {
        method: "POST",
        url: "connectors",
        body: {
          propertyId: ConnectorCreateParams.propertyId,
          name: ConnectorCreateParams.name,
          username: ConnectorCreateParams.username,
          password: ConnectorCreateParams.password,
          clientId: ConnectorCreateParams.clientId,
          host: ConnectorCreateParams.host,
          port: ConnectorCreateParams.port,
          mqttRetain: ConnectorCreateParams.mqttRetain,
          mqttQos: ConnectorCreateParams.mqttQos,
          description: ConnectorCreateParams.description,
          simId: ConnectorCreateParams.simId,
          connectionMode: ConnectorCreateParams.connectionMode,
          type: ConnectorCreateParams.type,
        },
        authenticationNotOptional: true,
      },
      ConnectorCreateOptions
    );
  }

  async retrieve(
    ConnectorRetrieveParams: JUHUU.Connector.Retrieve.Params,
    ConnectorRetrieveOptions?: JUHUU.Connector.Retrieve.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Connector.Retrieve.Response>> {
    const queryArray: string[] = [];

    if (ConnectorRetrieveOptions?.expand !== undefined) {
      queryArray.push("expand=" + ConnectorRetrieveOptions.expand.join(","));
    }

    return await super.sendRequest<JUHUU.Connector.Retrieve.Response>(
      {
        method: "GET",
        url:
          "connectors/" +
          ConnectorRetrieveParams.connectorId +
          "?" +
          queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: false,
      },
      ConnectorRetrieveOptions
    );
  }

  async list(
    ConnectorListParams: JUHUU.Connector.List.Params,
    ConnectorListOptions?: JUHUU.Connector.List.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Connector.List.Response>> {
    const queryArray: string[] = [];

    if (ConnectorListParams?.propertyId !== undefined) {
      queryArray.push("propertyId=" + ConnectorListParams.propertyId);
    }

    return await super.sendRequest<JUHUU.Connector.List.Response>(
      {
        method: "GET",
        url: "connectors?" + queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: false,
      },
      ConnectorListOptions
    );
  }

  async update(
    ConnectorUpdateParams: JUHUU.Connector.Update.Params,
    ConnectorUpdateOptions?: JUHUU.Connector.Update.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Connector.Update.Response>> {
    return await super.sendRequest<JUHUU.Connector.Update.Response>(
      {
        method: "PATCH",
        url: "connectors/" + ConnectorUpdateParams.connectorId,
        body: {
          name: ConnectorUpdateParams.name,
          description: ConnectorUpdateParams.description,
          connectionMode: ConnectorUpdateParams.connectionMode,
          simId: ConnectorUpdateParams.simId,
        },
        authenticationNotOptional: true,
      },
      ConnectorUpdateOptions
    );
  }

  async delete(
    ConnectorDeleteParams: JUHUU.Connector.Delete.Params,
    ConnectorDeleteOptions?: JUHUU.Connector.Delete.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Connector.Delete.Response>> {
    return await super.sendRequest<JUHUU.Connector.Delete.Response>(
      {
        method: "DELETE",
        url: "connectors/" + ConnectorDeleteParams.connectorId,
        authenticationNotOptional: true,
        body: undefined,
      },
      ConnectorDeleteOptions
    );
  }
}
