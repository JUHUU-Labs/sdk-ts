import { JUHUU } from "..";
import Service from "../index.service";

export default class PanelsService extends Service {
  constructor(config: JUHUU.SetupConfig) {
    super(config);
  }

  async create(
    params: JUHUU.Panel.Create.Params,
    options?: JUHUU.Panel.Create.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Panel.Create.Response>> {
    return await super.sendRequest<JUHUU.Panel.Create.Response>(
      {
        method: "POST",
        url: "panels",
        body: {
          userId: params.userId,
          name: params.name,
          title: params.title,
          description: params.description,
          type: params.type,
          status: params.status,
          size: params.size,
          isResizable: params.isResizable,
          isDraggable: params.isDraggable,
          isVisible: params.isVisible,
          position: params.position,
          config: params.config,
          accessCount: params.accessCount,
          permissions: params.permissions,
          tags: params.tags,
          parentPanelId: params.parentPanelId,
          order: params.order,
        },
        authenticationNotOptional: true,
      },
      options
    );
  }

  async list(
    params: JUHUU.Panel.List.Params,
    options?: JUHUU.Panel.List.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Panel.List.Response>> {
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

    if (params?.size !== undefined) {
      queryArray.push("size=" + params.size);
    }

    if (params?.isVisible !== undefined) {
      queryArray.push("isVisible=" + params.isVisible);
    }

    if (params?.parentPanelId !== undefined) {
      queryArray.push("parentPanelId=" + params.parentPanelId);
    }

    if (options?.limit !== undefined) {
      queryArray.push("limit=" + options.limit);
    }

    if (options?.skip !== undefined) {
      queryArray.push("skip=" + options.skip);
    }

    return await super.sendRequest<JUHUU.Panel.List.Response>(
      {
        method: "GET",
        url: "panels?" + queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: false,
      },
      options
    );
  }

  async retrieve(
    params: JUHUU.Panel.Retrieve.Params,
    options?: JUHUU.Panel.Retrieve.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Panel.Retrieve.Response>> {
    const queryArray: string[] = [];

    return await super.sendRequest<JUHUU.Panel.Retrieve.Response>(
      {
        method: "GET",
        url: "panels/" + params.panelId + "?" + queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: false,
      },
      options
    );
  }

  async update(
    params: JUHUU.Panel.Update.Params,
    options?: JUHUU.Panel.Update.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Panel.Update.Response>> {
    return await super.sendRequest<JUHUU.Panel.Update.Response>(
      {
        method: "PATCH",
        url: "panels/" + params.panelId,
        body: {
          userId: params.userId,
          name: params.name,
          title: params.title,
          description: params.description,
          type: params.type,
          status: params.status,
          size: params.size,
          isResizable: params.isResizable,
          isDraggable: params.isDraggable,
          isVisible: params.isVisible,
          position: params.position,
          config: params.config,
          permissions: params.permissions,
          tags: params.tags,
          parentPanelId: params.parentPanelId,
          order: params.order,
        },
        authenticationNotOptional: true,
      },
      options
    );
  }

  async delete(
    params: JUHUU.Panel.Delete.Params,
    options?: JUHUU.Panel.Delete.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Panel.Delete.Response>> {
    return await super.sendRequest<JUHUU.Panel.Delete.Response>(
      {
        method: "DELETE",
        url: "panels/" + params.panelId,
        authenticationNotOptional: true,
        body: undefined,
      },
      options
    );
  }
}