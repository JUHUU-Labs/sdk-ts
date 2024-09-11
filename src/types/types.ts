export type Environment = "development" | "production";

export type Platform = "ios" | "android" | "windows" | "macos" | "web";
export type DeviceStatus = "running" | "sleeping" | "shutdown"; // sleeping = running, but offline
export type PushToken = {
  platform: Platform;
  token: string;
};
export type ExtractType<T> = T extends { type: infer U } ? U : never;

export interface Offer {
  tariffId: string;
  licenseTemplateIdArray: string[];
  offerTime: OfferTime;
}

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

export type FuelType =
  | "battery"
  | "diesel"
  | "gasoline"
  | "hydrogen"
  | "fossil";
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
  "gsw", // swiss german
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
  "hrk", // croatia
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
  frontendVersion: number;
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

export interface EnvironmentSettings {
  isDev: boolean;
}

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
export type RefundReason = "requestdByUser";
export type SessionStatus = "waitingForPayment" | "ready" | "completed";
export type AutoRenewMode = "off" | "optIn" | "optOut" | "on";
export type RefundStatus = "inTransitToUser" | "succeeded";

export type SessionTerminatedByType =
  | "user"
  | "cloudTask"
  | "cloudFunction"
  | "mqttCommand";

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
  vat: string;
  address: Address;
  iban?: string;
  bic?: string;
}

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
  | "payedOut"; // the funds arrived at the property

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

export const ReadonlyIntegrationStateArray = ["full", "partial"] as const;

export type IntegrationState = (typeof ReadonlyIntegrationStateArray)[number];

export type GeoPoint = {
  type: "Point";
  coordinates: [number, number]; // Note that longitude comes first in a GeoJSON coordinate array, not latitude.
};

export type PlatformUrl = {
  ios: string;
  android: string;
  web: string;
};

export interface MapFilter {
  integrationStateArray: IntegrationState[];
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

export type Circumstance =
  | {
      type: "wheelchairAccessible";
      isWheelchairAccessible: boolean;
    }
  | {
      type: "height";
      height: number;
    }
  | {
      type: "width";
      width: number;
    }
  | {
      type: "videoSurveillance";
      hasVideoSurveillance: boolean;
    }
  | {
      type: "stackableParking";
      isStackableParking: boolean;
    }
  | {
      type: "socket";
      hasFreeSocketAvailable: boolean;
      socketType: "Schuko" | "CEE" | "Type2";
    }
  | {
      type: "cargoHold";
      hasCargoHold: boolean;
    }
  | {
      type: "tandem";
      isTandem: boolean;
    }
  | {
      type: "propulsion";
      propulsion:
        | "manual"
        | "electric"
        | "hybrid"
        | "combustion"
        | "manualAssist";
    }
  | {
      type: "childSeat";
      hasChildSeat: boolean;
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

export type Parameter =
  | {
      name: string; // name of the paramter
      type: "number";
      lastChangeAt: Date | null; // null, if the parameter has never been updated before
      current: number; // current value
      unit: Unit | null;
    }
  | {
      name: string;
      type: "enum";
      lastChangeAt: Date;
      enumArray: string[];
      current: string;
    }
  | {
      name: string;
      type: "string";
      lastChangeAt: Date;
      current: string;
    }
  | {
      name: string;
      type: "boolean";
      lastChangeAt: Date;
      current: boolean;
    };

export namespace Layout {
  type Block = {
    visibleCondition: Condition | null; // if null the layoutblock is always visible
  };

  export type PreviewButton = {
    icon: string;
    title: LocaleString;
    buttonName: string;
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
        }

        export type CardElement = {
          type: "text.plain";
          text: LocaleString;
        };

        export interface Toggle extends FormElementBlock {
          type: "toggle";
          onButtonName: string;
          offButtonName: string;
          defaultValueParameterName: string;
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
      trigger: "command.executed";
      commandName: string;
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
      url: PlatformUrl;
    }
  | {
      id: string;
      type: "open.phone";
      nodeIdArray: string[];
      phone: string;
    }
  | {
      id: string;
      type: "device.message"; // device cannot have multiple connectors
      nodeIdArray: string[];
      message: string;
    }
  | {
      id: string;
      type: "property.notify";
      nodeIdArray: string[];
      subject: string;
      message: string;
    }
  | {
      id: string;
      type: "user.notify";
      nodeIdArray: string[];
      subject: string;
      message: string;
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
      type: "command.execute";
      nodeIdArray: string[];
      commandName: string;
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
  de: string;
  en: string;
  fr: string;
}
