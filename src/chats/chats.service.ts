import { JUHUU } from "..";
import Service from "../index.service";

export default class ChatsService extends Service {
  constructor(config: JUHUU.SetupConfig) {
    super(config);
  }

  async create(
    ChatCreateParams: JUHUU.Chat.Create.Params,
    ChatCreateOptions?: JUHUU.Chat.Create.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Chat.Create.Response>> {
    return await super.sendRequest<JUHUU.Chat.Create.Response>(
      {
        method: "POST",
        url: "chats",
        body: {
          userId: ChatCreateParams.userId,
        },
        authenticationNotOptional: true,
      },
      ChatCreateOptions
    );
  }

  async list(
    ChatListParams: JUHUU.Chat.List.Params,
    ChatListOptions?: JUHUU.Chat.List.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Chat.List.Response>> {
    const queryArray: string[] = [];

    if (ChatListOptions?.limit !== undefined) {
      queryArray.push("limit=" + ChatListOptions.limit);
    }

    if (ChatListParams?.userId !== undefined) {
      queryArray.push("userId=" + ChatListParams.userId);
    }

    if (ChatListOptions?.skip !== undefined) {
      queryArray.push("skip=" + ChatListOptions.skip);
    }

    return await super.sendRequest<JUHUU.Chat.List.Response>(
      {
        method: "GET",
        url: "chats?" + queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: false,
      },
      ChatListOptions
    );
  }

  async retrieve(
    ChatRetrieveParams: JUHUU.Chat.Retrieve.Params,
    ChatRetrieveOptions?: JUHUU.Chat.Retrieve.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Chat.Retrieve.Response>> {
    const queryArray: string[] = [];

    return await super.sendRequest<JUHUU.Chat.Retrieve.Response>(
      {
        method: "GET",
        url: "chats/" + ChatRetrieveParams.chatId + "?" + queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: false,
      },
      ChatRetrieveOptions
    );
  }

  async update(
    ChatUpdateParams: JUHUU.Chat.Update.Params,
    ChatUpdateOptions?: JUHUU.Chat.Update.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Chat.Update.Response>> {
    return await super.sendRequest<JUHUU.Chat.Update.Response>(
      {
        method: "PATCH",
        url: "chats/" + ChatUpdateParams.chatId,
        body: {
          title: ChatUpdateParams.title,
        },
        authenticationNotOptional: true,
      },
      ChatUpdateOptions
    );
  }

  async generateTitle(
    ChatGenerateTitleParams: JUHUU.Chat.GenerateTitle.Params,
    ChatGenerateTitleOptions?: JUHUU.Chat.GenerateTitle.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Chat.GenerateTitle.Response>> {
    return await super.sendRequest<JUHUU.Chat.GenerateTitle.Response>(
      {
        method: "PATCH",
        url: "chats/" + ChatGenerateTitleParams.chatId + "/generateTitle",
        body: undefined,
        authenticationNotOptional: true,
      },
      ChatGenerateTitleOptions
    );
  }

  async delete(
    ChatDeleteParams: JUHUU.Chat.Delete.Params,
    ChatDeleteOptions?: JUHUU.Chat.Delete.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Chat.Delete.Response>> {
    return await super.sendRequest<JUHUU.Chat.Delete.Response>(
      {
        method: "DELETE",
        url: "chats/" + ChatDeleteParams.chatId,
        authenticationNotOptional: true,
        body: undefined,
      },
      ChatDeleteOptions
    );
  }

  async complete(
    ChatUpdateParams: JUHUU.Chat.Complete.Params,
    ChatUpdateOptions?: JUHUU.Chat.Complete.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Chat.Complete.Response>> {
    return await super.sendRequest<JUHUU.Chat.Complete.Response>(
      {
        method: "PATCH",
        url: "chats/" + ChatUpdateParams.chatId + "/complete",
        body: undefined,
        authenticationNotOptional: true,
      },
      ChatUpdateOptions
    );
  }
}
