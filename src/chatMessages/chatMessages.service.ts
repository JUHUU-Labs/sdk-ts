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
        },
        useAuthentication: true,
      },
      ChatMessageCreateOptions
    );
  }

  async list(
    ChatMessageListParams: JUHUU.ChatMessage.List.Params,
    ChatMessageListOptions?: JUHUU.ChatMessage.List.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.ChatMessage.List.Response>> {
    const queryArray: string[] = [];

    if (ChatMessageListParams.userId !== undefined) {
      queryArray.push("userId=" + ChatMessageListParams.userId);
    }

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
        useAuthentication: true,
      },
      ChatMessageListOptions
    );
  }

  async retrieve(
    ChatMessageRetrieveParams: JUHUU.ChatMessage.Retrieve.Params,
    ChatMessageRetrieveOptions?: JUHUU.ChatMessage.Retrieve.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.ChatMessage.Retrieve.Response>> {
    const queryArray: string[] = [];

    return await super.sendRequest<JUHUU.ChatMessage.Retrieve.Response>({
      method: "GET",
      url:
        "chatMessages/" +
        ChatMessageRetrieveParams.chatMessageId +
        "?" +
        queryArray.join("&"),
      body: undefined,
      useAuthentication: true,
    });
  }
}
