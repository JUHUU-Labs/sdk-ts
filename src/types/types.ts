export type Environment = "development" | "production" | "staging";

export type ProximityStrategy =
  | {
      type: "qr";
      flowId: string | null;
    }
  | {
      type: "link";
      linkId: string | null;
    }
  | {
      type: "location";
      radius: number | null;
    };

export type Platform = "ios" | "android" | "windows" | "macos" | "web";
export type DeviceStatus = "running" | "sleeping" | "shutdown"; // sleeping = running, but offline
export type PushToken = {
  platform: Platform;
  token: string;
};
export type ExtractType<T> = T extends { type: infer U } ? U : never;
export type UserGroup = "retailer" | "engineer" | "operator" | "user";
export type Frontend = "dashboard" | "app";
export type FlowExecutionEnvironment = "dashboard" | "app" | "backend";
export type ApiKeyStatus = "enabled" | "disabled";

export type FlowStatus = "error" | "ready";

export type License =
  | {
      type: "url";
      validUntil: Date | null; // if null, the license is valid forever
      licenseTemplateId: string;
    }
  | {
      type: "regex";
      validUntil: Date | null; // if null, the license is valid forever
      licenseTemplateId: string;
    }
  | {
      type: "card";
      validUntil: Date | null; // if null, the license is valid forever
      licenseTemplateId: string;
      cardId: string;
    }
  | {
      type: "automatic";
      validUntil: Date | null; // if null, the license is valid forever
      licenseTemplateId: string;
    };

export type ApiKeyScope = "device:parameter:update";

export type Capability =
  | {
      type: "predictiveMaintenance";
      stripePriceId: string | null;
      grantedAt: Date;
      requestedByUserId: string;
    }
  | {
      type: "userSupport";
      stripePriceId: string | null;
      grantedAt: Date;
      requestedByUserId: string;
    }
  | {
      type: "identityVerification";
      stripePriceId: string | null;
      grantedAt: Date;
      requestedByUserId: string;
    };

export interface Offer {
  tariffId: string;
  licenseTemplateIdArray?: string[];

  /**
   * Array of arrays of licenseTemplateIds
   * The first array is and "or" and the second array is an "and" condition.
   * Example: [["licenseTemplateId1", "licenseTemplateId2"], ["licenseTemplateId3", "licenseTemplateId4"]]
   * This would mean that the offer is only valid if the user has either (licenseTemplateId1 and licenseTemplateId2) or (licenseTemplateId3 and licenseTemplateId4)
   * If the user does not own a license the app will guide the user to acquire the necessary licenses in the order of the array.
   */
  licenseTemplateCascadeArray?: string[][];
  offerTime: OfferTime;

  flowId?: string | null;
}

export type DevicePermission = {
  type: "bluetooth";
};

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

export type Viewport = {
  longitudeTopLeft: number;
  latitudeTopLeft: number;
  longitudeBottomRight: number;
  latitudeBottomRight: number;
};

export type ViewportPolygon = [
  [number, number], // top left
  [number, number], // top right
  [number, number], // bottom right
  [number, number], // bottom left
  [number, number] // top left
];

export const LanguageCodeArray = [
  "en", // english
  "de", // german
  "fr", // french
  "nl", // dutch
  "it", // italian
  "cs", // czech
  "da", // danish
  "es", // spanish
  "et", // estonian
  "hr", // croatian
  "hu", // hungarian
  "no", // norwegian
  "pl", // polish
  "sv", // swedish
] as const;

export type LanguageCode = (typeof LanguageCodeArray)[number]; // https://en.wikipedia.org/wiki/IETF_language_tag

// ISO 3166-1 and ISO 3166-2 country codes
export const CountryCodeArray = [
  "DE", // germany
  "AT", // austria
  "CH", // switzerland
  "LI", // liechtenstein
  "IT", // italy
  "FR", // france
  "NL", // netherlands
  "BE", // belgium
  "LU", // luxembourg
  "DK", // denmark
  "SE", // sweden
  "NO", // norway
  "FI", // finland
  "IS", // iceland
  "GB", // great britain
  "IE", // ireland
  "ES", // spain
  "PT", // portugal
  "GR", // greece
  "PL", // poland
  "CZ", // czech republic
  "SK", // slovakia
  "HU", // hungary
  "SI", // slovenia
  "HR", // croatia
  "BA", // bosnia and herzegovina
  "RS", // serbia
  "US", // united states
  "CA", // canada
] as const;

export type CountryCode = (typeof CountryCodeArray)[number]; // https://en.wikipedia.org/wiki/ISO_3166-1 // https://en.wikipedia.org/wiki/ISO_3166-2

// ISO 4217 currency codes
export const CurrencyCodeArray = [
  "eur", // euro
  "usd", // united states
  "gbp", // great britain
  "nok", // norway
  "sek", // sweden
  "chf", // switzerland
  "dkk", // denmark
  "pln", // poland
  "czk", // czech republic
  "huf", // hungary
  "bam", // bosnia and herzegovina
  "rsd", // serbia
  "isk", // iceland
  "cad", // canada
] as const;

export type CurrencyCode = (typeof CurrencyCodeArray)[number]; // https://www.iso.org/iso-4217-currency-codes.html

export interface Settings {
  general: GeneralSettings;
  payouts: PayoutSettings;
  sessions: SessionSettings;
  environment: EnvironmentSettings;
}

export interface ColorScheme {
  light: Color;
  dark: Color;
}

export type hexColor = string;

export interface Color {
  background: hexColor;
  backgroundSecondary: hexColor;
  blackText: hexColor;
  grayText: hexColor;
  backgroundNavigation: hexColor;
  border: hexColor;
  primary: hexColor;
  primaryContrast: hexColor;
  disabledBackground: hexColor;
  disabled: hexColor;
  error: hexColor;
  warning: hexColor;
}

export interface GeneralSettings {
  termsVersion: number;
  globalKill: boolean;
  maintenance: boolean;
  maintenanceMessage: string;
}

export interface PayoutSettings {
  enabled: boolean;
}

export interface SessionSettings {
  enabled: boolean;
  autoRenewEnabled: boolean;
}

export interface EnvironmentSettings {}

export type PaymentMethod =
  | "card"
  | "stripe_account"
  | "klarna"
  | "bancontact"
  | "eps"
  | "giropay"
  | "ideal"
  | "p24"
  | "sofort"
  | "unknown";

export type PaymentReason = "session";
export type PaymentRefundReason =
  | "requestedByUser"
  | "expiredUncapturedCharge"
  | "fraudulent"
  | "duplicate"
  | "unknown";
export type SessionStatus = "waitingForPayment" | "ready" | "completed";
export type AutoRenewMode = "off" | "optIn" | "optOut" | "on";
export type RefundStatus = "inTransitToUser" | "succeeded";

