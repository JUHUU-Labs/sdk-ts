import { JUHUU } from "..";
import Service from "../index.service";

export default class IncidentTemplatesService extends Service {
  constructor(config: JUHUU.SetupConfig) {
    super(config);
  }

  async create(
    IncidentTemplateCreateParams: JUHUU.IncidentTemplate.Create.Params,
    IncidentTemplateCreateOptions?: JUHUU.IncidentTemplate.Create.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.IncidentTemplate.Create.Response>> {
    return await super.sendRequest<JUHUU.IncidentTemplate.Create.Response>(
      {
        method: "POST",
        url: "incidentTemplates",
        body: {
          propertyId: IncidentTemplateCreateParams.propertyId,
        },
        authenticationNotOptional: true,
      },
      IncidentTemplateCreateOptions
    );
  }

  async list(
    IncidentTemplateListParams: JUHUU.IncidentTemplate.List.Params,
    IncidentTemplateListOptions?: JUHUU.IncidentTemplate.List.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.IncidentTemplate.List.Response>> {
    const queryArray: string[] = [];

    if (IncidentTemplateListParams?.propertyId !== undefined) {
      queryArray.push("propertyId=" + IncidentTemplateListParams.propertyId);
    }

    if (IncidentTemplateListOptions?.skip !== undefined) {
      queryArray.push("skip=" + IncidentTemplateListOptions.skip);
    }

    if (IncidentTemplateListOptions?.limit !== undefined) {
      queryArray.push("limit=" + IncidentTemplateListOptions.limit);
    }

    return await super.sendRequest<JUHUU.IncidentTemplate.List.Response>(
      {
        method: "GET",
        url: "incidentTemplates?" + queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: false,
      },
      IncidentTemplateListOptions
    );
  }

  async retrieve(
    IncidentTemplateRetrieveParams: JUHUU.IncidentTemplate.Retrieve.Params,
    IncidentTemplateRetrieveOptions?: JUHUU.IncidentTemplate.Retrieve.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.IncidentTemplate.Retrieve.Response>> {
    const queryArray: string[] = [];

    if (IncidentTemplateRetrieveOptions?.expand !== undefined) {
      queryArray.push(
        "expand=" + IncidentTemplateRetrieveOptions.expand.join(",")
      );
    }

    return await super.sendRequest<JUHUU.IncidentTemplate.Retrieve.Response>(
      {
        method: "GET",
        url:
          "incidentTemplates/" +
          IncidentTemplateRetrieveParams.incidentTemplateId +
          "?" +
          queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: false,
      },
      IncidentTemplateRetrieveOptions
    );
  }

  async update(
    IncidentTemplateUpdateParams: JUHUU.IncidentTemplate.Update.Params,
    IncidentTemplateUpdateOptions?: JUHUU.IncidentTemplate.Update.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.IncidentTemplate.Update.Response>> {
    return await super.sendRequest<JUHUU.IncidentTemplate.Update.Response>(
      {
        method: "PATCH",
        url:
          "incidentTemplates/" +
          IncidentTemplateUpdateParams.incidentTemplateId,
        body: {
          title: IncidentTemplateUpdateParams.title,
          description: IncidentTemplateUpdateParams.description,
          name: IncidentTemplateUpdateParams.name,
        },
        authenticationNotOptional: true,
      },
      IncidentTemplateUpdateOptions
    );
  }

  async delete(
    IncidentTemplateDeleteParams: JUHUU.IncidentTemplate.Delete.Params,
    IncidentTemplateDeleteOptions?: JUHUU.IncidentTemplate.Delete.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.IncidentTemplate.Delete.Response>> {
    return await super.sendRequest<JUHUU.IncidentTemplate.Delete.Response>(
      {
        method: "DELETE",
        url:
          "incidentTemplates/" +
          IncidentTemplateDeleteParams.incidentTemplateId,
        authenticationNotOptional: true,
        body: undefined,
      },
      IncidentTemplateDeleteOptions
    );
  }
}
