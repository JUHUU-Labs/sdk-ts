import { JUHUU } from "..";
import Service from "../index.service";

export default class TariffsService extends Service {
  constructor(config: JUHUU.SetupConfig) {
    super(config);
  }

  async create(
    TariffCreateParams: JUHUU.Tariff.Create.Params,
    TariffCreateOptions?: JUHUU.Tariff.Create.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Tariff.Create.Response>> {
    return await super.sendRequest<JUHUU.Tariff.Create.Response>(
      {
        method: "POST",
        url: "tariffs",
        body: {
          propertyId: TariffCreateParams.propertyId,
          duration: TariffCreateParams.duration,
          currencyCode: TariffCreateParams.currencyCode,
          amount: TariffCreateParams.amount,
          continue: TariffCreateParams.continue,
          name: TariffCreateParams.name,
        },
        authenticationNotOptional: true,
      },
      TariffCreateOptions
    );
  }

  async retrieve(
    TariffRetrieveParams: JUHUU.Tariff.Retrieve.Params,
    TariffRetrieveOptions?: JUHUU.Tariff.Retrieve.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Tariff.Retrieve.Response>> {
    const queryArray: string[] = [];

    if (TariffRetrieveOptions?.expand !== undefined) {
      queryArray.push("expand=" + TariffRetrieveOptions.expand.join(","));
    }

    return await super.sendRequest<JUHUU.Tariff.Retrieve.Response>(
      {
        method: "GET",
        url:
          "tariffs/" +
          TariffRetrieveParams.tariffId +
          "?" +
          queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: false,
      },
      TariffRetrieveOptions
    );
  }

  async list(
    TariffListParams: JUHUU.Tariff.List.Params,
    TariffListOptions?: JUHUU.Tariff.List.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Tariff.List.Response>> {
    const queryArray: string[] = [];

    if (TariffListParams?.propertyId !== undefined) {
      queryArray.push("propertyId=" + TariffListParams.propertyId);
    }

    return await super.sendRequest<JUHUU.Tariff.List.Response>(
      {
        method: "GET",
        url: "tariffs?" + queryArray.join("&"),
        body: undefined,
        authenticationNotOptional: false,
      },
      TariffListOptions
    );
  }

  async update(
    TariffUpdateParams: JUHUU.Tariff.Update.Params,
    TariffUpdateOptions?: JUHUU.Tariff.Update.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Tariff.Update.Response>> {
    return await super.sendRequest<JUHUU.Tariff.Update.Response>(
      {
        method: "PATCH",
        url: "tariffs/" + TariffUpdateParams.tariffId,
        body: {
          reminderEnabled: TariffUpdateParams.reminderEnabled,
          reminderPercentage: TariffUpdateParams.reminderPercentage,
          currencyCode: TariffUpdateParams.currencyCode,
          amount: TariffUpdateParams.amount,
          continue: TariffUpdateParams.continue,
          interval: TariffUpdateParams.interval,
          duration: TariffUpdateParams.duration,
          name: TariffUpdateParams.name,
          autoRenewMode: TariffUpdateParams.autoRenewMode,
          roundToMidnight: TariffUpdateParams.roundToMidnight,
          autoRenewManualEnabled: TariffUpdateParams.autoRenewManualEnabled,
          manualTerminationEnabled: TariffUpdateParams.manualTerminationEnabled,
        },
        authenticationNotOptional: true,
      },
      TariffUpdateOptions
    );
  }

  /**
   * Checks if the tariff is free
   */
  isFree(tariff: JUHUU.Tariff.Object): boolean {
    if (
      tariff.amount.every((amount) => amount === 0) === true &&
      tariff.continue === 0
    ) {
      return true;
    }

    return false;
  }

  /**
   * Returns the amount of seconds the tariff needs to be active before the amount will not change anymore
   */
  getAmountFinalizationDuration(tariff: JUHUU.Tariff.Object): number {
    if (this.isFree(tariff) === true) {
      return 0;
    }

    if (tariff.interval === 0) {
      return 0;
    }

    if (tariff.continue === 0) {
      return tariff.interval * tariff.amount.length;
    } else {
      return tariff.duration;
    }
  }

  /**
   * Calculates the amount for a give rent time in seconds
   */
  calculateAmount(
    tariff: JUHUU.Tariff.Object,
    rentTimeSeconds: number
  ): number {
    if (this.isFree(tariff) === true) {
      return 0;
    }

    if (rentTimeSeconds > tariff.duration) {
      console.warn("rentTimeS is greater than duration");
      rentTimeSeconds = tariff.duration;
    }

    let sum = 0;

    if (tariff.interval === 0) {
      sum = tariff.amount[0];
    } else {
      const startedIntervals = Math.ceil(rentTimeSeconds / tariff.interval);

      for (let i = 0; i < startedIntervals; i += 1) {
        if (i < tariff.amount.length) {
          sum += tariff.amount[i];
        } else {
          sum += tariff.continue;
        }
      }
    }

    let serviceFee = Math.round((sum * tariff.serviceFeePercentage) / 100);

    if (serviceFee < tariff.serviceFeeMin) {
      serviceFee = tariff.serviceFeeMin;
    } else if (serviceFee > tariff.serviceFeeMax) {
      serviceFee = tariff.serviceFeeMax;
    }

    // console.log("serviceFee is", serviceFee);

    return sum + serviceFee;
  }

  calculateMaximumAmount(tariff: JUHUU.Tariff.Object): number {
    return this.calculateAmount(tariff, tariff.duration);
  }

  /**
   * Returns a date object containing the timestamp that a session would have to end at if it was created right now
   */
  getEndDate(tariff: JUHUU.Tariff.Object): Date {
    if (tariff.roundToMidnight === false) {
      return new Date(Date.now() + tariff.duration * 1000);
    }

    const end = new Date(Date.now() + tariff.duration * 1000);

    end.setHours(23, 59, 59, 999);

    return end;
  }

  async delete(
    TariffDeleteParams: JUHUU.Tariff.Delete.Params,
    TariffDeleteOptions?: JUHUU.Tariff.Delete.Options
  ): Promise<JUHUU.HttpResponse<JUHUU.Tariff.Delete.Response>> {
    return await super.sendRequest<JUHUU.Tariff.Delete.Response>(
      {
        method: "DELETE",
        url: "tariffs/" + TariffDeleteParams.tariffId,
        authenticationNotOptional: true,
        body: undefined,
      },
      TariffDeleteOptions
    );
  }
}
