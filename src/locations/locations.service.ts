import { JUHUU } from "..";
import Service from "../index.service";

export default class LocationsService extends Service {
  constructor(config: JUHUU.SetupConfig) {
    super(config);
  }

  async retrieve(
    LocationRetrieveParams: JUHUU.Location.Retrieve.Params,
    LocationRetrieveOptions?: JUHUU.Location.Retrieve.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Location.Retrieve.Response>> {
    const queryArray: string[] = [];

    if (LocationRetrieveOptions?.expand !== undefined) {
      queryArray.push("expand=" + LocationRetrieveOptions.expand.join(","));
    }

    return await super.sendRequest<JUHUU.Location.Retrieve.Response>(
      {
        method: "GET",
        url:
          "locations/" +
          LocationRetrieveParams.locationId +
          "?" +
          queryArray.join("&"),
        body: undefined,
        useAuthentication: false,
      },
      LocationRetrieveOptions
    );
  }

  async list(
    LocationListParams: JUHUU.Location.List.Params,
    LocationListOptions?: JUHUU.Location.List.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Location.List.Response>> {
    const queryArray: string[] = [];

    if (LocationListParams?.rentableDeviceGroupLocationId !== undefined) {
      queryArray.push(
        "rentableDeviceGroupLocationId=" +
          LocationListParams.rentableDeviceGroupLocationId
      );
    }

    return await super.sendRequest<JUHUU.Location.List.Response>(
      {
        method: "GET",
        url: "locations?" + queryArray.join("&"),
        body: undefined,
        useAuthentication: false,
      },
      LocationListOptions
    );
  }
}
