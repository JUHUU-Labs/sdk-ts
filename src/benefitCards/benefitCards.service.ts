import { JUHUU } from "..";
import Service from "../index.service";

export default class BenefitCardsService extends Service {
  constructor(config: JUHUU.SetupConfig) {
    super(config);
  }

  async create(
    params: JUHUU.BenefitCard.Create.Params,
    options?: JUHUU.BenefitCard.Create.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.BenefitCard.Create.Response>> {
    return await super.sendRequest<JUHUU.BenefitCard.Create.Response>(
      {
        method: "POST",
        url: "benefitCards",
        body: {
          propertyId: params.propertyId,
          name: params.name,
          imageLight: params.imageLight,
          imageDark: params.imageDark,
          userId: params.userId,
          reference: params.reference,
          text: params.text,
          metadata: params.metadata,
        },
        authenticationNotOptional: true,
      },
      options
    );
  }

  async list(
    params: JUHUU.BenefitCard.List.Params,
    options?: JUHUU.BenefitCard.List.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.BenefitCard.List.Response>> {
    const queryArray: string[] = [];

    if (params?.propertyId !== undefined) {
      queryArray.push("propertyId=" + params.propertyId);
    }

    if (params?.userId !== undefined) {
      queryArray.push("userId=" + params.userId);
    }

    if (options?.limit !== undefined) {
      queryArray.push("limit=" + options.limit);
    }

    if (options?.skip !== undefined) {
      queryArray.push("skip=" + options.skip);
    }

    return await super.sendRequest<JUHUU.BenefitCard.List.Response>(
      {
        method: "GET",
        url: "benefitCards?" + queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: true,
      },
      options
    );
  }

  async retrieve(
    params: JUHUU.BenefitCard.Retrieve.Params,
    options?: JUHUU.BenefitCard.Retrieve.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.BenefitCard.Retrieve.Response>> {
    return await super.sendRequest<JUHUU.BenefitCard.Retrieve.Response>(
      {
        method: "GET",
        url: "benefitCards/" + params.benefitCardId,
        body: undefined,
        authenticationNotOptional: true,
      },
      options
    );
  }

  async update(
    params: JUHUU.BenefitCard.Update.Params,
    options?: JUHUU.BenefitCard.Update.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.BenefitCard.Update.Response>> {
    return await super.sendRequest<JUHUU.BenefitCard.Update.Response>(
      {
        method: "PATCH",
        url: "benefitCards/" + params.benefitCardId,
        body: {
          name: params.name,
          imageLight: params.imageLight,
          imageDark: params.imageDark,
          userId: params.userId,
          reference: params.reference,
          text: params.text,
          metadata: params.metadata,
        },
        authenticationNotOptional: true,
      },
      options
    );
  }

  async delete(
    params: JUHUU.BenefitCard.Delete.Params,
    options?: JUHUU.BenefitCard.Delete.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.BenefitCard.Delete.Response>> {
    return await super.sendRequest<JUHUU.BenefitCard.Delete.Response>(
      {
        method: "DELETE",
        url: "benefitCards/" + params.benefitCardId,
        authenticationNotOptional: true,
        body: undefined,
      },
      options
    );
  }

  async copy(
    params: JUHUU.BenefitCard.Copy.Params,
    options?: JUHUU.BenefitCard.Copy.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.BenefitCard.Copy.Response>> {
    return await super.sendRequest<JUHUU.BenefitCard.Copy.Response>(
      {
        method: "POST",
        url: "benefitCards/" + params.benefitCardId + "/copy",
        authenticationNotOptional: true,
        body: undefined,
      },
      options
    );
  }
}