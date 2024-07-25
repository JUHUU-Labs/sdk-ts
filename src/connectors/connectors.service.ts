import { JUHUU } from "..";
import Service from "../index.service";

export default class ConnectorsService extends Service {
  constructor(config: JUHUU.SetupConfig) {
    super(config);
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
        useAuthentication: false,
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
        useAuthentication: false,
      },
      ConnectorListOptions
    );
  }
}
