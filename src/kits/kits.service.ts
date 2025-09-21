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
    const body: any = {
      name: params.name,
      propertyId: params.propertyId,
      type: params.type,
    };

    // Add type-specific fields based on kit type
    if (params.type === "controlKitV1") {
      body.simIdArray = params.simIdArray;
      body.signalStrengthPercentage = params.signalStrengthPercentage;
      body.teltonikaSerialNumber = params.teltonikaSerialNumber;
    } else if (params.type === "tapkeyV1") {
      body.physicalLockId = params.physicalLockId;
      body.boundLockId = params.boundLockId;
      body.ownerAccountId = params.ownerAccountId;
      body.ipId = params.ipId;
    } else if (params.type === "emzV1") {
      body.contractId = params.contractId;
      body.targetHardwareId = params.targetHardwareId;
      body.userId = params.userId;
      body.username = params.username;
      body.password = params.password;
    }

    return await super.sendRequest<JUHUU.Kit.Create.Response>(
      {
        method: "POST",
        url: "kits",
        body,
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
          flowIdArray: params.flowIdArray,
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

  async attachProperty(
    params: JUHUU.Kit.AttachProperty.Params,
    options?: JUHUU.Kit.AttachProperty.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Kit.AttachProperty.Response>> {
    return await super.sendRequest<JUHUU.Kit.AttachProperty.Response>(
      {
        method: "PATCH",
        url: "kits/" + params.kitId + "/attachProperty",
        body: {
          propertyId: params.propertyId,
        },
        authenticationNotOptional: true,
      },
      options
    );
  }

  async detachProperty(
    params: JUHUU.Kit.DetachProperty.Params,
    options?: JUHUU.Kit.DetachProperty.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Kit.DetachProperty.Response>> {
    return await super.sendRequest<JUHUU.Kit.DetachProperty.Response>(
      {
        method: "PATCH",
        url: "kits/" + params.kitId + "/detachProperty",
        body: undefined,
        authenticationNotOptional: true,
      },
      options
    );
  }
}
