import { JUHUU, LanguageCodeArray } from "..";
import Service from "../index.service";

export default class IncidentsService extends Service {
  constructor(config: JUHUU.SetupConfig) {
    super(config);
  }

  async create(
    IncidentCreateParams: JUHUU.Incident.Create.Params,
    IncidentCreateOptions?: JUHUU.Incident.Create.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Incident.Create.Response>> {
    return await super.sendRequest<JUHUU.Incident.Create.Response>(
      {
        method: "POST",
        url: "incidents",
        body: {
          propertyId: IncidentCreateParams.propertyId,
          title: IncidentCreateParams.title,
          description: IncidentCreateParams.description,
          type: IncidentCreateParams.type,
          deviceId: IncidentCreateParams.deviceId,
          locationId: IncidentCreateParams.locationId,
          parameterAnomalyGroupId: IncidentCreateParams.parameterAnomalyGroupId,
          simId: IncidentCreateParams.simId,
          incidentTemplateId: IncidentCreateParams.incidentTemplateId,
          severity: IncidentCreateParams.severity,
        },
        authenticationNotOptional: false,
      },
      IncidentCreateOptions
    );
  }

  async list(
    IncidentListParams: JUHUU.Incident.List.Params,
    IncidentListOptions?: JUHUU.Incident.List.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Incident.List.Response>> {
    const queryArray: string[] = [];

    if (IncidentListParams?.propertyId !== undefined) {
      queryArray.push("propertyId=" + IncidentListParams.propertyId);
    }

    if (IncidentListParams.statusArray !== undefined) {
      queryArray.push(
        "statusArray=" + IncidentListParams.statusArray.join(",")
      );
    }

    if (IncidentListOptions?.skip !== undefined) {
      queryArray.push("skip=" + IncidentListOptions.skip);
    }

    if (IncidentListOptions?.limit !== undefined) {
      queryArray.push("limit=" + IncidentListOptions.limit);
    }

    return await super.sendRequest<JUHUU.Incident.List.Response>(
      {
        method: "GET",
        url: "incidents?" + queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: false,
      },
      IncidentListOptions
    );
  }

  async retrieve(
    IncidentRetrieveParams: JUHUU.Incident.Retrieve.Params,
    IncidentRetrieveOptions?: JUHUU.Incident.Retrieve.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Incident.Retrieve.Response>> {
    const queryArray: string[] = [];

    if (IncidentRetrieveOptions?.expand !== undefined) {
      queryArray.push("expand=" + IncidentRetrieveOptions.expand.join(","));
    }

    return await super.sendRequest<JUHUU.Incident.Retrieve.Response>(
      {
        method: "GET",
        url:
          "incidents/" +
          IncidentRetrieveParams.incidentId +
          "?" +
          queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: false,
      },
      IncidentRetrieveOptions
    );
  }

  async update(
    IncidentUpdateParams: JUHUU.Incident.Update.Params,
    IncidentUpdateOptions?: JUHUU.Incident.Update.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Incident.Update.Response>> {
    return await super.sendRequest<JUHUU.Incident.Update.Response>(
      {
        method: "PATCH",
        url: "incidents/" + IncidentUpdateParams.incidentId,
        body: {
          title: IncidentUpdateParams.title,
          severity: IncidentUpdateParams.severity,
          status: IncidentUpdateParams.status,
        },
        authenticationNotOptional: true,
      },
      IncidentUpdateOptions
    );
  }

  async notifyAffected(
    IncidentNotifyAffectedParams: JUHUU.Incident.NotifyAffected.Params,
    IncidentNotifyAffectedOptions?: JUHUU.Incident.NotifyAffected.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Incident.NotifyAffected.Response>> {
    return await super.sendRequest<JUHUU.Incident.NotifyAffected.Response>(
      {
        method: "POST",
        url: "incidents/" + IncidentNotifyAffectedParams.incidentId + "/notifyAffected",
        body: {
          message: IncidentNotifyAffectedParams.message,
        },
        authenticationNotOptional: true,
      },
      IncidentNotifyAffectedOptions
    );
  }
}
