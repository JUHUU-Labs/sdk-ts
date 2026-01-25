import { JUHUU } from "..";
import Service from "../index.service";

export default class PointClustersService extends Service {
  constructor(config: JUHUU.SetupConfig) {
    super(config);
  }

  async create(
    PointClusterCreateParams: JUHUU.PointCluster.Create.Params,
    PointClusterCreateOptions?: JUHUU.PointCluster.Create.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.PointCluster.Create.Response>> {
    return await super.sendRequest<JUHUU.PointCluster.Create.Response>(
      {
        method: "POST",
        url: "pointClusters",
        body: {
          propertyId: PointClusterCreateParams.propertyId,
          name: PointClusterCreateParams.name,
          description: PointClusterCreateParams.description,
        },
        authenticationNotOptional: true,
      },
      PointClusterCreateOptions
    );
  }

  async list(
    PointClusterListParams: JUHUU.PointCluster.List.Params,
    PointClusterListOptions?: JUHUU.PointCluster.List.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.PointCluster.List.Response>> {
    const queryArray: string[] = [];

    if (PointClusterListParams?.propertyId !== undefined) {
      queryArray.push("propertyId=" + PointClusterListParams.propertyId);
    }

    return await super.sendRequest<JUHUU.PointCluster.List.Response>(
      {
        method: "GET",
        url: "pointClusters?" + queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: false,
      },
      PointClusterListOptions
    );
  }

  async retrieve(
    PointClusterRetrieveParams: JUHUU.PointCluster.Retrieve.Params,
    PointClusterRetrieveOptions?: JUHUU.PointCluster.Retrieve.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.PointCluster.Retrieve.Response>> {
    const queryArray: string[] = [];

    if (PointClusterRetrieveOptions?.expand !== undefined) {
      queryArray.push(
        "expand=" + PointClusterRetrieveOptions.expand.join(",")
      );
    }

    return await super.sendRequest<JUHUU.PointCluster.Retrieve.Response>(
      {
        method: "GET",
        url:
          "pointClusters/" +
          PointClusterRetrieveParams.pointClusterId +
          "?" +
          queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: false,
      },
      PointClusterRetrieveOptions
    );
  }

  async update(
    PointClusterUpdateParams: JUHUU.PointCluster.Update.Params,
    PointClusterUpdateOptions?: JUHUU.PointCluster.Update.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.PointCluster.Update.Response>> {
    return await super.sendRequest<JUHUU.PointCluster.Update.Response>(
      {
        method: "PATCH",
        url: "pointClusters/" + PointClusterUpdateParams.pointClusterId,
        body: {
          name: PointClusterUpdateParams.name,
          description: PointClusterUpdateParams.description,
        },
        authenticationNotOptional: true,
      },
      PointClusterUpdateOptions
    );
  }

  async delete(
    PointClusterDeleteParams: JUHUU.PointCluster.Delete.Params,
    PointClusterDeleteOptions?: JUHUU.PointCluster.Delete.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.PointCluster.Delete.Response>> {
    return await super.sendRequest<JUHUU.PointCluster.Delete.Response>(
      {
        method: "DELETE",
        url: "pointClusters/" + PointClusterDeleteParams.pointClusterId,
        authenticationNotOptional: true,
        body: undefined,
      },
      PointClusterDeleteOptions
    );
  }
}
