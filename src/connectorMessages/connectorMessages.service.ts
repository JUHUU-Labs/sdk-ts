import { JUHUU } from "..";
import Service from "../index.service";

export default class ConnectorMessagesService extends Service {
  constructor(config: JUHUU.SetupConfig) {
    super(config);
  }

  async create() {}

  async retrieve(
    ConnectorMessageRetrieveParams: JUHUU.ConnectorMessage.Retrieve.Params,
    ConnectorMessageRetrieveOptions?: JUHUU.ConnectorMessage.Retrieve.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.ConnectorMessage.Retrieve.Response>> {
    const queryArray: string[] = [];

    return await super.sendRequest<JUHUU.ConnectorMessage.Retrieve.Response>(
      {
        method: "GET",
        url:
          "connectorMessages/" +
          ConnectorMessageRetrieveParams.connectorMessageId +
          "?" +
          queryArray.join("&"),
        body: undefined,
        useAuthentication: false,
      },
      ConnectorMessageRetrieveOptions
    );
  }

  async list(
    ConnectorMessageListParams: JUHUU.ConnectorMessage.List.Params,
    ConnectorMessageListOptions?: JUHUU.ConnectorMessage.List.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.ConnectorMessage.List.Response>> {
    const queryArray: string[] = [];

    if (ConnectorMessageListParams?.propertyId !== undefined) {
      queryArray.push("propertyId=" + ConnectorMessageListParams.propertyId);
    }

    return await super.sendRequest<JUHUU.ConnectorMessage.List.Response>(
      {
        method: "GET",
        url: "connectorMessages?" + queryArray.join("&"),
        body: undefined,
        useAuthentication: false,
      },
      ConnectorMessageListOptions
    );
  }
}
