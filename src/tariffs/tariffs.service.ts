import { JUHUU } from "..";
import Service from "../index.service";

export default class TariffsService extends Service {
  constructor(config: JUHUU.SetupConfig) {
    super(config);
  }

  async create() {}

  // async retrieve(
  //     TariffRetrieveParams: JUHUU.Tariff.Retrieve.Params,
  //     TariffRetrieveOptions?: JUHUU.Tariff.Retrieve.Options,
  // ): Promise<JUHUU.HttpResponse<JUHUU.Tariff.Retrieve.Response>> {
  //     const queryArray: string[] = [];

  //     return await super.sendRequest<JUHUU.Tariff.Retrieve.Response>({
  //         method: "GET",
  //         url:
  //             "tariffs/" +
  //             TariffRetrieveParams.propertyId +
  //             "?" +
  //             queryArray.join("&"),
  //         body: undefined,
  //         useAuthentication: false,
  //     });
  // }

  // async list(
  //     TariffListParams: JUHUU.Tariff.List.Params,
  //     TariffListOptions?: JUHUU.Tariff.List.Options,
  // ): Promise<JUHUU.HttpResponse<JUHUU.Tariff.List.Response>> {
  //     const queryArray: string[] = [];

  //     return await super.sendRequest<JUHUU.Tariff.List.Response>(
  //         {
  //             method: "GET",
  //             url: "tariffs?" + queryArray.join("&"),
  //             body: undefined,
  //             useAuthentication: false,
  //         },
  //         TariffListOptions,
  //     );
  // }

  async update() {}

  async delete() {}

  async terminate() {}

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

    if (tariff.interval === 0) {
      return tariff.amount[0];
    }

    if (rentTimeSeconds > tariff.duration) {
      console.warn("rentTimeS is greater than duration");
      rentTimeSeconds = tariff.duration;
    }

    let sum = 0;

    const startedIntervals = Math.ceil(rentTimeSeconds / tariff.interval);

    for (let i = 0; i < startedIntervals; i += 1) {
      if (i < tariff.amount.length) {
        sum += tariff.amount[i];
      } else {
        sum += tariff.continue;
      }
    }

    let serviceFee = (sum * tariff.serviceFeePercentage) / 100;

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
}