export type SessionTerminatedByType =
  | "user"
  | "system"
  | "propertyAdmin"
  | "nodeArray";

// export type ServiceMonth =
//   | "jan"
//   | "feb"
//   | "mar"
//   | "apr"
//   | "may"
//   | "jun"
//   | "jul"
//   | "aug"
//   | "sep"
//   | "oct"
//   | "nov"
//   | "dec";

export type PermissionTypes =
  | "UserManagement"
  | "PropertyManagement"
  | "PayoutManagement"
  | "InvoiceManagement"
  | "TarifManagement"
  | "SessionManagement"
  | "PaymentManagement"
  | "LocationManagement"
  | "LinkManagement"
  | "TermsManagement"
  | "LicenseManagement";

export interface CustomClaims {
  UserManagement: boolean;
  PropertyManagement: boolean;
  PayoutManagement: boolean;
  InvoiceManagement: boolean;
  TarifManagement: boolean;
  SessionManagement: boolean;
  PaymentManagement: boolean;
  LocationManagement: boolean;
  LinkManagement: boolean;
  LicenseManagement: boolean;
  TermsManagement: boolean;
}

export interface Address {
  line1: string;
  line2: string | null;
  postalCode: string;
  country: CountryCode;
  city: string;
}

export interface LicenseTariffIdMap {
  tarifId: string;
  licenseId: string;
}

export interface PostingRow {
  description: string;
  quantity: number;
  unitPrice: number;
  unitPriceIsFlexible: boolean;
  total: number;
}

export interface Person {
  name: string;
  email: string;
  phone: string;
}

export interface Party extends Person {
  taxCodeArray: TaxCode[];
  address: Address;
  iban?: string;
  bic?: string;
}

export type TaxCode = {
  code: string; // e.g. "DE123456789",
  verified: boolean;
  type: "VAT" | "GST" | "CNPJ" | "ABN" | "TIN";
  countryCode: CountryCode;
};

export type VeloBrushDeviceDocumentUserManualStep =
  | "prepareBike1"
  | "prepareBike2"
  | "chooseCycleType"
  | "openDoors1"
  | "extendBikeDrawer1"
  | "unfoldRamp1"
  | "placeBike1"
  | "fixBike1"
  | "fixBike2"
  | "retractBikeDrawer1"
  | "closeDoors1"
  | "selectWashProgram"
  | "waitForWashProgram"
  | "openDoors2"
  | "extendBikeDrawer2"
  | "dryBike1"
  | "dryBike2"
  | "releaseBike"
  | "unloadBike"
  | "retractBikeDrawer2"
  | "closeDoors2"
  | "lockDoors"
  | "error"
  | "emergencyStop"
  | "waitingForSession";

export type PaymentStatus =
  | "waitingForConfirmation" // payment was created but neither confirmed nor captured
  | "waitingForAmountFinalization" // payment was confirmed for a certain amount but the actual (smaller) amount that will be charged later was not yet determined
  | "waitingForCapture" // payment was confirmed and a hold was put on the funds
  | "waitingForTransitConfirmation" // payment is processing and we are waiting for the PSP to confirm that the funds are on their way to us; with delayed payments this step might takes several days; with instant payments this step is not skipped, but much shorter
  | "inTransitToProvider" // we got the confirmation from the PSP that the funds are on their way to us
  | "captured" // the funds arrived at the payment service provider
  | "inTransitToProperty" // the funds are on their way to the property
  | "payedOut" // the funds arrived at the property
  | "cancelled"; // the payment was cancelled

export type PaymentRefundStatus =
  | "waitingForArrivalAtUser"
  | "waitingForPayout" // refund was successful and is now waiting to be included in the next payout
  | "inTransitToProperty" // the funds are on their way to the property
  | "payedOut" // the funds arrived at the property
  | "failed"; // if the paymentRefund failed, the funds are back in our stripe account

export type PaymentServiceProvider = "stripe";

export type PayoutStatus =
  | "waitingForApproval" // payout is waiting for its approval
  | "inTransitToProperty" // payout is on its way to the customer
  | "payedOut"; // payout is completed and payed out to the customer

export type BusinessType =
  | "individual"
  | "company"
  | "non_profit"
  | "government_entity";

export const ReadonlySectorArray = ["tourism", "mobility", "sport"] as const;

export type Sector = (typeof ReadonlySectorArray)[number];

export const ReadonlyCategoryArray = [
  "bike",
  "car",
  "scooter",
  "boat",
  "moped",
] as const;

export type Category = (typeof ReadonlyCategoryArray)[number];

export const ReadonlyModalityArray = [
  "charge",
  "store",
  "share",
  "wash",
  "repair",
] as const; // repair

export type Modality = (typeof ReadonlyModalityArray)[number];

export type Purpose = {
  sector: Sector;
  category: Category;
  modality: Modality;
};

export type GeoPoint = {
  type: "Point";
  coordinates: [number, number]; // Note that longitude comes first in a GeoJSON coordinate array, not latitude.
};

export type VisualPriority = "none" | "highlight" | "important";
export type PlatformString = {
  ios: string;
  android: string;
  web: string;
};

export interface MapFilter {
  categoryArray: Category[];
  modalityArray: Modality[];
  sectorArray: Sector[];
}

export type SessionType = "rent" | "reservation";

export type DeviceType =
  | "BikeBox"
  | "VeloCleanPro"
  | "SlidingDoor"
  | "BikeRack"
  | "BikeEnergy"
  | "BikeLoop"
  | "VeloBrush"
  | "SharingBike"
  | "Trb145BikeBox";

export type LinkType = "standard" | "group" | "url";

export type UserType = "management" | "standard";

export type TarifType = "reservation" | "payNow" | "payLater";

export type DeepNullable<T> = {
  [K in keyof T]: DeepNullable<T[K]> | null;
};

export type SessionCannotTerminateReason = "retractBikeDrawer" | "closeDoor";

export type Circumstance = {
  type: "custom";
  icon: string;
  title: LocaleString;
  description: LocaleString;
};

