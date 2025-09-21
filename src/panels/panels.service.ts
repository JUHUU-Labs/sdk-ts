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
          propertyId: params.propertyId,
          name: params.name,
          layoutBlockArray: params.layoutBlockArray,
          highlightLayoutBlockArray: params.highlightLayoutBlockArray,
          variables: params.variables,
          display: params.display,
          permissionArray: params.permissionArray,
          proximityStrategyArray: params.proximityStrategyArray,
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

    if (params?.propertyId !== undefined) {
      queryArray.push("propertyId=" + params.propertyId);
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

    if (options?.expand !== undefined) {
      queryArray.push("expand=" + options.expand.join(","));
    }

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
          name: params.name,
          layoutBlockArray: params.layoutBlockArray,
          highlightLayoutBlockArray: params.highlightLayoutBlockArray,
          variables: params.variables,
          display: params.display,
          permissionArray: params.permissionArray,
          proximityStrategyArray: params.proximityStrategyArray,
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