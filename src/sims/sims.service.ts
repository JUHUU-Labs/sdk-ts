import { JUHUU } from "..";
import Service from "../index.service";

export default class SimsService extends Service {
  constructor(config: JUHUU.SetupConfig) {
    super(config);
  }

  async create(
    SimCreateParams: JUHUU.Sim.Create.Params,
    SimCreateOptions?: JUHUU.Sim.Create.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Sim.Create.Response>> {
    return await super.sendRequest<JUHUU.Sim.Create.Response>(
      {
        method: "POST",
        url: "sims",
        body: {
          propertyId: SimCreateParams.propertyId,
          iccid: SimCreateParams.iccid,
          name: SimCreateParams.name,
        },
        authenticationNotOptional: true,
      },
      SimCreateOptions
    );
  }

  async retrieve(
    SimRetrieveParams: JUHUU.Sim.Retrieve.Params,
    SimRetrieveOptions?: JUHUU.Sim.Retrieve.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Sim.Retrieve.Response>> {
    return await super.sendRequest<JUHUU.Sim.Retrieve.Response>(
      {
        method: "GET",
        url: "sims/" + SimRetrieveParams.simId,
        body: undefined,
        authenticationNotOptional: false,
      },
      SimRetrieveOptions
    );
  }

  async list(
    SimListParams: JUHUU.Sim.List.Params,
    SimListOptions?: JUHUU.Sim.List.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Sim.List.Response>> {
    const queryArray: string[] = [];

    if (SimListParams?.propertyId !== undefined) {
      queryArray.push("propertyId=" + SimListParams.propertyId);
    }

    return await super.sendRequest<JUHUU.Sim.List.Response>(
      {
        method: "GET",
        url: "sims?" + queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: false,
      },
      SimListOptions
    );
  }

  async update(
    SimUpdateParams: JUHUU.Sim.Update.Params,
    SimUpdateOptions?: JUHUU.Sim.Update.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Sim.Update.Response>> {
    return await super.sendRequest<JUHUU.Sim.Update.Response>(
      {
        method: "PATCH",
        url: "sims/" + SimUpdateParams.simId,
        body: {
          name: SimUpdateParams.name,
          description: SimUpdateParams.description,
          dataQuotaThresholdPercentage:
            SimUpdateParams.dataQuotaThresholdPercentage,
        },
        authenticationNotOptional: true,
      },
      SimUpdateOptions
    );
  }

  async updateFromProvider(
    SimUpdateFromProviderParams: JUHUU.Sim.UpdateFromProvider.Params,
    SimUpdateFromProviderOptions?: JUHUU.Sim.UpdateFromProvider.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Sim.UpdateFromProvider.Response>> {
    return await super.sendRequest<JUHUU.Sim.UpdateFromProvider.Response>(
      {
        method: "PATCH",
        url:
          "sims/" + SimUpdateFromProviderParams.simId + "/updateFromProvider",
        body: undefined,
        authenticationNotOptional: false,
      },
      SimUpdateFromProviderOptions
    );
  }

  async delete(
    SimDeleteParams: JUHUU.Sim.Delete.Params,
    SimDeleteOptions?: JUHUU.Sim.Delete.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Sim.Delete.Response>> {
    return await super.sendRequest<JUHUU.Sim.Delete.Response>(
      {
        method: "DELETE",
        url: "sims/" + SimDeleteParams.simId,
        authenticationNotOptional: true,
        body: undefined,
      },
      SimDeleteOptions
    );
  }
}
