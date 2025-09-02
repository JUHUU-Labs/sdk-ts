import { JUHUU } from "..";
import Service from "../index.service";

export default class LicensePlatesService extends Service {
  constructor(config: JUHUU.SetupConfig) {
    super(config);
  }

  async create(
    params: JUHUU.LicensePlate.Create.Params,
    options?: JUHUU.LicensePlate.Create.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.LicensePlate.Create.Response>> {
    return await super.sendRequest<JUHUU.LicensePlate.Create.Response>(
      {
        method: "POST",
        url: "licensePlates",
        body: {
          userId: params.userId,
          name: params.name,
        },
        authenticationNotOptional: true,
      },
      options
    );
  }

  async list(
    params: JUHUU.LicensePlate.List.Params,
    options?: JUHUU.LicensePlate.List.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.LicensePlate.List.Response>> {
    const queryArray: string[] = [];

    if (params?.userId !== undefined) {
      queryArray.push("userId=" + params.userId);
    }

    if (options?.limit !== undefined) {
      queryArray.push("limit=" + options.limit);
    }

    if (options?.skip !== undefined) {
      queryArray.push("skip=" + options.skip);
    }

    return await super.sendRequest<JUHUU.LicensePlate.List.Response>(
      {
        method: "GET",
        url: "licensePlates?" + queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: false,
      },
      options
    );
  }

  async retrieve(
    params: JUHUU.LicensePlate.Retrieve.Params,
    options?: JUHUU.LicensePlate.Retrieve.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.LicensePlate.Retrieve.Response>> {
    const queryArray: string[] = [];

    return await super.sendRequest<JUHUU.LicensePlate.Retrieve.Response>(
      {
        method: "GET",
        url: "licensePlates/" + params.licensePlateId + "?" + queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: false,
      },
      options
    );
  }

  async update(
    params: JUHUU.LicensePlate.Update.Params,
    options?: JUHUU.LicensePlate.Update.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.LicensePlate.Update.Response>> {
    return await super.sendRequest<JUHUU.LicensePlate.Update.Response>(
      {
        method: "PATCH",
        url: "licensePlates/" + params.licensePlateId,
        body: {
          userId: params.userId,
          name: params.name,
        },
        authenticationNotOptional: true,
      },
      options
    );
  }

  async delete(
    params: JUHUU.LicensePlate.Delete.Params,
    options?: JUHUU.LicensePlate.Delete.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.LicensePlate.Delete.Response>> {
    return await super.sendRequest<JUHUU.LicensePlate.Delete.Response>(
      {
        method: "DELETE",
        url: "licensePlates/" + params.licensePlateId,
        authenticationNotOptional: true,
        body: undefined,
      },
      options
    );
  }
}