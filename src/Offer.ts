import { JUHUU } from "./types";

export type OfferTime = {
  mon: {
    startMinutes: number; // minutes from midnight
    endMinutes: number; // minutes from midnight
  }[];
  tue: {
    startMinutes: number; // minutes from midnight
    endMinutes: number; // minutes from midnight
  }[];
  wed: {
    startMinutes: number; // minutes from midnight
    endMinutes: number; // minutes from midnight
  }[];
  thu: {
    startMinutes: number; // minutes from midnight
    endMinutes: number; // minutes from midnight
  }[];
  fri: {
    startMinutes: number; // minutes from midnight
    endMinutes: number; // minutes from midnight
  }[];
  sat: {
    startMinutes: number; // minutes from midnight
    endMinutes: number; // minutes from midnight
  }[];
  sun: {
    startMinutes: number; // minutes from midnight
    endMinutes: number; // minutes from midnight
  }[];
};

export type OfferDto = {
  tariffId: string;
  licenseId: string;
  offerTime: OfferTime;
};

export class Offer {
  tariffId: string;
  licenseId: string;
  offerTime: OfferTime;

  constructor(init: OfferDto) {
    this.tariffId = init.tariffId;
    this.licenseId = init.licenseId;
    this.offerTime = init.offerTime;
  }

  static fromJSON(data: any): Offer {
    return new Offer(data);
  }

  static filterOfferArray(
    offerArray: OfferDto[],
    licenseArray: JUHUU.License.Object[],
    timestamp: Date
  ): Offer[] {
    const offerInstanceArray = offerArray.map((offer) => Offer.fromJSON(offer));

    return offerInstanceArray.filter((offer) => {
      const offerInstance = Offer.fromJSON(offer);

      if (
        offerInstance.checkLicenseIdArray(licenseArray) === true &&
        offerInstance.checkOfferTime(timestamp) === true
      ) {
        return true;
      } else {
        return false;
      }
    });
  }

  checkLicenseIdArray(licenseArray: JUHUU.License.Object[]): boolean {
    return licenseArray.some((license) => {
      if (license.id === this.licenseId) {
        return true;
      }

      return false;
    });
  }

  checkOfferTime(timestamp: Date): boolean {
    const day = timestamp.getDay();
    const minutes = timestamp.getHours() * 60 + timestamp.getMinutes();

    const dayString = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"][day] as
      | "sun"
      | "mon"
      | "tue"
      | "wed"
      | "thu"
      | "fri"
      | "sat";

    const dayArray = this.offerTime[dayString];

    for (const time of dayArray) {
      if (time.startMinutes <= minutes && minutes < time.endMinutes) {
        return true;
      }
    }

    return false;
  }
}
