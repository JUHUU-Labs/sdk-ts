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
          userId: params.userId,
          cardNumber: params.cardNumber,
          cardHolderName: params.cardHolderName,
          type: params.type,
          status: params.status,
          benefits: params.benefits,
          limits: params.limits,
          metadata: params.metadata,
          pointsBalance: params.pointsBalance,
          cashbackBalance: params.cashbackBalance,
          totalSavings: params.totalSavings,
          totalSpent: params.totalSpent,
          transactionCount: params.transactionCount,
          expiresAt: params.expiresAt,
          isDigital: params.isDigital,
          isTransferable: params.isTransferable,
          requiresPin: params.requiresPin,
          pin: params.pin,
          qrCode: params.qrCode,
          barcode: params.barcode,
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

    if (params?.userId !== undefined) {
      queryArray.push("userId=" + params.userId);
    }

    if (params?.cardNumber !== undefined) {
      queryArray.push("cardNumber=" + params.cardNumber);
    }

    if (params?.cardHolderName !== undefined) {
      queryArray.push("cardHolderName=" + params.cardHolderName);
    }

    if (params?.type !== undefined) {
      queryArray.push("type=" + params.type);
    }

    if (params?.status !== undefined) {
      queryArray.push("status=" + params.status);
    }

    if (params?.issuer !== undefined) {
      queryArray.push("issuer=" + params.issuer);
    }

    if (params?.brand !== undefined) {
      queryArray.push("brand=" + params.brand);
    }

    if (params?.level !== undefined) {
      queryArray.push("level=" + params.level);
    }

    if (params?.isDigital !== undefined) {
      queryArray.push("isDigital=" + params.isDigital);
    }

    if (params?.isTransferable !== undefined) {
      queryArray.push("isTransferable=" + params.isTransferable);
    }

    if (params?.requiresPin !== undefined) {
      queryArray.push("requiresPin=" + params.requiresPin);
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
        authenticationNotOptional: false,
      },
      options
    );
  }

  async retrieve(
    params: JUHUU.BenefitCard.Retrieve.Params,
    options?: JUHUU.BenefitCard.Retrieve.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.BenefitCard.Retrieve.Response>> {
    const queryArray: string[] = [];

    return await super.sendRequest<JUHUU.BenefitCard.Retrieve.Response>(
      {
        method: "GET",
        url: "benefitCards/" + params.benefitCardId + "?" + queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: false,
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
          userId: params.userId,
          cardNumber: params.cardNumber,
          cardHolderName: params.cardHolderName,
          type: params.type,
          status: params.status,
          benefits: params.benefits,
          limits: params.limits,
          metadata: params.metadata,
          pointsBalance: params.pointsBalance,
          cashbackBalance: params.cashbackBalance,
          totalSavings: params.totalSavings,
          totalSpent: params.totalSpent,
          transactionCount: params.transactionCount,
          expiresAt: params.expiresAt,
          isDigital: params.isDigital,
          isTransferable: params.isTransferable,
          requiresPin: params.requiresPin,
          pin: params.pin,
          qrCode: params.qrCode,
          barcode: params.barcode,
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
}