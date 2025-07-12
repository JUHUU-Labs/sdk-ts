import { JUHUU } from "..";
import Service from "../index.service";

export default class MqttTopicsService extends Service {
  constructor(config: JUHUU.SetupConfig) {
    super(config);
  }

  async create(
    params: JUHUU.MqttTopic.Create.Params,
    options?: JUHUU.MqttTopic.Create.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.MqttTopic.Create.Response>> {
    return await super.sendRequest<JUHUU.MqttTopic.Create.Response>(
      {
        method: "POST",
        url: "mqttTopics",
        body: {
          propertyId: params.propertyId,
          name: params.name,
          chatId: params.chatId,
        },
        authenticationNotOptional: true,
      },
      options
    );
  }

  async list(
    params: JUHUU.MqttTopic.List.Params,
    options?: JUHUU.MqttTopic.List.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.MqttTopic.List.Response>> {
    const queryArray: string[] = [];

    if (params?.propertyId !== undefined) {
      queryArray.push("propertyId=" + params.propertyId);
    }

    if (params?.chatId !== undefined) {
      queryArray.push("chatId=" + params.chatId);
    }

    if (options?.limit !== undefined) {
      queryArray.push("limit=" + options.limit);
    }

    if (options?.skip !== undefined) {
      queryArray.push("skip=" + options.skip);
    }

    return await super.sendRequest<JUHUU.MqttTopic.List.Response>(
      {
        method: "GET",
        url: "mqttTopics?" + queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: false,
      },
      options
    );
  }

  async retrieve(
    params: JUHUU.MqttTopic.Retrieve.Params,
    options?: JUHUU.MqttTopic.Retrieve.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.MqttTopic.Retrieve.Response>> {
    const queryArray: string[] = [];

    return await super.sendRequest<JUHUU.MqttTopic.Retrieve.Response>(
      {
        method: "GET",
        url: "mqttTopics/" + params.mqttTopicId + "?" + queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: false,
      },
      options
    );
  }

  async update(
    params: JUHUU.MqttTopic.Update.Params,
    options?: JUHUU.MqttTopic.Update.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.MqttTopic.Update.Response>> {
    return await super.sendRequest<JUHUU.MqttTopic.Update.Response>(
      {
        method: "PATCH",
        url: "mqttTopics/" + params.mqttTopicId,
        body: {
          name: params.name,
          chatId: params.chatId,
        },
        authenticationNotOptional: true,
      },
      options
    );
  }

  async attachChat(
    params: JUHUU.MqttTopic.AttachChat.Params,
    options?: JUHUU.MqttTopic.AttachChat.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.MqttTopic.AttachChat.Response>> {
    return await super.sendRequest<JUHUU.MqttTopic.AttachChat.Response>(
      {
        method: "PATCH",
        url: "mqttTopics/" + params.mqttTopicId + "/chat",
        body: {
          chatId: params.chatId,
        },
        authenticationNotOptional: true,
      },
      options
    );
  }

  async delete(
    params: JUHUU.MqttTopic.Delete.Params,
    options?: JUHUU.MqttTopic.Delete.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.MqttTopic.Delete.Response>> {
    return await super.sendRequest<JUHUU.MqttTopic.Delete.Response>(
      {
        method: "DELETE",
        url: "mqttTopics/" + params.mqttTopicId,
        authenticationNotOptional: true,
        body: undefined,
      },
      options
    );
  }
}
