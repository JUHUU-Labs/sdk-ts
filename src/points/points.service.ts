import { JUHUU } from "..";
import Service from "../index.service";

export default class PointsService extends Service {
  constructor(config: JUHUU.SetupConfig) {
    super(config);
  }

  async map(
    PointListParams: JUHUU.Point.Map.Params,
    PointListOptions?: JUHUU.Point.Map.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Point.Map.Response>> {
    const queryArray: string[] = [
      "modalityArray=" + PointListParams.modalityArray.join(","),
      "categoryArray=" + PointListParams.categoryArray.join(","),
      "sectorArray=" + PointListParams.sectorArray.join(","),
      "longitudeTopLeft=" + PointListParams.longitudeTopLeft,
      "latitudeTopLeft=" + PointListParams.latitudeTopLeft,
      "longitudeBottomRight=" + PointListParams.longitudeBottomRight,
      "latitudeBottomRight=" + PointListParams.latitudeBottomRight,
    ];

    return await super.sendRequest<JUHUU.Point.Map.Response>(
      {
        method: "GET",
        url: "points/map?" + queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: false,
      },
      PointListOptions
    );
  }

  async list(
    PointListParams: JUHUU.Point.List.Params,
    PointListOptions?: JUHUU.Point.List.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Point.List.Response>> {
    const queryArray: string[] = [];

    if (PointListParams?.propertyId !== undefined) {
      queryArray.push("propertyId=" + PointListParams.propertyId);
    }

    return await super.sendRequest<JUHUU.Point.List.Response>(
      {
        method: "GET",
        url: "points?" + queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: false,
      },
      PointListOptions
    );
  }

  private toRadians(degrees: number) {
    return (degrees * Math.PI) / 180;
  }

  calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
    var R = 6371e3; // Earth's radius in metres
    var φ1 = this.toRadians(lat1);
    var φ2 = this.toRadians(lat2);
    var Δφ = this.toRadians(lat2 - lat1);
    var Δλ = this.toRadians(lon2 - lon1);

    var a =
      Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
  }

  calculateAltitudeForTopDownView(
    topLeftLat: number,
    topLeftLon: number,
    bottomRightLat: number,
    bottomRightLon: number
  ) {
    // Calculate the diagonal distance across the viewport
    var diagonalDistance = this.calculateDistance(
      topLeftLat,
      topLeftLon,
      bottomRightLat,
      bottomRightLon
    );
    // For a top-down view, the altitude can be approximated as half the diagonal distance
    // This is a simplification and might need adjustment based on the actual map projection and scale
    const diagonalDistanceHalf = Math.round(diagonalDistance / 2);

    if (diagonalDistanceHalf < 0) {
      return 0;
    }

    if (diagonalDistanceHalf > 1000000) {
      return 1000000;
    }

    return diagonalDistanceHalf;
  }
}
