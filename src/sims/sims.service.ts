import { JUHUU } from "..";
import Service from "../index.service";

export default class SimsService extends Service {
  constructor(config: JUHUU.SetupConfig) {
    super(config);
  }

  async create() {}

  async retrieve(
    SimRetrieveParams: JUHUU.Sim.Retrieve.Params,
    SimRetrieveOptions?: JUHUU.Sim.Retrieve.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Sim.Retrieve.Response>> {
    return await super.sendRequest<JUHUU.Sim.Retrieve.Response>(
      {
        method: "GET",
        url: "sims/" + SimRetrieveParams.simId,
        body: undefined,
        useAuthentication: false,
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
        useAuthentication: false,
      },
      SimListOptions
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
        useAuthentication: false,
      },
      SimUpdateFromProviderOptions
    );
  }
}
