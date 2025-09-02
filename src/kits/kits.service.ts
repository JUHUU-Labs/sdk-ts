import { JUHUU } from "..";
import Service from "../index.service";

export default class KitsService extends Service {
  constructor(config: JUHUU.SetupConfig) {
    super(config);
  }

  async create(
    params: JUHUU.Kit.Create.Params,
    options?: JUHUU.Kit.Create.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Kit.Create.Response>> {
    return await super.sendRequest<JUHUU.Kit.Create.Response>(
      {
        method: "POST",
        url: "kits",
        body: {
          name: params.name,
          propertyId: params.propertyId,
          template: params.template,
        },
        authenticationNotOptional: true,
      },
      options
    );
  }

  async list(
    params: JUHUU.Kit.List.Params,
    options?: JUHUU.Kit.List.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Kit.List.Response>> {
    const queryArray: string[] = [];

    if (params?.name !== undefined) {
      queryArray.push("name=" + params.name);
    }

    if (params?.propertyId !== undefined) {
      queryArray.push("propertyId=" + params.propertyId);
    }

    if (params?.type !== undefined) {
      queryArray.push("type=" + params.type);
    }

    if (options?.limit !== undefined) {
      queryArray.push("limit=" + options.limit);
    }

    return await super.sendRequest<JUHUU.Kit.List.Response>(
      {
        method: "GET",
        url: "kits?" + queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: false,
      },
      options
    );
  }

  async retrieve(
    params: JUHUU.Kit.Retrieve.Params,
    options?: JUHUU.Kit.Retrieve.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Kit.Retrieve.Response>> {
    const queryArray: string[] = [];

    return await super.sendRequest<JUHUU.Kit.Retrieve.Response>(
      {
        method: "GET",
        url: "kits/" + params.kitId + "?" + queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: false,
      },
      options
    );
  }

  async update(
    params: JUHUU.Kit.Update.Params,
    options?: JUHUU.Kit.Update.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Kit.Update.Response>> {
    return await super.sendRequest<JUHUU.Kit.Update.Response>(
      {
        method: "PATCH",
        url: "kits/" + params.kitId,
        body: {
          name: params.name,
        },
        authenticationNotOptional: true,
      },
      options
    );
  }

  async delete(
    params: JUHUU.Kit.Delete.Params,
    options?: JUHUU.Kit.Delete.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Kit.Delete.Response>> {
    return await super.sendRequest<JUHUU.Kit.Delete.Response>(
      {
        method: "DELETE",
        url: "kits/" + params.kitId,
        authenticationNotOptional: true,
        body: undefined,
      },
      options
    );
  }
}