const TimeZoneArray = [
  "Europe/Andorra",
  "Asia/Dubai",
  "Asia/Kabul",
  "Europe/Tirane",
  "Asia/Yerevan",
  "Antarctica/Casey",
  "Antarctica/Davis",
  "Antarctica/DumontDUrville", // https://bugs.chromium.org/p/chromium/issues/detail?id=928068
  "Antarctica/Mawson",
  "Antarctica/Palmer",
  "Antarctica/Rothera",
  "Antarctica/Syowa",
  "Antarctica/Troll",
  "Antarctica/Vostok",
  "America/Argentina/Buenos_Aires",
  "America/Argentina/Cordoba",
  "America/Argentina/Salta",
  "America/Argentina/Jujuy",
  "America/Argentina/Tucuman",
  "America/Argentina/Catamarca",
  "America/Argentina/La_Rioja",
  "America/Argentina/San_Juan",
  "America/Argentina/Mendoza",
  "America/Argentina/San_Luis",
  "America/Argentina/Rio_Gallegos",
  "America/Argentina/Ushuaia",
  "Pacific/Pago_Pago",
  "Europe/Vienna",
  "Australia/Lord_Howe",
  "Antarctica/Macquarie",
  "Australia/Hobart",
  "Australia/Currie",
  "Australia/Melbourne",
  "Australia/Sydney",
  "Australia/Broken_Hill",
  "Australia/Brisbane",
  "Australia/Lindeman",
  "Australia/Adelaide",
  "Australia/Darwin",
  "Australia/Perth",
  "Australia/Eucla",
  "Asia/Baku",
  "America/Barbados",
  "Asia/Dhaka",
  "Europe/Brussels",
  "Europe/Sofia",
  "Atlantic/Bermuda",
  "Asia/Brunei",
  "America/La_Paz",
  "America/Noronha",
  "America/Belem",
  "America/Fortaleza",
  "America/Recife",
  "America/Araguaina",
  "America/Maceio",
  "America/Bahia",
  "America/Sao_Paulo",
  "America/Campo_Grande",
  "America/Cuiaba",
  "America/Santarem",
  "America/Porto_Velho",
  "America/Boa_Vista",
  "America/Manaus",
  "America/Eirunepe",
  "America/Rio_Branco",
  "America/Nassau",
  "Asia/Thimphu",
  "Europe/Minsk",
  "America/Belize",
  "America/St_Johns",
  "America/Halifax",
  "America/Glace_Bay",
  "America/Moncton",
  "America/Goose_Bay",
  "America/Blanc-Sablon",
  "America/Toronto",
  "America/Nipigon",
  "America/Thunder_Bay",
  "America/Iqaluit",
  "America/Pangnirtung",
  "America/Atikokan",
  "America/Winnipeg",
  "America/Rainy_River",
  "America/Resolute",
  "America/Rankin_Inlet",
  "America/Regina",
  "America/Swift_Current",
  "America/Edmonton",
  "America/Cambridge_Bay",
  "America/Yellowknife",
  "America/Inuvik",
  "America/Creston",
  "America/Dawson_Creek",
  "America/Fort_Nelson",
  "America/Vancouver",
  "America/Whitehorse",
  "America/Dawson",
  "Indian/Cocos",
  "Europe/Zurich",
  "Africa/Abidjan",
  "Pacific/Rarotonga",
  "America/Santiago",
  "America/Punta_Arenas",
  "Pacific/Easter",
  "Asia/Shanghai",
  "Asia/Urumqi",
  "America/Bogota",
  "America/Costa_Rica",
  "America/Havana",
  "Atlantic/Cape_Verde",
  "America/Curacao",
  "Indian/Christmas",
  "Asia/Nicosia",
  "Asia/Famagusta",
  "Europe/Prague",
  "Europe/Berlin",
  "Europe/Copenhagen",
  "America/Santo_Domingo",
  "Africa/Algiers",
  "America/Guayaquil",
  "Pacific/Galapagos",
  "Europe/Tallinn",
  "Africa/Cairo",
  "Africa/El_Aaiun",
  "Europe/Madrid",
  "Africa/Ceuta",
  "Atlantic/Canary",
  "Europe/Helsinki",
  "Pacific/Fiji",
  "Atlantic/Stanley",
  "Pacific/Chuuk",
  "Pacific/Pohnpei",
  "Pacific/Kosrae",
  "Atlantic/Faroe",
  "Europe/Paris",
  "Europe/London",
  "Asia/Tbilisi",
  "America/Cayenne",
  "Africa/Accra",
  "Europe/Gibraltar",
  "America/Godthab",
  "America/Danmarkshavn",
  "America/Scoresbysund",
  "America/Thule",
  "Europe/Athens",
  "Atlantic/South_Georgia",
  "America/Guatemala",
  "Pacific/Guam",
  "Africa/Bissau",
  "America/Guyana",
  "Asia/Hong_Kong",
  "America/Tegucigalpa",
  "America/Port-au-Prince",
  "Europe/Budapest",
  "Asia/Jakarta",
  "Asia/Pontianak",
  "Asia/Makassar",
  "Asia/Jayapura",
  "Europe/Dublin",
  "Asia/Jerusalem",
  "Asia/Kolkata",
  "Indian/Chagos",
  "Asia/Baghdad",
  "Asia/Tehran",
  "Atlantic/Reykjavik",
  "Europe/Rome",
  "America/Jamaica",
  "Asia/Amman",
  "Asia/Tokyo",
  "Africa/Nairobi",
  "Asia/Bishkek",
  "Pacific/Tarawa",
  "Pacific/Enderbury",
  "Pacific/Kiritimati",
  "Asia/Pyongyang",
  "Asia/Seoul",
  "Asia/Almaty",
  "Asia/Qyzylorda",
  "Asia/Qostanay", // https://bugs.chromium.org/p/chromium/issues/detail?id=928068
  "Asia/Aqtobe",
  "Asia/Aqtau",
  "Asia/Atyrau",
  "Asia/Oral",
  "Asia/Beirut",
  "Asia/Colombo",
  "Africa/Monrovia",
  "Europe/Vilnius",
  "Europe/Luxembourg",
  "Europe/Riga",
  "Africa/Tripoli",
  "Africa/Casablanca",
  "Europe/Monaco",
  "Europe/Chisinau",
  "Pacific/Majuro",
  "Pacific/Kwajalein",
  "Asia/Yangon",
  "Asia/Ulaanbaatar",
  "Asia/Hovd",
  "Asia/Choibalsan",
  "Asia/Macau",
  "America/Martinique",
  "Europe/Malta",
  "Indian/Mauritius",
  "Indian/Maldives",
  "America/Mexico_City",
  "America/Cancun",
  "America/Merida",
  "America/Monterrey",
  "America/Matamoros",
  "America/Mazatlan",
  "America/Chihuahua",
  "America/Ojinaga",
  "America/Hermosillo",
  "America/Tijuana",
  "America/Bahia_Banderas",
  "Asia/Kuala_Lumpur",
  "Asia/Kuching",
  "Africa/Maputo",
  "Africa/Windhoek",
  "Pacific/Noumea",
  "Pacific/Norfolk",
  "Africa/Lagos",
  "America/Managua",
  "Europe/Amsterdam",
  "Europe/Oslo",
  "Asia/Kathmandu",
  "Pacific/Nauru",
  "Pacific/Niue",
  "Pacific/Auckland",
  "Pacific/Chatham",
  "America/Panama",
  "America/Lima",
  "Pacific/Tahiti",
  "Pacific/Marquesas",
  "Pacific/Gambier",
  "Pacific/Port_Moresby",
  "Pacific/Bougainville",
  "Asia/Manila",
  "Asia/Karachi",
  "Europe/Warsaw",
  "America/Miquelon",
  "Pacific/Pitcairn",
  "America/Puerto_Rico",
  "Asia/Gaza",
  "Asia/Hebron",
  "Europe/Lisbon",
  "Atlantic/Madeira",
  "Atlantic/Azores",
  "Pacific/Palau",
  "America/Asuncion",
  "Asia/Qatar",
  "Indian/Reunion",
  "Europe/Bucharest",
  "Europe/Belgrade",
  "Europe/Kaliningrad",
  "Europe/Moscow",
  "Europe/Simferopol",
  "Europe/Kirov",
  "Europe/Astrakhan",
  "Europe/Volgograd",
  "Europe/Saratov",
  "Europe/Ulyanovsk",
  "Europe/Samara",
  "Asia/Yekaterinburg",
  "Asia/Omsk",
  "Asia/Novosibirsk",
  "Asia/Barnaul",
  "Asia/Tomsk",
  "Asia/Novokuznetsk",
  "Asia/Krasnoyarsk",
  "Asia/Irkutsk",
  "Asia/Chita",
  "Asia/Yakutsk",
  "Asia/Khandyga",
  "Asia/Vladivostok",
  "Asia/Ust-Nera",
  "Asia/Magadan",
  "Asia/Sakhalin",
  "Asia/Srednekolymsk",
  "Asia/Kamchatka",
  "Asia/Anadyr",
  "Asia/Riyadh",
  "Pacific/Guadalcanal",
  "Indian/Mahe",
  "Africa/Khartoum",
  "Europe/Stockholm",
  "Asia/Singapore",
  "America/Paramaribo",
  "Africa/Juba",
  "Africa/Sao_Tome",
  "America/El_Salvador",
  "Asia/Damascus",
  "America/Grand_Turk",
  "Africa/Ndjamena",
  "Indian/Kerguelen",
  "Asia/Bangkok",
  "Asia/Dushanbe",
  "Pacific/Fakaofo",
  "Asia/Dili",
  "Asia/Ashgabat",
  "Africa/Tunis",
  "Pacific/Tongatapu",
  "Europe/Istanbul",
  "America/Port_of_Spain",
  "Pacific/Funafuti",
  "Asia/Taipei",
  "Europe/Kiev",
  "Europe/Uzhgorod",
  "Europe/Zaporozhye",
  "Pacific/Wake",
  "America/New_York",
  "America/Detroit",
  "America/Kentucky/Louisville",
  "America/Kentucky/Monticello",
  "America/Indiana/Indianapolis",
  "America/Indiana/Vincennes",
  "America/Indiana/Winamac",
  "America/Indiana/Marengo",
  "America/Indiana/Petersburg",
  "America/Indiana/Vevay",
  "America/Chicago",
  "America/Indiana/Tell_City",
  "America/Indiana/Knox",
  "America/Menominee",
  "America/North_Dakota/Center",
  "America/North_Dakota/New_Salem",
  "America/North_Dakota/Beulah",
  "America/Denver",
  "America/Boise",
  "America/Phoenix",
  "America/Los_Angeles",
  "America/Anchorage",
  "America/Juneau",
  "America/Sitka",
  "America/Metlakatla",
  "America/Yakutat",
  "America/Nome",
  "America/Adak",
  "Pacific/Honolulu",
  "America/Montevideo",
  "Asia/Samarkand",
  "Asia/Tashkent",
  "America/Caracas",
  "Asia/Ho_Chi_Minh",
  "Pacific/Efate",
  "Pacific/Wallis",
  "Pacific/Apia",
  "Africa/Johannesburg",
] as const;

