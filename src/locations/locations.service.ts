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
      const rentableDeviceGroupLocationId =
        LocationListParams.rentableDeviceGroupLocationId === null
          ? "null"
          : LocationListParams.rentableDeviceGroupLocationId;

      queryArray.push(
        "rentableDeviceGroupLocationId=" + rentableDeviceGroupLocationId
      );
    }

    if (LocationListParams?.propertyId !== undefined) {
      queryArray.push("propertyId=" + LocationListParams.propertyId);
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

  async update(
    LocationUpdateParams: JUHUU.Location.Update.Params,
    LocationUpdateOptions?: JUHUU.Location.Update.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Location.Update.Response>> {
    return await super.sendRequest<JUHUU.Location.Update.Response>(
      {
        method: "PATCH",
        url: "locations/" + LocationUpdateParams.locationId,
        body: {
          name: LocationUpdateParams.name,
          address: LocationUpdateParams.address,
          deviceIdArray: LocationUpdateParams.deviceIdArray,
          deviceId: LocationUpdateParams.deviceId,
          maximumConcurrentSessions:
            LocationUpdateParams.maximumConcurrentSessions,
          surveyEnabled: LocationUpdateParams.surveyEnabled,
          accountingAreaId: LocationUpdateParams.accountingAreaId,
          logoLight: LocationUpdateParams.logoLight,
          logoDark: LocationUpdateParams.logoDark,
          location: LocationUpdateParams.location,
          purposeArray: LocationUpdateParams.purposeArray,
          circumstanceArray: LocationUpdateParams.circumstanceArray,
          rentOfferArray: LocationUpdateParams.rentOfferArray,
          reservationOfferArray: LocationUpdateParams.reservationOfferArray,
          iconLight: LocationUpdateParams.iconLight,
          iconDark: LocationUpdateParams.iconDark,
        },
        useAuthentication: true,
      },
      LocationUpdateOptions
    );
  }
}
