import { JUHUU } from "..";
import Service from "../index.service";

export default class BuddyService extends Service {
  constructor(config: JUHUU.SetupConfig) {
    super(config);
  }

  /**
   * Token to start one JUHUU Buddy voice call (the agent requires one). Works
   * logged in and logged out; logged in users get a higher limit.
   */
  async conversationToken(
    BuddyConversationTokenParams: JUHUU.Buddy.ConversationToken.Params,
    BuddyConversationTokenOptions?: JUHUU.Buddy.ConversationToken.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Buddy.ConversationToken.Response>> {
    return await super.sendRequest<JUHUU.Buddy.ConversationToken.Response>(
      {
        method: "POST",
        url: "buddy/conversation/token",
        body: {
          applicationId: BuddyConversationTokenParams.applicationId,
        },
        authenticationNotOptional: false,
      },
      BuddyConversationTokenOptions
    );
  }
}