export type TimeZone = (typeof TimeZoneArray)[number];

export type StarRating = 1 | 2 | 3 | 4 | 5;

export type Unit =
  | "meter"
  | "centimeter"
  | "millimeter"
  | "kilogram"
  | "gram"
  | "milligram"
  | "liter"
  | "milliliter"
  | "percent"
  | "volt"
  | "watt"
  | "ampere"
  | "joule"
  | "hertz"
  | "kelvin"
  | "celsius"
  | "fahrenheit"
  | "byte"
  | "bit"
  | "second"
  | "minute"
  | "hour"
  | "day"
  | "week"
  | "month"
  | "year";

export type AccessControlListElement = {
  topic: string;
  acc: number;
};

export type SimStatus = "online" | "offline" | "attached";

export namespace Layout {
  type Block = {
    visibleCondition: Condition | null; // if null the layoutblock is always visible
  };

  export type PreviewButton = {
    icon: string;
    title: LocaleString;
    buttonName: string;
    flowId: string | null | undefined;
  };

  export namespace Text {
    interface TextBlock extends Block {
      text: LocaleString;
    }

    export interface Plain extends TextBlock {
      type: "text.plain";
    }

    export interface Heading extends TextBlock {
      type: "text.heading";
    }

    export interface Subtitle extends TextBlock {
      type: "text.subtitle";
    }
  }

  export interface Image extends Block {
    type: "image";
    urlDark: string;
    urlLight: string;
    height: number;
  }

  export namespace Button {
    export interface General extends Block {
      text: LocaleString;
      buttonName: string;
      flowId: string | null | undefined;
    }

    export interface Small extends General {
      type: "button.small";
    }

    export interface Large extends General {
      type: "button.large";
    }
  }

  export namespace Form {
    interface FormBlock extends Block {}

    export interface General extends FormBlock {
      type: "form";
      columnArray: Array<Column.One>;
    }

    export type AnyColumn = Column.One | Column.Two;

    export namespace Column {
      interface FormColumn extends FormBlock {}

      export interface One extends FormColumn {
        type: "one";
        elementArray: Array<AnyElement>;
      }

      export interface Two extends FormColumn {
        type: "two";
        elementArray: Array<AnyElement>;
      }

      export type AnyElement = Element.Card | Element.Toggle;

      export namespace Element {
        interface FormElementBlock extends FormColumn {
          title: LocaleString;
          icon: string | null;
        }

        export interface Card extends FormElementBlock {
          type: "card";
          elementArray: Array<CardElement>;
          buttonName: string | null; // if null, card element is not clickable
          flowId: string | null | undefined;
        }

        export type CardElement = {
          type: "text.plain";
          text: LocaleString;
        };

        export interface Toggle extends FormElementBlock {
          type: "toggle";
          parameterId: string | null; // A toggle has to be linked to a parameter of type boolean, so that the user can change the value of the parameter. A flow can listen to the parameter update
        }
      }
    }
  }
}

export type LayoutBlock =
  | Layout.Text.Plain
  | Layout.Text.Heading
  | Layout.Text.Subtitle
  | Layout.Image
  | Layout.Button.Small
  | Layout.Button.Large
  | Layout.Form.General;

