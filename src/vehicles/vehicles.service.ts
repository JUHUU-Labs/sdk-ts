import { JUHUU } from "..";
import Service from "../index.service";

export default class VehiclesService extends Service {
  constructor(config: JUHUU.SetupConfig) {
    super(config);
  }

  async create(
    params: JUHUU.Vehicle.Create.Params,
    options?: JUHUU.Vehicle.Create.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Vehicle.Create.Response>> {
    return await super.sendRequest<JUHUU.Vehicle.Create.Response>(
      {
        method: "POST",
        url: "vehicles",
        body: {
          userId: params.userId,
          licensePlateNumber: params.licensePlateNumber,
          make: params.make,
          model: params.model,
          year: params.year,
          color: params.color,
          vin: params.vin,
          template: params.template,
        },
        authenticationNotOptional: true,
      },
      options
    );
  }

  async list(
    params: JUHUU.Vehicle.List.Params,
    options?: JUHUU.Vehicle.List.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Vehicle.List.Response>> {
    const queryArray: string[] = [];

    if (params?.userId !== undefined) {
      queryArray.push("userId=" + params.userId);
    }

    if (params?.licensePlateNumber !== undefined) {
      queryArray.push("licensePlateNumber=" + params.licensePlateNumber);
    }

    if (params?.make !== undefined) {
      queryArray.push("make=" + params.make);
    }

    if (params?.model !== undefined) {
      queryArray.push("model=" + params.model);
    }

    if (options?.limit !== undefined) {
      queryArray.push("limit=" + options.limit);
    }

    if (options?.skip !== undefined) {
      queryArray.push("skip=" + options.skip);
    }

    return await super.sendRequest<JUHUU.Vehicle.List.Response>(
      {
        method: "GET",
        url: "vehicles?" + queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: false,
      },
      options
    );
  }

  async retrieve(
    params: JUHUU.Vehicle.Retrieve.Params,
    options?: JUHUU.Vehicle.Retrieve.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Vehicle.Retrieve.Response>> {
    const queryArray: string[] = [];

    return await super.sendRequest<JUHUU.Vehicle.Retrieve.Response>(
      {
        method: "GET",
        url: "vehicles/" + params.vehicleId + "?" + queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: false,
      },
      options
    );
  }

  async update(
    params: JUHUU.Vehicle.Update.Params,
    options?: JUHUU.Vehicle.Update.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Vehicle.Update.Response>> {
    return await super.sendRequest<JUHUU.Vehicle.Update.Response>(
      {
        method: "PATCH",
        url: "vehicles/" + params.vehicleId,
        body: {
          userId: params.userId,
          licensePlateNumber: params.licensePlateNumber,
          make: params.make,
          model: params.model,
          year: params.year,
          color: params.color,
          vin: params.vin,
        },
        authenticationNotOptional: true,
      },
      options
    );
  }

  async delete(
    params: JUHUU.Vehicle.Delete.Params,
    options?: JUHUU.Vehicle.Delete.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Vehicle.Delete.Response>> {
    return await super.sendRequest<JUHUU.Vehicle.Delete.Response>(
      {
        method: "DELETE",
        url: "vehicles/" + params.vehicleId,
        authenticationNotOptional: true,
        body: undefined,
      },
      options
    );
  }
}
