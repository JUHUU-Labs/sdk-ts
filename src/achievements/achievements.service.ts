import { JUHUU } from "..";
import Service from "../index.service";

export default class AchievementsService extends Service {
  constructor(config: JUHUU.SetupConfig) {
    super(config);
  }

  async create(
    params: JUHUU.Achievement.Create.Params,
    options?: JUHUU.Achievement.Create.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Achievement.Create.Response>> {
    return await super.sendRequest<JUHUU.Achievement.Create.Response>(
      {
        method: "POST",
        url: "achievements",
        body: {
          userId: params.userId,
          name: params.name,
          title: params.title,
          description: params.description,
          type: params.type,
          status: params.status,
          category: params.category,
          difficulty: params.difficulty,
          criteria: params.criteria,
          rewards: params.rewards,
          metadata: params.metadata,
          progressPercentage: params.progressPercentage,
          pointsAwarded: params.pointsAwarded,
          isHidden: params.isHidden,
          isRepeatable: params.isRepeatable,
          timesCompleted: params.timesCompleted,
        },
        authenticationNotOptional: true,
      },
      options
    );
  }

  async list(
    params: JUHUU.Achievement.List.Params,
    options?: JUHUU.Achievement.List.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Achievement.List.Response>> {
    const queryArray: string[] = [];

    if (params?.userId !== undefined) {
      queryArray.push("userId=" + params.userId);
    }

    if (params?.name !== undefined) {
      queryArray.push("name=" + params.name);
    }

    if (params?.type !== undefined) {
      queryArray.push("type=" + params.type);
    }

    if (params?.status !== undefined) {
      queryArray.push("status=" + params.status);
    }

    if (params?.category !== undefined) {
      queryArray.push("category=" + params.category);
    }

    if (params?.difficulty !== undefined) {
      queryArray.push("difficulty=" + params.difficulty);
    }

    if (params?.isHidden !== undefined) {
      queryArray.push("isHidden=" + params.isHidden);
    }

    if (params?.isRepeatable !== undefined) {
      queryArray.push("isRepeatable=" + params.isRepeatable);
    }

    if (params?.rarity !== undefined) {
      queryArray.push("rarity=" + params.rarity);
    }

    if (options?.limit !== undefined) {
      queryArray.push("limit=" + options.limit);
    }

    if (options?.skip !== undefined) {
      queryArray.push("skip=" + options.skip);
    }

    return await super.sendRequest<JUHUU.Achievement.List.Response>(
      {
        method: "GET",
        url: "achievements?" + queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: false,
      },
      options
    );
  }

  async retrieve(
    params: JUHUU.Achievement.Retrieve.Params,
    options?: JUHUU.Achievement.Retrieve.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Achievement.Retrieve.Response>> {
    const queryArray: string[] = [];

    return await super.sendRequest<JUHUU.Achievement.Retrieve.Response>(
      {
        method: "GET",
        url: "achievements/" + params.achievementId + "?" + queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: false,
      },
      options
    );
  }

  async update(
    params: JUHUU.Achievement.Update.Params,
    options?: JUHUU.Achievement.Update.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Achievement.Update.Response>> {
    return await super.sendRequest<JUHUU.Achievement.Update.Response>(
      {
        method: "PATCH",
        url: "achievements/" + params.achievementId,
        body: {
          userId: params.userId,
          name: params.name,
          title: params.title,
          description: params.description,
          type: params.type,
          status: params.status,
          category: params.category,
          difficulty: params.difficulty,
          criteria: params.criteria,
          rewards: params.rewards,
          metadata: params.metadata,
          progressPercentage: params.progressPercentage,
          pointsAwarded: params.pointsAwarded,
          isHidden: params.isHidden,
          isRepeatable: params.isRepeatable,
          timesCompleted: params.timesCompleted,
        },
        authenticationNotOptional: true,
      },
      options
    );
  }

  async delete(
    params: JUHUU.Achievement.Delete.Params,
    options?: JUHUU.Achievement.Delete.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Achievement.Delete.Response>> {
    return await super.sendRequest<JUHUU.Achievement.Delete.Response>(
      {
        method: "DELETE",
        url: "achievements/" + params.achievementId,
        authenticationNotOptional: true,
        body: undefined,
      },
      options
    );
  }
}