export type GraphNode =
  | {
      id: string;
      type: "flow.start";
      trigger: "session.terminate";
      nodeIdArray: string[];
    }
  | {
      id: string;
      type: "flow.start";
      trigger: "button.pressed";
      buttonName: string;
      nodeIdArray: string[];
    }
  | {
      id: string;
      type: "flow.start";
      trigger: "session.create";
      nodeIdArray: string[];
    }
  | {
      id: string;
      type: "flow.start";
      trigger: "device.startUse";
      nodeIdArray: string[];
    }
  | {
      id: string;
      type: "flow.start";
      trigger: "device.endUse";
      nodeIdArray: string[];
    }
  | {
      id: string;
      type: "open.browser";
      nodeIdArray: string[];
      url: PlatformString;
    }
  | {
      id: string;
      type: "open.phone";
      nodeIdArray: string[];
      phone: string;
    }
  | {
      id: string;
      /**
       * uses the deviceId of the current device and the userId of
       * the currently logged in user to fetch the configuration of
       * BoldLock and then uses the bold SDK to connect to the lock via
       * bluetooth and activate it
       */
      type: "device.boldLock.activate";
      nodeIdArray: string[];
    }
  | {
      id: string;

      /**
       * uses the deviceId of the current device, the userId of
       * the currently logged in user and the tapkey SDK to connect to the lock via
       * bluetooth and activate it
       * @deprecated
       */
      type: "device.tapkey.activate";
      nodeIdArray: string[];
    }
  | {
      id: string;

      /**
       * uses the deviceId of the current device, the userId of
       * the currently logged in user and the tapkey SDK to connect to the lock via
       * bluetooth and unlock it
       */
      type: "tapkey.unlock";
      nodeIdArray: string[];
    }
  | {
      id: string;

      /**
       * uses the deviceId of the current device to unlock the EMZ lock via bluetooth
       */
      type: "emz.unlock";
      nodeIdArray: string[];
    }
  | {
      id: string;
      type: "property.notify";
      nodeIdArray: string[];
      subject: LocaleString;
      message: LocaleString;
    }
  | {
      id: string;
      type: "user.notify";
      nodeIdArray: string[];
      subject: LocaleString;
      message: LocaleString;
    }
  | {
      id: string;
      nodeIdArray: string[];
      type: "app.alert.show";
      title: LocaleString;
      description: LocaleString;
    }
  | {
      id: string;
      nodeIdArray: string[];
      type: "app.navigation.navigate";
      screenName: string; // the name of the screen to navigate to
    }
  | {
      id: string;
      type: "parameter.set";
      nodeIdArray: string[];
      parameterName: string;
      value: number | string | boolean;
    }
  | {
      id: string;
      type: "flow.exception"; // stops the current process. E.g. if a session is about to be created and the device throws an exception, the session creation is stopped
      error: LocaleString;
    }
  | {
      id: string;
      type: "flow.if";
      condition: Condition;
      trueNodeIdArray: string[];
      falseNodeIdArray: string[];
    }
  | {
      id: string;
      type: "flow.end";
    };

export enum ConditionType {
  Equal = "==",
  NotEqual = "!=",
  LessThan = "<",
  GreaterThan = ">",
  LessThanOrEqual = "<=",
  GreaterThanOrEqual = ">=",
}

export type Utilization =
  | {
      type: "percentage";
      percentage: number; // 0 to 100 %
    }
  | {
      type: "occupancy";
      maximum: number;
      current: number;
    };

export type Condition = {
  jsonLogic: any;
};

export type Command =
  | {
      name: string;
      type: "number";
      value: number;
    }
  | {
      name: string;
      type: "string";
      value: string;
    }
  | {
      name: string;
      type: "boolean";
      value: boolean;
    }
  | {
      name: string;
      type: "enum";
      value: string;
      enumArray: string[];
    }
  | {
      type: "parameter";
      name: string;
      parameterName: string;
    };

export interface LocaleString {
  en?: string; // english is mandatory!
  de?: string;
  fr?: string;
  it?: string;
  nl?: string;
  es?: string;
  da?: string;
  hr?: string;
  hu?: string;
  no?: string;
  pl?: string;
  sv?: string;
  cs?: string;
  et?: string;
}

export type JsonLogic = Record<string, unknown>;

// Base for every block
export interface BaseBlock {
  id: string;
}

export interface StartCustomBlock extends BaseBlock {
  type: "start.custom";
  // it doesn’t take any upstream edges
  in: Record<string, never>;
  // one output edge per parameter name
  out: Record<string, DataEdgeConnection>;
  data: {
    // runtime metadata for each parameter
    inputParamDefinitionArray: ParamDefinition[];
  };
}

export interface StartQuickActionLocationBlock extends BaseBlock {
  type: "start.quickAction.location";
  in: Record<string, never>;
  out: {
    locationId: DataEdgeConnection;
    propertyId: DataEdgeConnection;
  };
}

export interface StartSessionUpdateBlock extends BaseBlock {
  type: "start.session.update";
  in: Record<string, never>;
  out: {
    before: DataEdgeConnection;
    after: DataEdgeConnection;
  };
}

export interface StartLocationUpdateBlock extends BaseBlock {
  type: "start.location.update";
  in: Record<string, never>;
  out: {
    before: DataEdgeConnection;
    after: DataEdgeConnection;
  };
}

export interface StartParameterUpdateBlock extends BaseBlock {
  type: "start.parameter.update";
  in: Record<string, never>;
  out: {
    beforeParameter: DataEdgeConnection;
    afterParameter: DataEdgeConnection;
  };
}

// parameter blocks
export interface ParameterRetrieveBlock extends BaseBlock {
  type: "parameter.retrieve";
  in: {
    parameterId: DataEdgeConnection;
    deviceId: DataEdgeConnection;
  };
  out: {
    parameter: DataEdgeConnection;
  };
  data: {
    parameterId?: string; // if omitted, the input parameterId will be used
    deviceId?: string; // if omitted, the input deviceId will be used
  };
}

export interface ParameterRetrieveBlockInputs {
  parameterId: string;
  deviceId: string | null;
}

export interface PropertyRetrieveBlock extends BaseBlock {
  type: "property.retrieve";
  in: {
    propertyId: DataEdgeConnection;
  };
  out: {
    property: DataEdgeConnection;
  };
  data: {
    propertyId?: string;
  };
}

export interface PropertyRetrieveBlockInputs {
  propertyId: string;
}

export interface LocationRetrieveBlock extends BaseBlock {
  type: "location.retrieve";
  in: {
    locationId: DataEdgeConnection;
  };
  out: {
    location: DataEdgeConnection;
  };
  data: {
    locationId?: string;
  };
}

export interface LocationRetrieveBlockInputs {
  locationId: string;
}

export interface SessionRetrieveBlock extends BaseBlock {
  type: "session.retrieve";
  in: {
    sessionId: DataEdgeConnection;
  };
  out: {
    session: DataEdgeConnection;
  };
  data: {
    sessionId?: string;
  };
}

