import { JUHUU } from "..";
import Service from "../index.service";

export default class ChatMessagesService extends Service {
  constructor(config: JUHUU.SetupConfig) {
    super(config);
  }

  async create(
    ChatMessageCreateParams: JUHUU.ChatMessage.Create.Params,
    ChatMessageCreateOptions?: JUHUU.ChatMessage.Create.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.ChatMessage.Create.Response>> {
    return await super.sendRequest<JUHUU.ChatMessage.Create.Response>(
      {
        method: "POST",
        url: "chatMessages",
        body: {
          chatId: ChatMessageCreateParams.chatId,
          message: ChatMessageCreateParams.message,
          userId: ChatMessageCreateParams.userId,
          context: ChatMessageCreateParams.context,
        },
        authenticationNotOptional: true,
      },
      ChatMessageCreateOptions
    );
  }

  async list(
    ChatMessageListParams: JUHUU.ChatMessage.List.Params,
    ChatMessageListOptions?: JUHUU.ChatMessage.List.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.ChatMessage.List.Response>> {
    const queryArray: string[] = [];
    if (ChatMessageListParams.chatId !== undefined) {
      queryArray.push("chatId=" + ChatMessageListParams.chatId);
    }

    if (ChatMessageListParams.limit !== undefined) {
      queryArray.push("limit=" + ChatMessageListParams.limit);
    }

    if (ChatMessageListParams.skip !== undefined) {
      queryArray.push("skip=" + ChatMessageListParams.skip);
    }

    return await super.sendRequest<JUHUU.ChatMessage.List.Response>(
      {
        method: "GET",
        url: "chatMessages?" + queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: true,
      },
      ChatMessageListOptions
    );
  }

  async retrieve(
    ChatMessageRetrieveParams: JUHUU.ChatMessage.Retrieve.Params,
    ChatMessageRetrieveOptions?: JUHUU.ChatMessage.Retrieve.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.ChatMessage.Retrieve.Response>> {
    const queryArray: string[] = [];

    return await super.sendRequest<JUHUU.ChatMessage.Retrieve.Response>(
      {
        method: "GET",
        url:
          "chatMessages/" +
          ChatMessageRetrieveParams.chatMessageId +
          "?" +
          queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: true,
      },
      ChatMessageRetrieveOptions
    );
  }

  async update(
    ChatMessageUpdateParams: JUHUU.ChatMessage.Update.Params,
    ChatMessageUpdateOptions?: JUHUU.ChatMessage.Update.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.ChatMessage.Update.Response>> {
    return await super.sendRequest<JUHUU.ChatMessage.Update.Response>(
      {
        method: "PATCH",
        url: "chatMessages/" + ChatMessageUpdateParams.chatMessageId,
        body: {
          rating: ChatMessageUpdateParams.rating,
          feedbackText: ChatMessageUpdateParams.feedbackText,
          message: ChatMessageUpdateParams.message,
        },
        authenticationNotOptional: true,
      },
      ChatMessageUpdateOptions
    );
  }

  async delete(
    ChatMessageDeleteParams: JUHUU.ChatMessage.Delete.Params,
    ChatMessageDeleteOptions?: JUHUU.ChatMessage.Delete.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.ChatMessage.Delete.Response>> {
    return await super.sendRequest<JUHUU.ChatMessage.Delete.Response>(
      {
        method: "DELETE",
        url: "chatMessages/" + ChatMessageDeleteParams.chatMessageId,
        authenticationNotOptional: true,
        body: undefined,
      },
      ChatMessageDeleteOptions
    );
  }
}