export interface SessionRetrieveBlockInputs {
  sessionId: string;
}

export interface DeviceRetrieveBlock extends BaseBlock {
  type: "device.retrieve";
  in: {
    deviceId: DataEdgeConnection;
  };
  out: {
    device: DataEdgeConnection;
  };
  data: {
    deviceId?: string;
  };
}

export interface DeviceRetrieveBlockInputs {
  deviceId: string;
}

export interface UserRetrieveBlock extends BaseBlock {
  type: "user.retrieve";
  in: {
    userId: DataEdgeConnection;
  };
  out: {
    user: DataEdgeConnection;
  };
  data: {
    userId?: string;
  };
}

export interface UserRetrieveBlockInputs {
  userId: string;
}

export interface UserCreateBlock extends BaseBlock {
  type: "user.create";
  in: {
    name: DataEdgeConnection;
    type: DataEdgeConnection;
    licenseArray: DataEdgeConnection;
  };
  out: {
    user: DataEdgeConnection;
  };
  data: {
    name?: string | null;
    type?: "standard" | "management" | null;
    licenseArray?: any[] | null;
  };
}

export interface UserCreateBlockInputs {
  name?: string | null;
  type: "standard" | "management";
  licenseArray?: any[] | null;
}

export interface IncidentRetrieveBlock extends BaseBlock {
  type: "incident.retrieve";
  in: {
    incidentId: DataEdgeConnection;
  };
  out: {
    incident: DataEdgeConnection;
  };
  data: {
    incidentId?: string;
  };
}

export interface IncidentRetrieveBlockInputs {
  incidentId: string;
}

export interface ParameterUpdateBlock extends BaseBlock {
  type: "parameter.update";
  in: {
    parameterId: DataEdgeConnection;
    deviceId: DataEdgeConnection;
    currentValue: DataEdgeConnection;
    enumArray: DataEdgeConnection;
    description: DataEdgeConnection;
    name: DataEdgeConnection;
    reference: DataEdgeConnection;
  };
  out: {
    beforeParameter: DataEdgeConnection;
    afterParameter: DataEdgeConnection;
    changedFields: DataEdgeConnection;
  };
  data: {
    type: "boolean" | "number" | "text" | "enum";
    parameterId?: string;
    deviceId?: string;
    currentValue?: number | string | boolean | null;
    enumArray?: string[];
    description?: string;
    name?: string;
    reference?: string;
  };
}

export interface ParameterUpdateBlockInputs {
  parameterId: string;
  deviceId: string | null;
  currentValue: number | string | boolean;
  enumArray: string[] | null;
  description: string | null;
  name: string | null;
  reference: string | null;
}

export interface DeviceUpdateBlock extends BaseBlock {
  type: "device.update";
  in: {
    deviceId: DataEdgeConnection;
    name: DataEdgeConnection;
    description: DataEdgeConnection;
    latitude: DataEdgeConnection;
    longitude: DataEdgeConnection;
    disabled: DataEdgeConnection;
    parameterIdArray: DataEdgeConnection;
    simIdArray: DataEdgeConnection;
    permissionArray: DataEdgeConnection;
    proximityStrategyArray: DataEdgeConnection;
    adminQuickViewArray: DataEdgeConnection;
  };
  out: {
    device: DataEdgeConnection;
  };
  data: {
    deviceId?: string;
    name?: string | null;
    description?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    disabled?: boolean | null;
    parameterIdArray?: string[] | null;
    simIdArray?: string[] | null;
    permissionArray?: DevicePermission[] | null;
    proximityStrategyArray?: ProximityStrategy[] | null;
    adminQuickViewArray?: QuickView[] | null;
  };
}

export interface DeviceUpdateBlockInputs {
  deviceId: string;
  name?: string;
  description?: string | null;
  latitude?: number | null;
  longitude?: number | null;
  disabled?: boolean;
  parameterIdArray?: string[];
  simIdArray?: string[];
  permissionArray?: DevicePermission[];
  proximityStrategyArray?: ProximityStrategy[];
  adminQuickViewArray?: QuickView[];
}

export interface LocationUpdateBlock extends BaseBlock {
  type: "location.update";
  in: {
    locationId: DataEdgeConnection;
    latitude: DataEdgeConnection;
    longitude: DataEdgeConnection;
    purposeArray: DataEdgeConnection;
    circumstanceArray: DataEdgeConnection;
    rentOfferArray: DataEdgeConnection;
    reservationOfferArray: DataEdgeConnection;
    address: DataEdgeConnection;
    name: DataEdgeConnection;
    termId: DataEdgeConnection;
    deviceId: DataEdgeConnection;
    useableDeviceGroupLocationId: DataEdgeConnection;
    maximumConcurrentSessions: DataEdgeConnection;
    surveyEnabled: DataEdgeConnection;
    disabled: DataEdgeConnection;
    accountingAreaId: DataEdgeConnection;
    deviceIdArray: DataEdgeConnection;
    rentableDeviceGroupLocationId: DataEdgeConnection;
  };
  out: {
    location: DataEdgeConnection;
  };
  data: {
    locationId?: string;
    latitude?: number | null;
    longitude?: number | null;
    purposeArray?: Purpose[] | null;
    circumstanceArray?: Circumstance[] | null;
    rentOfferArray?: Offer[] | null;
    reservationOfferArray?: Offer[] | null;
    address?: Address | null;
    name?: string | null;
    termId?: string | null;
    deviceId?: string | null;
    useableDeviceGroupLocationId?: string | null;
    maximumConcurrentSessions?: number | null;
    surveyEnabled?: boolean | null;
    disabled?: boolean | null;
    accountingAreaId?: string | null;
    deviceIdArray?: string[] | null;
    rentableDeviceGroupLocationId?: string | null;
  };
}

export interface LocationUpdateBlockInputs {
  locationId: string;
  data: Record<string, any>;
}

export interface PropertyUpdateBlock extends BaseBlock {
  type: "property.update";
  in: {
    propertyId: DataEdgeConnection;
    data: DataEdgeConnection;
  };
  out: {
    property: DataEdgeConnection;
  };
  data: {
    propertyId?: string;
    data?: Record<string, any>;
  };
}

export interface PropertyUpdateBlockInputs {
  propertyId: string;
  data: Record<string, any>;
}

export interface SessionTerminateBlock extends BaseBlock {
  type: "session.terminate";
  in: {
    sessionId: DataEdgeConnection;
    ignoreFlowErrors: DataEdgeConnection;
    shouldRetry: DataEdgeConnection;
    autoRenewIfAvailable: DataEdgeConnection;
  };
  out: Record<string, never>;
  data: {
    sessionId?: string;
    ignoreFlowErrors?: boolean;
    shouldRetry?: boolean;
    autoRenewIfAvailable?: boolean;
  };
}

export interface SessionTerminateBlockInputs {
  sessionId: string;
  ignoreFlowErrors: boolean;
  shouldRetry: boolean;
  autoRenewIfAvailable: boolean;
}
export interface SystemLogBlock extends BaseBlock {
  type: "system.log";
  in: {
    severity: DataEdgeConnection;
    message: DataEdgeConnection;
  };
  out: Record<string, never>;
  data: {
    severity?: "debug" | "info" | "warning" | "error";
    message?: string;
  };
}
export interface SystemLogBlockInputs {
  severity: "debug" | "info" | "warning" | "error";
  message: string;
}
export interface UiNavigateScreenBlock extends BaseBlock {
  type: "ui.navigate.screen";
  in: {
    target: DataEdgeConnection;
    transition: DataEdgeConnection;
    params: DataEdgeConnection;
  };
  out: Record<string, never>;
  data: {
    target?: "panel" | "location";
    transition?: "push" | "replace";
    params?: Record<string, any>;
  };
}
export interface UiNavigateScreenBlockInputs {
  target: "panel" | "location";
  transition: "push" | "replace";
  params: Record<string, any>;
}

export interface IncidentCreateBlock extends BaseBlock {
  type: "incident.create";
  in: {
    propertyId: DataEdgeConnection;
    type: DataEdgeConnection;
    title: DataEdgeConnection;
    description: DataEdgeConnection;
    severity: DataEdgeConnection;
    deviceId: DataEdgeConnection;
    locationId: DataEdgeConnection;
    parameterAnomalyGroupId: DataEdgeConnection;
    incidentTemplateId: DataEdgeConnection;
  };
  out: {
    incident: DataEdgeConnection;
  };
  data: {
    propertyId?: string;
    type?: "device" | "location" | "parameterAnomalyGroup";
    title?: string | null;
    description?: string | null;
    severity?: "low" | "medium" | "high" | null;
    deviceId?: string | null;
    locationId?: string | null;
    parameterAnomalyGroupId?: string | null;
    incidentTemplateId?: string | null;
  };
}

export interface IncidentCreateBlockInputs {
  propertyId: string;
  type: "device" | "location" | "parameterAnomalyGroup";
  title?: string;
  description?: string;
  severity?: "low" | "medium" | "high";
  deviceId?: string;
  locationId?: string;
  parameterAnomalyGroupId?: string;
  incidentTemplateId?: string;
}

// constant blocks
export interface ConstNumberBlock extends BaseBlock {
  type: "const.number";
  in: Record<string, never>;
  out: {
    value: DataEdgeConnection;
  };
  data: { value: number };
}

export interface ConstTextBlock extends BaseBlock {
  type: "const.text";
  in: Record<string, never>;
  out: {
    value: DataEdgeConnection;
  };
  data: { value: string };
}

export interface ConstBooleanBlock extends BaseBlock {
  type: "const.boolean";
  in: Record<string, never>;
  out: {
    value: DataEdgeConnection;
  };
  data: { value: boolean };
}

// arithmetic
export interface MathAddBlock extends BaseBlock {
  type: "math.add";
  in: {
    a: DataEdgeConnection;
    b: DataEdgeConnection;
  };
  out: {
    result: DataEdgeConnection;
  };
  data: {
    // if an input is connected, this value is ignored. Otherwise this value will be used
    a?: number;
    // if an input is connected, this value is ignored. Otherwise this value will be used
    b?: number;
  };
}

export interface MathAddBlockInputs {
  a: number;
  b: number;
}

export interface MathSubtractBlock extends BaseBlock {
  type: "math.subtract";
  in: {
    a: DataEdgeConnection;
    b: DataEdgeConnection;
  };
  out: {
    result: DataEdgeConnection;
  };
  data: {
    a?: number;
    b?: number;
  };
}

export interface MathSubtractBlockInputs {
  a: number;
  b: number;
}

export interface MathMultiplyBlock extends BaseBlock {
  type: "math.multiply";
  in: {
    a: DataEdgeConnection;
    b: DataEdgeConnection;
  };
  out: {
    result: DataEdgeConnection;
  };
  data: {
    a?: number;
    b?: number;
  };
}

export interface MathMultiplyBlockInputs {
  a: number;
  b: number;
}

export interface MathDivideBlock extends BaseBlock {
  type: "math.divide";
  in: {
    a: DataEdgeConnection;
    b: DataEdgeConnection;
  };
  out: {
    result: DataEdgeConnection;
  };
  data: {
    a?: number;
    b?: number;
  };
}

export interface MathDivideBlockInputs {
  a: number;
  b: number;
}

export interface MapDestructureBlock extends BaseBlock {
  type: "map.destructure";
  // the list of keys you want to pull out
  data: {
    keys?: string[];
  };
  // a single input: the map to destructure
  in: { map: DataEdgeConnection };
  // for each key in `keys`, you’ll configure an `out[key] = edgeId`
  out: Record<string, DataEdgeConnection>;
}

export interface MapDestructureBlockInputs {
  map: Record<string, string | number | boolean>;
  keys: string[];
}

// control blocks
export interface IfBlock extends BaseBlock {
  type: "control.if";
  in: Record<string, DataEdgeConnection>;
  out: Record<string, ControlEdgeConnection>;
  data: {
    condition: JsonLogic;
  };
}

export interface SwitchBlock extends BaseBlock {
  type: "control.switch";
  in: Record<string, DataEdgeConnection>;
  out: Record<string, ControlEdgeConnection>;
  data: {
    expression: JsonLogic;
    cases: string[]; // branch names
  };
}

export interface HttpPatchBlock extends BaseBlock {
  type: "http.patch";
  in: {
    url: DataEdgeConnection;
    body: DataEdgeConnection;
    headers: DataEdgeConnection;
  };
  data: {
    url?: string; // if an input is connected, this is ignored. Otherwise this value will be used
    body?: Record<string, string | number | boolean>; // if an input is connected, this is ignored. Otherwise this value will be used
    headers?: Record<string, string>; // if an input is connected, this is ignored. Otherwise this value will be used
  };
  out: {
    status: DataEdgeConnection;
    data: DataEdgeConnection;
  };
}

export interface HttpsPatchBlockInputs {
  url: string;
  body: Record<string, string | number | boolean>;
  headers: Record<string, string>;
}

export interface HttpGetBlock extends BaseBlock {
  type: "http.get";
  in: {
    url: DataEdgeConnection;
    headers: DataEdgeConnection;
  };
  out: {
    status: DataEdgeConnection;
    data: DataEdgeConnection;
  };
  data: {
    url?: string;
    headers?: Record<string, string>;
  };
}

export interface HttpGetBlockInputs {
  url: string;
  headers: Record<string, string>;
}

export interface HttpPostBlock extends BaseBlock {
  type: "http.post";
  in: {
    url: DataEdgeConnection;
    body: DataEdgeConnection;
    headers: DataEdgeConnection;
  };
  out: {
    status: DataEdgeConnection;
    data: DataEdgeConnection;
  };
  data: {
    url?: string;
    body?: Record<string, string | number | boolean>;
    headers?: Record<string, string>;
  };
}

export interface HttpPostBlockInputs {
  url: string;
  body: Record<string, string | number | boolean>;
  headers: Record<string, string>;
}

export interface HttpDeleteBlock extends BaseBlock {
  type: "http.delete";
  in: {
    url: DataEdgeConnection;
    headers: DataEdgeConnection;
  };
  out: {
    status: DataEdgeConnection;
    data: DataEdgeConnection;
  };
  data: {
    url?: string;
    headers?: Record<string, string>;
  };
}

export interface HttpDeleteBlockInputs {
  url: string;
  headers: Record<string, string>;
}

export interface HttpPutBlock extends BaseBlock {
  type: "http.put";
  in: {
    url: DataEdgeConnection;
    body: DataEdgeConnection;
    headers: DataEdgeConnection;
  };
  out: {
    status: DataEdgeConnection;
    data: DataEdgeConnection;
  };
  data: {
    url?: string;
    body?: Record<string, string | number | boolean>;
    headers?: Record<string, string>;
  };
}

export interface HttpPutBlockInputs {
  url: string;
  body: Record<string, string | number | boolean>;
  headers: Record<string, string>;
}

export interface MqttSendBlock extends BaseBlock {
  type: "mqtt.send";
  in: {
    message: DataEdgeConnection;
    topic: DataEdgeConnection;
    username: DataEdgeConnection;
    password: DataEdgeConnection;
    connectUrl: DataEdgeConnection;
  };
  out: Record<string, never>;
  data: {
    message?: string;
    topic?: string;
    username?: string;
    password?: string;
    connectUrl?: string;
  };
}

export interface MqttSendBlockInputs {
  message: string;
  topic: string;
  username: string | null;
  password: string | null;
  connectUrl: string;
}

export interface FlowExecuteBlock extends BaseBlock {
  type: "flow.execute";
  in: {
    flowId: DataEdgeConnection;
  } & Record<string, DataEdgeConnection>;
  out: Record<string, DataEdgeConnection>;
  data: {
    flowId?: string;
  };
}

export interface FlowExecuteBlockInputs {
  flowId: string;
  [key: string]: any;
}

export interface EndCustomBlock extends BaseBlock {
  type: "end.custom";
  // maps each output‐param name to its edge ID
  in: Record<string, DataEdgeConnection>;

  // terminal blocks don’t feed any further blocks
  out: Record<string, never>;

  // describe each param (name & type) that this block will return
  data: {
    outputParamDefinitionArray: ParamDefinition[];
  };
}

// The union of all block types:
export type FlowBlock =
  | StartCustomBlock
  | StartQuickActionLocationBlock
  | StartSessionUpdateBlock
  | StartLocationUpdateBlock
  | StartParameterUpdateBlock
  | ConstNumberBlock
  | ConstTextBlock
  | ConstBooleanBlock
  | MathAddBlock
  | MathSubtractBlock
  | MathMultiplyBlock
  | MathDivideBlock
  | MapDestructureBlock
  | ParameterRetrieveBlock
  | PropertyRetrieveBlock
  | LocationRetrieveBlock
  | SessionRetrieveBlock
  | DeviceRetrieveBlock
  | UserRetrieveBlock
  | UserCreateBlock
  | IncidentRetrieveBlock
  | ParameterUpdateBlock
  | DeviceUpdateBlock
  | LocationUpdateBlock
  | PropertyUpdateBlock
  | SessionTerminateBlock
  | SystemLogBlock
  | UiNavigateScreenBlock
  | IncidentCreateBlock
  | IfBlock
  | SwitchBlock
  | HttpPatchBlock
  | HttpGetBlock
  | HttpPostBlock
  | HttpDeleteBlock
  | HttpPutBlock
  | MqttSendBlock
  | FlowExecuteBlock
  | HttpPatchBlock
  | EndCustomBlock;

export type FlowBlockInput =
  | MathAddBlockInputs
  | MathSubtractBlockInputs
  | MathMultiplyBlockInputs
  | MathDivideBlockInputs
  | ParameterRetrieveBlockInputs
  | PropertyRetrieveBlockInputs
  | LocationRetrieveBlockInputs
  | SessionRetrieveBlockInputs
  | DeviceRetrieveBlockInputs
  | UserRetrieveBlockInputs
  | UserCreateBlockInputs
  | IncidentRetrieveBlockInputs
  | ParameterUpdateBlockInputs
  | DeviceUpdateBlockInputs
  | LocationUpdateBlockInputs
  | PropertyUpdateBlockInputs
  | SessionTerminateBlockInputs
  | SystemLogBlockInputs
  | UiNavigateScreenBlockInputs
  | IncidentCreateBlockInputs
  | HttpsPatchBlockInputs
  | HttpGetBlockInputs
  | HttpPostBlockInputs
  | HttpDeleteBlockInputs
  | HttpPutBlockInputs
  | MqttSendBlockInputs
  | FlowExecuteBlockInputs
  | MapDestructureBlockInputs
  | Record<string, unknown>;

export interface FlowDataEdge {
  id: string;
  type: "data";
  from: { blockId: string; output: string };
  to: { blockId: string; input: string };
}

export interface FlowControlEdge {
  id: string;
  type: "control";
  from: {
    blockId: string;
    output: string | null; // e.g. "true" or "false" for an if‑block
  };
  to: { blockId: string };
}

export type FlowEdge = FlowDataEdge | FlowControlEdge;

export type ParamType =
  | "string"
  | "number"
  | "boolean"
  | "null"
  | "session"
  | "sessionArray";

export interface ParamDefinition {
  name: string; // no spaces, no special characters, no dots, no slashes, no colons, no commas, no semicolons, no question marks, no exclamation marks, no parentheses, no brackets, no braces, no quotes, no backticks
  type: ParamType[]; // array of types, because a parameter can have multiple types, e.g. "string" and "null"
  required: boolean;
  description: string | null;
}

export type FlowLog = {
  severity: "debug" | "info" | "warning" | "error";
  message: string;
  createdAt: Date; // ISO 8601 date string
};

export type DataEdgeConnection = string | null; // null if not connected
export type ControlEdgeConnection = string | null; // null if not connected

export type QuickAction = {
  icon: string | null;
  name: LocaleString;
  flowId: string;
  visibleCondition: Condition | null; // if null the quick action is always visible
};

export type QuickView = {
  name: LocaleString;
  parameterId: string | null;
  icon: string | null;
  visibleCondition: Condition | null; // if null the quick view is always visible
};

export type LocalParameter = {
  id: string;
  name: string;
  value: any;
  type: string;
};

export type PanelDisplay = "modal" | "dialog" | "screen";
