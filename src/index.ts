import SessionsService from "./sessions/sessions.service";
import LinksService from "./links/links.service";
import UsersService from "./users/users.service";
import PaymentsService from "./payments/payments.service";
import PropertiesService from "./properties/properties.service";
import PointsService from "./points/points.service";
import DevicesService from "./devices/devices.service";
import DeviceTemplatesService from "./deviceTemplates/deviceTemplates.service";
import LocationsService from "./locations/locations.service";
import TermsService from "./terms/terms.service";
import TariffsService from "./tariffs/tariffs.service";
import ProductService from "./products/products.service";
import {
  AccessControlListElement,
  Address,
  ApiKeyScope,
  ApiKeyStatus,
  AutoRenewMode,
  Capability,
  Category,
  Circumstance,
  ColorScheme,
  Command,
  CountryCode,
  CurrencyCode,
  DeepNullable,
  DevicePermission,
  DeviceStatus,
  Environment,
  Frontend,
  GeoPoint,
  GraphNode,
  LanguageCode,
  Layout,
  LayoutBlock,
  License,
  Offer,
  Party,
  PaymentMethod,
  PaymentReason,
  PaymentRefundReason,
  PaymentRefundStatus,
  PaymentServiceProvider,
  PaymentStatus,
  PayoutStatus,
  Person,
  Platform,
  PlatformString,
  PostingRow,
  PushToken,
  SimStatus,
  StarRating,
  TaxCode,
  TimeZone,
  UserGroup,
  Utilization,
  VisualPriority,
} from "./types/types";
import SettingsService from "./settings/settings.service";
import AccountingAreasService from "./accountingAreas/accountingAreas.service";
import ConnectorsService from "./connectors/connectors.service";
import PayoutsService from "./payouts/payouts.service";
import ConnectorMessagesService from "./connectorMessages/connectorMessages.service";
import SimsService from "./sims/sims.service";
import LicenseTemplatesService from "./licenseTemplates/licenseTemplates.service";
import ArticlesService from "./articles/articles.service";
import ChatsService from "./chats/chats.service";
import ChatMessagesService from "./chatMessages/chatMessages.service";
import ArticleEmbeddingsService from "./articleEmbeddings/articleEmbeddings.service";
import BoldLockService from "./boldLock/boldLock.service";
import TapkeyService from "./tapkey/tapkey.service";
import PaymentRefundsService from "./paymentRefunds/paymentRefunds.service";
import ArticleGroupsService from "./articleGroups/articleGroups.service";
import ParameterHistoriesService from "./parameterHistories/parameterHistories.service";
import ApiKeysService from "./apiKeys/apiKeys.service";
import ParametersService from "./parameters/parameters.service";
import IncidentTemplatesService from "./incidentTemplates/incidentTemplates.service";
import IncidentsService from "./incidents/incidents.service";
import ParameterAnomalyGroupsService from "./parameterAnomalyGroups/parameterAnomalyGroups.service";
import ParameterAnomalyGroupTrackersService from "./parameterAnomalyGroupTrackers/parameterAnomalyGroupTrackers.service";

export * from "./types/types";

export class Juhuu {
  constructor(config: JUHUU.SetupConfig) {
    this.sessions = new SessionsService(config);
    this.links = new LinksService(config);
    this.users = new UsersService(config);
    this.payments = new PaymentsService(config);
    this.paymentRefunds = new PaymentRefundsService(config);
    this.properties = new PropertiesService(config);
    this.points = new PointsService(config);
    this.devices = new DevicesService(config);
    this.deviceTemplates = new DeviceTemplatesService(config);
    this.locations = new LocationsService(config);
    this.terms = new TermsService(config);
    this.tariffs = new TariffsService(config);
    this.products = new ProductService(config);
    this.settings = new SettingsService(config);
    this.accountingAreas = new AccountingAreasService(config);
    this.connectors = new ConnectorsService(config);
    this.payouts = new PayoutsService(config);
    this.connectorMessages = new ConnectorMessagesService(config);
    this.sims = new SimsService(config);
    this.licenseTemplates = new LicenseTemplatesService(config);
    this.articles = new ArticlesService(config);
    this.chats = new ChatsService(config);
    this.chatMessages = new ChatMessagesService(config);
    this.articleEmbeddings = new ArticleEmbeddingsService(config);
    this.boldLock = new BoldLockService(config);
    this.tapkey = new TapkeyService(config);
    this.articleGroups = new ArticleGroupsService(config);
    this.parameterHistories = new ParameterHistoriesService(config);
    this.apiKeys = new ApiKeysService(config);
    this.parameters = new ParametersService(config);
    this.parameters = new ParametersService(config);
    this.incidentTemplates = new IncidentTemplatesService(config);
    this.incidents = new IncidentsService(config);
    this.parameterAnomalyGroups = new ParameterAnomalyGroupsService(config);
    this.parameterAnomalyGroupTrackers =
      new ParameterAnomalyGroupTrackersService(config);
  }

  /**
   * Top Level Resources
   */
  readonly sessions: SessionsService;
  readonly links: LinksService;
  readonly users: UsersService;
  readonly payments: PaymentsService;
  readonly paymentRefunds: PaymentRefundsService;
  readonly properties: PropertiesService;
  readonly points: PointsService;
  readonly devices: DevicesService;
  readonly deviceTemplates: DeviceTemplatesService;
  readonly locations: LocationsService;
  readonly terms: TermsService;
  readonly tariffs: TariffsService;
  readonly products: ProductService;
  readonly settings: SettingsService;
  readonly accountingAreas: AccountingAreasService;
  readonly connectors: ConnectorsService;
  readonly payouts: PayoutsService;
  readonly connectorMessages: ConnectorMessagesService;
  readonly sims: SimsService;
  readonly licenseTemplates: LicenseTemplatesService;
  readonly articles: ArticlesService;
  readonly chats: ChatsService;
  readonly chatMessages: ChatMessagesService;
  readonly articleEmbeddings: ArticleEmbeddingsService;
  readonly boldLock: BoldLockService;
  readonly tapkey: TapkeyService;
  readonly articleGroups: ArticleGroupsService;
  readonly parameterHistories: ParameterHistoriesService;
  readonly apiKeys: ApiKeysService;
  readonly parameters: ParametersService;
  readonly incidentTemplates: IncidentTemplatesService;
  readonly incidents: IncidentsService;
  readonly parameterAnomalyGroups: ParameterAnomalyGroupsService;
  readonly parameterAnomalyGroupTrackers: ParameterAnomalyGroupTrackersService;
}

export namespace JUHUU {
  export interface SetupConfig {
    environment?: Environment;
    getAccessToken?: () => Promise<string | null>;
    onException?: <T>(response: JUHUU.HttpResponse<T>) => Promise<"abort">;
    setAccessToken?: (accessToken: string) => Promise<void>;
    getRefreshToken?: () => Promise<string | null>;
    setRefreshToken?: (refreshToken: string) => Promise<void>;
    clientVersion: string;
    apiKey?: string;
    defaultRequestOptions?: JUHUU.RequestOptions;
    authenticationMode?: "jwt" | "apiKey";
  }

  export interface HttpResponse<T> {
    ok: boolean;
    data:
      | T & {
          /**
           * Might be defined if the request failed
           */
          message?: string | LocaleString;
        };
    statusText?: string;
    status?: number;
  }

  export type RequestOptions = {
    /**
     * If this is true, the onException function will be called if the request fails.
     */
    triggerOnException?: boolean;

    /**
     * If this accessToken is provided, the request will be sent with this accessToken.
     */
    accessToken?: string;

    /**
     * If this is true, a new accessToken will be requested if the current one is expired.
     */
    refreshTokensIfNecessary?: boolean;

    /**
     * If this API key is provided, the request will be sent with this API key instead of the one passed to config.
     */
    apiKey?: string | null;
  };
  export interface LocaleString {
    de?: string;
    en?: string;
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
    gsw?: string;
  }
  export type DeepNullable<T> = {
    [P in keyof T]?: DeepNullable<T[P]> | null;
  };

  export const ReadonlySectorArray = ["tourism", "mobility", "sport"] as const;

  export type Sector = (typeof ReadonlySectorArray)[number];

  export const ReadonlyTechnologyArray = ["analog", "digital"] as const;

  export type Technology = (typeof ReadonlyTechnologyArray)[number];

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

  export namespace Settings {
    export namespace SendSupportRequest {
      export type Params = {
        message: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = undefined;
    }
  }

  export namespace Session {
    type Base = {
      id: string;
      status: "waitingForPayment" | "ready" | "completed";
      paymentId: string | null; // paymentId is null if session is free
      userId: string | null; // id of the user who owns the session
      propertyId: string;
      createdAt: Date; // date at which session was created
      terminatedAt: Date | null; // date at which session was terminated
      terminatedBy: string | null;
      terminatedByUserId: string | null; // userId of the user who terminated the session
      scheduledTerminationAt: Date; // date at which session will be terminated automatically
      scheduledTerminationHandler: "cloudFunction" | "cloudTask"; // handler which will terminate the session
      reminderEnabled: boolean | null; // null, if session reminder was not yet evaluated;
      reminderAt: Date | null; // timestamp at which the user will be reminded
      reminderHandler: "cloudFunction" | "cloudTask" | null; // handler which will remind the user
      reminderExecuted: boolean; // session can be terminated automatically (true) or only by the user (false)}
      timeZone: TimeZone; // timeZone of the device that was rented
      autoRenewManualEnabled: boolean; // if true; the user can enable autoRenew manually
      manualTerminationEnabled: boolean; // if true; the user can terminate the session manually
      version: number; // new session documents have version number 2.0.0
      isOffSession: boolean; // true if the session was created without the user being online
      tariff: JUHUU.Tariff.Object; // dto of the tariff that was selected on session creation
      previousAutoRenewSessionId: string | null; // if of the session that had autoRenew enabled before this session
      autoRenew: boolean; // if true, the session will be autoRenew once it is being termianted
      locationId: string | null; // locationId of the RentableDeviceLocation
      locationName: string | null; // name of the RentableDeviceLocation
      locationGroupId: string | null; // id of the RentableDeviceLocationGroup
      locationGroupName: string | null; // name of the RentableDeviceLocationGroup
    };

    export interface Rent extends Base {
      type: "rent";
      managementUserId: string | null;
      deviceIdArray: string[];
      autoRenew: boolean;
      previousAutoRenewSessionId: string | null;
      surveyId: string | null;
      surveyEnabled: boolean;
    }

    export interface Reservation extends Base {
      type: "reservation";
    }

    export type Object = Rent | Reservation;

    export namespace Create {
      export type Params = {
        locationId: string;
        tariffId: string;
        autoRenew: boolean;
        sessionType: Object["type"];
        isOffSession: boolean;
        userId: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        session: JUHUU.Session.Object;
      };
    }

    export namespace Export {
      export type Params = {
        propertyId: string;
        outputType: "csv";
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        outputUrl: string;
      };
    }

    export namespace Retrieve {
      export type Params = {
        sessionId: string;
      };

      export type Options = {
        expand?: Array<"property">;
      } & JUHUU.RequestOptions;

      export type Response = {
        session: JUHUU.Session.Object;
        property?: JUHUU.Property.Object;
      };
    }

    export namespace Search {
      export type Params = {
        paymentId?: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        session: JUHUU.Session.Object;
      };
    }

    export namespace List {
      export type Params = {
        propertyId?: string;
        userId?: string;
        managementUserId?: string;
        statusArray?: JUHUU.Session.Object["status"][];
        locationId?: string;
        locationGroupId?: string;
      };

      export type Options = {
        limit?: number;
        skip?: number;
      } & JUHUU.RequestOptions;

      export type Response = JUHUU.Session.Object[];
    }

    export namespace Update {
      export type Params = {
        sessionId: string;
        autoRenew: boolean;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        session: JUHUU.Session.Object;
      };
    }

    export namespace Terminate {
      export type Params = {
        sessionId: string;
        isOffSession: boolean;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        session: JUHUU.Session.Object | null;
      };
    }

    export namespace AttachLocation {
      export type Params = {
        sessionId: string;
        locationId: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        session: JUHUU.Session.Object;
      };
    }

    export namespace AttachUser {
      export type Params = {
        sessionId: string;
        userId: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        session: JUHUU.Session.Object;
      };
    }

    export namespace DetachUser {
      export type Params = {
        sessionId: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        session: JUHUU.Session.Object;
      };
    }

    export namespace Delete {
      export type Params = {
        sessionId: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = JUHUU.Session.Object;
    }

    export namespace Realtime {
      export type Params = {
        sessionId: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        onUpdated: (
          callback: (message: {
            payload: {
              after: JUHUU.Session.Object;
              before: JUHUU.Session.Object;
              changedFields: string[];
            };
          }) => void
        ) => void;
        close: () => void;
      };
    }
  }

  export namespace User {
    type Base = {
      id: string;
      createdAt: Date;
      description: string | null;
      platform: "ios" | "android" | "windows" | "macos" | "web" | null;
      supportPassphrase: string;
      appVersion: number | null;
      termsVersion: number;
      name: string | null;
      stripeCustomerId: string;
      acceptedTermIdArray: string[];
      licenseArray: License[];
      languageCode: LanguageCode | null;
      billingAddress: DeepNullable<Address>;
      billingEmail: string | null; // primary email that must never be empty
      billingEmailVerified: boolean;
      taxCodeArray: TaxCode[];
      notifications: {
        email: {
          enabled: boolean;
          emailArray: string[];
        };
        sms: {
          enabled: boolean;
          phoneNumberArray: string[];
        };
        push: {
          enabled: boolean;
          pushTokenArray: PushToken[];
        };
      };
      group: UserGroup;
      createdByPropertyId: string | null;
    };

    export interface Standard extends Base {
      type: "standard";
      managementUserId: string | null;
    }

    export interface Management extends Base {
      type: "management";
      contactPerson: Person;
    }

    export type Object = Standard | Management;

    export namespace Retrieve {
      export type Params = {
        userId: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        user: JUHUU.User.Object;
      };
    }

    export namespace Create {
      export type Params = {
        type: JUHUU.User.Object["type"];
        name?: string;
        createdByPropertyId?: JUHUU.User.Object["createdByPropertyId"];
        licenseArray?: License[];
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        user: JUHUU.User.Object;
      };
    }

    export namespace List {
      export type Params = {
        managementUserId?: string;
        createdByPropertyId?: string;
        customerOfPropertyId?: string;
        license?: {
          cardId?: string;
        };
      };

      export type Options = {
        limit?: number;
        skip?: number;
      } & JUHUU.RequestOptions;

      export type Response = {
        userArray: JUHUU.User.Object[];
        count: number;
        hasMore: boolean;
      };
    }

    export namespace Exists {
      export type Params = {
        email: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        exists: boolean;
      };
    }

    export namespace Update {
      export type Params = {
        userId: string;
        name?: string;
        platform?: Platform;
        languageCode?: LanguageCode;
        appVersion?: string;
        billingAddress?: DeepNullable<Address>;
        taxCodeArray?: TaxCode[];
        acceptedTermIdArray?: string[];
        group?: UserGroup;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        user: JUHUU.User.Object;
      };
    }

    export namespace LoginEmailPassword {
      export type Params = {
        password: string;
        email: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        accessToken: string;
        refreshToken: string;
      };
    }

    export namespace PaymentMethodTokens {
      export type Params = {
        userId: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        stripe: {
          ephemeralKeySecret: string;
          customerId: string;
          publishableKey: string;
          clientSecret: string;
        };
      };
    }

    export namespace RegisterEmailPassword {
      export type Params = {
        password: string;
        email: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        accessToken: string;
        refreshToken: string;
      };
    }

    export namespace RefreshAccessToken {
      export type Params = {
        refreshToken: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        accessToken: string;
        refreshToken: string;
      };
    }

    export namespace InviteMember {
      export type Params = {
        userId: string;

        /**
         * The email of the user to invite.
         */
        email?: string;

        /**
         * The userId of the user to invite.
         */
        userIdToInvite?: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = void;
    }

    export namespace RemoveMember {
      export type Params = {
        managementUserId: string;
        memberUserId: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        user: JUHUU.User.Object;
      };
    }

    export namespace Delete {
      export type Params = {
        userId: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = JUHUU.User.Object;
    }
  }

  export namespace BoldLock {
    export namespace Credentials {
      export type Params = {
        userId: string;
        deviceId: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        boldClientId: string;
        boldClientSecret: string;
        boldAuthorizationCode: string;
        boldRedirectUri: string;
      };
    }

    export namespace GrantAccess {
      export type Params = {
        userId: string;
        deviceId: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        device: JUHUU.Device.Object;
      };
    }
  }

  export namespace Tapkey {
    export namespace Credentials {
      export type Params = {
        userId: string;
        deviceId: string;
        implementationVersion: number;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        tapkeyJwt: string;
      };
    }

    export namespace GrantAccess {
      export type Params = {
        userId: string;
        deviceId: string;
        implementationVersion: number;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        device: JUHUU.Device.Object;
      };
    }
  }

  export namespace Term {
    export type Object = {
      id: string;
      name: string;
      url: string; // ein Link zu den vom Betreiber zur Verfügung gestellten AGB
      dsgvoUrl: string; // ein Link zu den vom Betreiber zur Verfügung gestellten DSGVO
      propertyId: string; // die property Id zu dem die AGB gehört
    };

    export namespace Create {
      export type Params = {
        propertyId: string;
        name?: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        term: JUHUU.Term.Object;
      };
    }

    export namespace Retrieve {
      export type Params = {
        termId: string;
      };

      export type Options = {
        expand?: Array<"property">;
      } & JUHUU.RequestOptions;

      export type Response = {
        term: JUHUU.Term.Object;
        property?: JUHUU.Property.Object;
      };
    }

    export namespace List {
      export type Params = {
        propertyId?: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = JUHUU.Term.Object[];
    }

    export namespace Update {
      export type Params = {
        termId: string;
        name?: string;
        url?: string;
        dsgvoUrl?: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        term: JUHUU.Term.Object;
      };
    }

    export namespace Accept {
      export type Params = {
        termId: string;
        userId: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        term: JUHUU.Term.Object;
      };
    }

    export namespace Delete {
      export type Params = {
        termId: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = JUHUU.Term.Object;
    }
  }

  export namespace AccountingArea {
    export type Object = {
      id: string;
      name: string;
      propertyId: string;
      paymentPostingRowDescription: string;
      paymentRefundPostingRowDescription: string;
      orderNumber: string; // mandatory field. Value is being used in posting row of credit note
      BKTXT: string | null;
      SGTXT: string | null;
      ZUONR: string | null;
    };

    export namespace Create {
      export type Params = {
        propertyId: string;
        name?: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        accountingArea: JUHUU.AccountingArea.Object;
      };
    }

    export namespace Retrieve {
      export type Params = {
        accountingAreaId: string;
      };

      export type Options = {
        expand?: Array<"property">;
      } & JUHUU.RequestOptions;

      export type Response = {
        accountingArea: JUHUU.AccountingArea.Object;
        property?: JUHUU.Property.Object;
      };
    }

    export namespace List {
      export type Params = {
        propertyId?: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = JUHUU.AccountingArea.Object[];
    }

    export namespace Update {
      export type Params = {
        accountingAreaId: string;
        name?: string; // title of the article
        paymentPostingRowDescription?: string; // subtitle of the article
        orderNumber?: string; // id of the higher order article in the tree of articles
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        accountingArea: JUHUU.AccountingArea.Object;
      };
    }

    export namespace Delete {
      export type Params = {
        accountingAreaId: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = JUHUU.AccountingArea.Object;
    }
  }

  export namespace ApiKey {
    export type Object = {
      id: string;
      readonly object: "apiKey";
      name: string;
      status: ApiKeyStatus;
      scopeArray: ApiKeyScope[]; // if the array is empty, it means all scopes are allowed
      propertyId: string;
      expiresAt: Date | null;
      createdAt: Date;
      hash: string;
    };

    export namespace Create {
      export type Params = {
        propertyId: string;
        name?: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        apiKey: JUHUU.ApiKey.Object;
        clearText: string;
      };
    }

    export namespace Retrieve {
      export type Params = {
        apiKeyId: string;
      };

      export type Options = {
        expand?: Array<"property">;
      } & JUHUU.RequestOptions;

      export type Response = {
        apiKey: JUHUU.ApiKey.Object;
        property?: JUHUU.Property.Object;
      };
    }

    export namespace List {
      export type Params = {
        propertyId?: string;
        statusArray?: JUHUU.Article.Object["status"][];
      };

      export type Options = {
        limit?: number;
        skip?: number;
      } & JUHUU.RequestOptions;

      export type Response = {
        apiKeyArray: JUHUU.ApiKey.Object[];
        count: number;
        hasMore: boolean;
      };
    }

    export namespace Update {
      export type Params = {
        apiKeyId: string;
        status?: ApiKeyStatus;
        name?: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        apiKey: JUHUU.ApiKey.Object;
      };
    }
  }

  export namespace ArticleEmbedding {
    export type Object = {
      id: string;
      readonly object: "articleEmbedding";
      chunk: string; // chunk of the article that was embedded
      articleId: string; // id of th article that was embedded
      lineFrom: number; // lineFrom of the article where the embedding was made
      lineTo: number; // lineFrom of the article where the embedding was made
    };

    export namespace Retrieve {
      export type Params = {
        articleEmbeddingId: string;
      };

      export type Options = {
        expand?: Array<"property">;
      } & JUHUU.RequestOptions;

      export type Response = {
        articleEmbedding: JUHUU.ArticleEmbedding.Object;
      };
    }

    export namespace List {
      export type Params = {
        articleId?: string;
      };

      export type Options = {
        limit?: number;
        skip?: number;
      } & JUHUU.RequestOptions;

      export type Response = {
        articleEmbeddingArray: JUHUU.ArticleEmbedding.Object[];
        count: number;
        hasMore: boolean;
      };
    }
  }

  export namespace Article {
    export type Object = {
      id: string;
      readonly object: "article";
      title: LocaleString; // title of the article
      subtitle: LocaleString; // subtitle of the article
      propertyId: string; // id of the property who owns the article. If null, the article does not belong to any property
      slug: string | null; // part of the url that points to the article e.g. if the slug is "my-article", the url will be "/slug1/my-article/slug2"
      markdownContent: LocaleString; // markdown content of the article
      status: "draft" | "published"; // status of the article
      lastUpdatedAt: Date;
      createdAt: Date;
      languageCodeArray: LanguageCode[]; // this array contains the language codes of the article that were written by the user. The other languaes of the markdownContent are generated by the system
      embeddingsGenerated: boolean; // whether or not embeddings are generated for this article
      autoTranslateEnabled: boolean; // whether or not auto translation to other languages is enabled for this article
      embeddingsGenerationEnabled: boolean; // whether or not embeddings should be generated for this article
      order: number; // order of the article in the list of articles
      articleGroupIdArray: string[];
    };

    export namespace Create {
      export type Params = {
        propertyId: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        article: JUHUU.Article.Object;
      };
    }

    export namespace Retrieve {
      export type Params = {
        articleId: string;
      };

      export type Options = {
        expand?: Array<"property">;
      } & JUHUU.RequestOptions;

      export type Response = {
        article: JUHUU.Article.Object;
        property?: JUHUU.Property.Object;
      };
    }

    export namespace List {
      export type Params = {
        propertyId?: string;
        statusArray?: JUHUU.Article.Object["status"][];
        articleGroupId?: string | null;
      };

      export type Options = {
        limit?: number;
        skip?: number;
      } & JUHUU.RequestOptions;

      export type Response = {
        articleArray: JUHUU.Article.Object[];
        count: number;
        hasMore: boolean;
      };
    }

    export namespace Update {
      export type Params = {
        articleId: string;
        title?: LocaleString; // title of the article
        subtitle?: LocaleString; // subtitle of the article
        parentArticleId?: string | null; // id of the higher order article in the tree of articles
        markdownContent?: LocaleString; // markdown content of the article
        status?: "draft" | "published"; // status of the article
        languageCodeArray?: LanguageCode[];
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        article: JUHUU.Article.Object;
      };
    }

    export namespace Delete {
      export type Params = {
        articleId: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        article: JUHUU.Article.Object;
      };
    }

    export namespace Search {
      export type Params = {
        slug?: string;
        text?: string;
      };

      export type Options = {
        limit?: number;
        skip?: number;
      } & JUHUU.RequestOptions;

      export type Response = {
        articleArray: JUHUU.Article.Object[];
      };
    }

    export namespace Translate {
      export type Params = {
        articleId: string;
        languageCode: LanguageCode;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        article: JUHUU.Article.Object;
      };
    }
  }

  export namespace ArticleGroup {
    export type Object = {
      id: string;
      readonly object: "articleGroup";
      title: LocaleString; // title of the articleGroup
      articleIdArray: string[]; // articleIdArray of the articles in this group
      articleGroupIdArray: string[]; // articleGroupIdArray of the articleGroups in this group
      createdAt: Date;
      propertyId: string | null; // propertyId of the articleGroup, if null, the article group will be shown in the general list, not the property specific list
      order: number; // order of the articleGroup in the list of articleGroups
    };

    export namespace Create {
      export type Params = {
        propertyId: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        articleGroup: JUHUU.ArticleGroup.Object;
      };
    }

    export namespace Retrieve {
      export type Params = {
        articleGroupId: string;
      };

      export type Options = {
        expand?: Array<"property">;
      } & JUHUU.RequestOptions;

      export type Response = {
        articleGroup: JUHUU.ArticleGroup.Object;
        property?: JUHUU.Property.Object;
      };
    }

    export namespace List {
      export type Params = {
        propertyId?: string;
        articleGroupId?: string | null;
      };

      export type Options = {
        limit?: number;
        skip?: number;
      } & JUHUU.RequestOptions;

      export type Response = {
        articleGroupArray: JUHUU.ArticleGroup.Object[];
        count: number;
        hasMore: boolean;
      };
    }

    export namespace Update {
      export type Params = {
        articleId: string;
        title?: LocaleString; // title of the article
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        articleGroup: JUHUU.ArticleGroup.Object;
      };
    }

    export namespace Delete {
      export type Params = {
        articleGroupId: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        articleGroup: JUHUU.ArticleGroup.Object;
      };
    }
  }

  export namespace Chat {
    export type Object = {
      id: string;
      readonly object: "chat";
      title: string | null; // title of the chat
      userId: string; // id of the user who owns the chat
      lastMessageAt: Date | null; // date of the last message in the chat
    };

    export namespace Create {
      export type Params = {
        userId: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        chat: JUHUU.Chat.Object;
      };
    }

    export namespace Retrieve {
      export type Params = {
        chatId: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        chat: JUHUU.Chat.Object;
      };
    }

    export namespace List {
      export type Params = {
        userId?: string;
      };

      export type Options = {
        limit?: number;
        skip?: number;
      } & JUHUU.RequestOptions;

      export type Response = {
        chatArray: JUHUU.Chat.Object[];
        count: number;
        hasMore: boolean;
      };
    }

    export namespace Update {
      export type Params = {
        chatId: string;
        title?: string | null;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        chat: JUHUU.Chat.Object;
      };
    }

    export namespace GenerateTitle {
      export type Params = {
        chatId: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        chat: JUHUU.Chat.Object;
      };
    }

    export namespace Delete {
      export type Params = {
        chatId: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = JUHUU.Chat.Object;
    }

    export namespace Complete {
      export type Params = {
        chatId: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        chat: JUHUU.Chat.Object;
        chatMessageArray: JUHUU.ChatMessage.Object[];
      };
    }
  }

  export namespace ChatMessage {
    type Base = {
      id: string;
      readonly object: "chatMessage";
      createdAt: Date; // date of the last message in the chat
      message: string; // message of the chatMessage in the original language
      imageArray: string[]; // translated message of the chatMessage
      chatId: string; // id of the chat where the message was sent
      context: {
        articleIdArray?: string[]; // array of string that are article IDs
        ownerPropertyId?: string; // id of the property the user has selected in the dashboard
        userName?: string; // name of the user
        userGroup?: UserGroup; // group of the user
        platform?: Platform; // platform of the user
        frontend?: Frontend; // frontend the user uses to chat
      } | null; // context of the message
      deleted: boolean; // true if the message was deleted
      edited: boolean; // true if the message was edited
      senderName: string;
    };

    export interface UserChatMessage extends Base {
      type: "user";
      userId: string;
    }

    export interface AiChatMessage extends Base {
      type: "ai";
      rating: "good" | "bad" | null; // thumbs up or thumbs down
      feedbackText: string | null; // null if no feedback
    }

    export type Object = AiChatMessage | UserChatMessage;

    export namespace Create {
      export type Params = {
        userId: string;
        message: string;
        chatId: string;
        context?: JUHUU.ChatMessage.Object["context"];
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        chatMessage: JUHUU.ChatMessage.Object;
      };
    }

    export namespace Retrieve {
      export type Params = {
        chatMessageId: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        chatMessage: JUHUU.ChatMessage.Object;
      };
    }

    export namespace List {
      export type Params = {
        limit?: number;
        skip?: number;
        userId?: string;
        chatId?: string;
      };

      export type Options = {
        limit?: number;
        skip?: number;
      } & JUHUU.RequestOptions;

      export type Response = {
        chatMessageArray: JUHUU.ChatMessage.Object[];
      };
    }

    export namespace Update {
      export type Params = {
        chatMessageId: string;
        rating?: JUHUU.ChatMessage.AiChatMessage["rating"];
        message?: string;
        feedbackText?: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        chatMessage: JUHUU.ChatMessage.Object;
      };
    }

    export namespace Delete {
      export type Params = {
        chatMessageId: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = JUHUU.ChatMessage.Object;
    }
  }

  export namespace Tariff {
    export type Object = {
      id: string;
      name: LocaleString;
      propertyId: string;
      reminderEnabled: boolean;
      reminderPercentage: number;
      currencyCode: CurrencyCode;
      amount: number[]; // set interval with "interval"
      continue: number;
      interval: number; // in seconds
      duration: number; // number of seconds the session can be active. After this time; the session will be forcefully terminated
      autoRenewMode: AutoRenewMode; // autoRenewMode has to be the same for all tarifs of the same link
      roundToMidnight: boolean; // if true; the session will be rounded to the next midnight; previously "timeReference"
      autoRenewManualEnabled: boolean; // if true; the user can enable autoRenew manually
      manualTerminationEnabled: boolean; // if true; the user can terminate the session manually
      salesTaxPercentage: number;
      serviceFeePercentage: number; // once the amount for the tariff is calculated the service fee is also calculated and added to the amount yielding the total amount
      serviceFeeMin: number; // minimum amount of the serviceFee
      serviceFeeMax: number; // maximum amount of the serviceFee
      shortDescription: LocaleString | null;
      longDescription: LocaleString | null;
    };

    export namespace Create {
      export type Params = {
        propertyId: string;
        duration?: string;
        name?: string;
        amount?: number[];
        continue?: number;
        currencyCode?: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        tariff: JUHUU.Tariff.Object;
      };
    }

    export namespace Retrieve {
      export type Params = {
        tariffId: string;
      };

      export type Options = {
        expand?: Array<"property">;
      } & JUHUU.RequestOptions;

      export type Response = {
        tariff: JUHUU.Tariff.Object;
        property?: JUHUU.Property.Object;
      };
    }

    export namespace List {
      export type Params = {
        propertyId?: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = JUHUU.Tariff.Object[];
    }

    export namespace Update {
      export type Params = {
        tariffId: string;
        reminderEnabled?: boolean;
        reminderPercentage?: number;
        currencyCode?: CurrencyCode;
        amount?: number[];
        continue?: number;
        interval?: number;
        name?: LocaleString;
        duration?: number;
        autoRenewMode?: AutoRenewMode;
        roundToMidnight?: boolean;
        autoRenewManualEnabled?: boolean;
        manualTerminationEnabled?: boolean;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        tariff: JUHUU.Tariff.Object;
      };
    }

    export namespace Delete {
      export type Params = {
        tariffId: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = JUHUU.Tariff.Object;
    }
  }

  export namespace Survey {
    export type Object = {
      id: string;
      starRating: StarRating;
      userId: string;
      writtenFeedback: string | null;
      propertyId: string;
      sessionId: string;
    };
  }

  export namespace LicenseTemplate {
    type Base = {
      id: string;
      readonly object: "licenseTemplate";
      name: LocaleString;
      description: LocaleString;
      obtainDescription: LocaleString;
    };

    export interface RegexLicenseTemplate extends Base {
      type: "regex";
      regex: string;
      propertyId: string | null;
    }

    export interface AutomaticLicenseTemplate extends Base {
      type: "automatic";
    }

    export interface UrlLicenseTemplate extends Base {
      type: "url";
      url: PlatformString;
      propertyId: string | null; // if the propertyId is null, the licenseTemplate is managed by the system and can be used by everyone
      attachRedirectUrl: boolean; // if true, the app or web app will attach a redirect url parameter to the url
      contentWarning: boolean; // if true, the app displays an alert that the user will be forwarded to a third-party website
      attachUserId: boolean; // if true, the app attaches the userId to the url
      attachPropertyId: boolean; // if true, the app attaches the propertyId to the url
      linkText: LocaleString;
    }

    export interface StripeIdentityLicenseTemplate extends Base {
      type: "stripeIdentity";
      url: string;
    }

    export type Object =
      | AutomaticLicenseTemplate
      | RegexLicenseTemplate
      | UrlLicenseTemplate
      | StripeIdentityLicenseTemplate;

    export namespace Create {
      export type Params = {
        propertyId: string;
        name?: LocaleString;
        type: JUHUU.LicenseTemplate.Object["type"];
        regex?: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        licenseTemplate: JUHUU.LicenseTemplate.Object;
      };
    }

    export namespace Retrieve {
      export type Params = {
        licenseTemplateId: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        licenseTemplate: JUHUU.LicenseTemplate.Object;
        property: JUHUU.Property.Object;
      };
    }

    export namespace List {
      export type Params = {
        limit?: number;
        skip?: number;
        propertyId?: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        licenseTemplateArray: JUHUU.LicenseTemplate.Object[];
      };
    }

    export namespace RegexValidate {
      export type Params = {
        userId: string;
        licenseTemplateId: string;
        text: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        licenseTemplate: JUHUU.LicenseTemplate.Object;
      };
    }

    export namespace Delete {
      export type Params = {
        licenseTemplateId: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = JUHUU.LicenseTemplate.Object;
    }
  }

  export namespace Property {
    type Base = {
      id: string;
      readonly object: "property";
      email: string | null;
      phone: string | null;
      ownerUserIdArray: string[];
      name: string;
      website: string | null;
      faqUrl: string | null;
      bannerImageLight: string | null; // image that is being displayed when the property is viewed
      bannerImageDark: string | null;
      iconLight: string | null; // url of image is used as a small icon for the property for previews such as the list of properties
      iconDark: string | null;
      version: number;
      colorScheme: ColorScheme;
      contactUrl: string | null;
    };

    export interface Internal extends Base {
      type: "internal";
      legalName: string | null;
      emailSignature: string | null;
      billingAddress: Address | null;
      taxCodeArray: TaxCode[];
      invoiceImage: string;
      invoiceNumberPrefix: string;
      stripeConnectedAccountId: string | null;
      payoutPostProcessIdentifier: "oebbV1" | null;
      iban: string;
      bic: string;
      automaticPayoutsEnabled: boolean;
      payoutCurrencyCode: CurrencyCode;
      timeZone: TimeZone;

      /**
       * Used to charge the property
       */
      stripeCustomerId: string | null;

      /**
       * Email only used for Stripe
       */
      stripeEmail: string | null;

      /**
       * Timestamp of the next subscription update
       * A subscription update retrieves all the information of
       * a property that it will be charged for and then updates
       * the stripe subscription with the new information.
       */
      nextSubscriptionUpdateAt: Date | null;

      /**
       * ID of the subscription from stripe
       * If null, the property is not subscribed to a plan
       */
      stripeSubscriptionId: string | null;

      subscriptionStatus:
        | "manual"
        | "inactive"
        | "waitingForActivationConfirmation"
        | "active"
        | "waitingForExpiry";

      capabilityArray: Capability[];

      agreement: {
        isAccepted: boolean;
        currentAgreement: string | null;
        previousAgreements: string[];
        acceptedAt: Date | null;
        acceptedByUserId: string | null;
        acceptedByUserEmail: string | null;
        acceptedByUserName: string | null;
      };
    }

    export interface External extends Base {
      type: "external";
    }

    export type Object = Internal | External;

    export namespace Create {
      export type Params = {
        userId?: string;
        name: string;
        type?: JUHUU.Property.Object["type"];
      };

      export type Options = {};

      export type Response = {
        property: JUHUU.Property.Object;
      };
    }

    export namespace Retrieve {
      export type Params = {
        propertyId: string;
      };

      export type Options = {};

      export type Response = {
        property: JUHUU.Property.Object;
      };
    }

    export namespace List {
      export type Params = {
        userId?: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = JUHUU.Property.Object[];
    }

    export namespace RetrieveStripeConnectPortalUrl {
      export type Params = {
        propertyId: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        url: string;
      };
    }

    export namespace RetrieveStripeCustomerPortalUrl {
      export type Params = {
        propertyId: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        url: string;
      };
    }

    export namespace RetrieveStripeSubscriptionStartUrl {
      export type Params = {
        propertyId: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        url: string;
      };
    }

    export namespace EnableCapability {
      export type Params = {
        propertyId: string;
        capabilityType: Capability["type"];
        acceptTermsThatApplyToThatCapability: boolean;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        property: JUHUU.Property.Object;
      };
    }

    export namespace AcceptLatestAgreement {
      export type Params = {
        propertyId: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        property: JUHUU.Property.Object;
      };
    }

    export namespace Update {
      export type Params = {
        propertyId: string;
        name?: string;
        legalName?: string;
        billingAddress?: Address | null;
        email?: string;
        website?: string;
        phone?: string;
        faqUrl?: string;
        colorScheme?: Partial<ColorScheme>;
        contactUrl?: string;
        stripeEmail?: string;
        payoutCurrencyCode?: CurrencyCode;
        invoiceNumberPrefix?: string;
        timeZone?: TimeZone;
        languageCode?: LanguageCode;
        emailSignature?: string;
        taxCodeArray?: TaxCode[];
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        property: JUHUU.Property.Object;
      };
    }

    export namespace Onboarding {
      export type Params = {
        logo: string;
        primaryColor: string;
        backgroundColor: string;
        name: string;
        eligibleToCreateOnBehalfOfBusiness: boolean;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        property: JUHUU.Property.Object;
      };
    }
  }

  export namespace Point {
    type Base = {
      id: string;
      readonly object: "point";
      location: GeoPoint;
      altitudeRange: [number, number]; // from, to
      invalidAt: Date | null;
      purposeArray: Purpose[];
    };

    export interface Single extends Base {
      type: "single";
      source: "fluctuo" | null;
      referenceObject: "location";
      referenceObjectId: string;
      iconLight: string | null; // image that is being displayed on the map
      iconDark: string | null; // if null, category or modality icon is always shown
      utilization: Utilization | null;
      visualPriority: VisualPriority;
    }

    export interface Aggregation extends Base {
      type: "aggregation";
    }

    export type Object = Single | Aggregation;

    export namespace Map {
      export type Params = {
        categoryArray: Category[];
        modalityArray: Modality[];
        sectorArray: string[];
        longitudeTopLeft: number;
        latitudeTopLeft: number;
        longitudeBottomRight: number;
        latitudeBottomRight: number;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = JUHUU.Point.Object[];
    }

    export namespace List {
      export type Params = {
        propertyId?: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = JUHUU.Point.Object[];
    }
  }

  export namespace Payout {
    export type Object = {
      id: string;
      status: PayoutStatus;
      propertyId: string;
      createdAt: Date;
      fromDate: Date;
      toDate: Date;
      amountCapturedTotal: number; // amount that was captured during the month (transferPaymentIdArray only)
      amountToPayoutTotal: number; // amount that was or will be payed out to the property (transferPaymentIdArray only)
      serviceFeeTotal: number; // sum of all serviceFee of all payments of that payout (transferPaymentIdArray only)
      transactionFeeTotal: number; // amount that was payed to stripe as fees. (transferPaymentIdArray only). Sum of all fees of all paymentIntents that were used to capture the amountCapturedTotal
      transferPaymentIdArray: string[]; // array of paymentIds that will be transfered to the property
      periodPaymentIdArray: string[]; // array of paymentIds that whos invoice was created during the period of the payout
      stripePayoutFee: number | null; // will be set after the payout was received by the property
      stripeTransferId: string | null; // will be set when the amountToPayoutTotal is transfered from the stripe platform account to a connected account
      stripeTransferFee: number | null; // fee that stripe charged us for transfering the funds to the connected account
      stripeTransferBalanceTransactionId: string | null; // will be set when the amountToPayoutTotal is transfered from the stripe platform account to a connected account
      stripePayoutId: string | null; // will be set when the amountToPayoutTotal is payed out to the property
      stripePayoutBalanceTransactionId: string | null; // will be set when the amountToPayoutTotal is payed out to the property
      lowestTransferPaymentNumber: number;
      highestTransferPaymentNumber: number;
      approvedByUserId: string | null;
      createdBy: "propertyAdmin" | "system";
      createdByUserId: string | null;
      statementDescription: string; // information that will be shown on the bank statement of the property
      postingRowArray: PostingRow[];
      receiver: Party;
      number: number; // number of the payout; this number does not start new with every property
      currencyCode: CurrencyCode;
      version: number;
      creditNotePdfId: string;
      stripeConnectedAccountId: string;
    };

    export namespace Retrieve {
      export type Params = {
        payoutId: string;
      };

      export type Options = {
        expand?: Array<"property">;
      } & JUHUU.RequestOptions;

      export type Response = {
        payout: JUHUU.Payout.Object;
        property?: JUHUU.Property.Object;
      };
    }

    export namespace List {
      export type Params = {
        propertyId?: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = JUHUU.Payout.Object[];
    }
  }

  export namespace Payment {
    export type Object = {
      id: string;
      version: number;
      provider: PaymentServiceProvider | null;
      status: PaymentStatus;
      amountAuthorized: number; // amount of the payment that was initially authorized
      amountAuthorizedWithoutServiceFee: number; // amount of the payment that was authorized without the service fee
      amountFinal: number | null; // amount that was withdrawn from the user
      amountCaptured: number; // amount that was captured from the user
      amountToPayout: number | null;
      createdAt: Date;
      billingAddress: DeepNullable<Address>;
      invoicePdfId: string | null;
      providerPaymentId: string;
      userId: string; // user who payed
      reason: PaymentReason; // reason for the payment
      transactionFee: number | null; // fees that the merchant took to collect the amountCaptured
      paymentMethod: PaymentMethod | null;
      estimatedReadyForPayoutAt: Date | null;
      propertyId: string;
      payoutId: string | null;
      taxCodeArray: TaxCode[];
      accountingAreaId: string;
      currencyCode: CurrencyCode;
      serviceFee: number | null; // difference between the amountCaptured and the amountToPayout. This should always be higher than the transactionFees in order for us to make revenue
      scheduledCaptureAt: Date | null; // date at which the payment will be captured. Depends on the payment method used. https://docs.stripe.com/payments/place-a-hold-on-a-payment-method#auth-capture-limitations
      automaticAmountFinalizationAt: Date | null; // date at which the payment will be automatically finalized with the amountAuthorized if by that time the amount was not yet finalized
      serviceFeePercentage: number;
      serviceFeeMin: number;
      serviceFeeMax: number;
      salesTaxPercentage: number; // 20 for Austria
      number: number | null; // for every property a unique number
      reasonDescription: string | null; // text displayed on the users invoice
      amountCapturedNet: number | null; // amount that was captured from the user in the currency of the property
      taxAmount: number | null; // portion of the amountCaptured that is tax
      stripeBalanceTransactionId: string | null; // stripe balance transaction id (used to check if the payment was captured)
      capturedAt: Date | null; // date at which the payment was captured
      capturedBy: "system" | "propertyAdmin" | null; // who captured the payment
      capturedByUserId: string | null; // user who captured the payment
      isPartiallyOrFullyRefunded: boolean; // true if this payment was partially or fully refunded
    };

    export namespace Retrieve {
      export type Params = {
        paymentId: string;
      };

      export type Options = {
        expand?: Array<"property">;
      } & JUHUU.RequestOptions;

      export type Response = {
        payment: JUHUU.Payment.Object;
        property?: JUHUU.Property.Object;
      };
    }

    export namespace Search {
      export type Params = {
        providerPaymentId?: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        payment: JUHUU.Payment.Object;
      };
    }

    export namespace List {
      export type Params = {
        propertyId?: string;
        userId?: string;
        statusArray?: JUHUU.Payment.Object["status"][];
        createdAt?: {
          gte?: number;
          lte?: number;
        };
        limit?: number;
        skip?: number;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = JUHUU.Payment.Object[];
    }

    export namespace RetrieveInvoiceUrl {
      export type Params = {
        paymentId: string;
      };

      export type Options = {} & JUHUU.RequestOptions;

      export type Response = {
        invoiceUrl: string;
      };
    }

    export namespace Capture {
      export type Params = {
        paymentId: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        payment: JUHUU.Payment.Object;
      };
    }

    export namespace Cancel {
      export type Params = {
        paymentId: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        payment: JUHUU.Payment.Object;
      };
    }

    export namespace Tokens {
      export type Params = {
        paymentId: string;
      };

      export type Options = {};

      export type Response = {
        payment: JUHUU.Payment.Object;
        tokens: {
          ephemeralKey: string;
          customer: string;
          publishableKey: string;
          clientSecret: string;
        };
      };
    }
  }

  export namespace PaymentRefund {
    export type Object = {
      id: string;
      version: number;
      provider: PaymentServiceProvider | null; // always the same es the service provider of the payment
      status: PaymentRefundStatus;
      paymentId: string;
      propertyId: string;
      currencyCode: CurrencyCode;
      number: number; // either a number of the property's accounting area or our accounting area (the one that is used for the payouts e.g. J0000149)
      paymentNumberToRefund: number; // number of the payment that is refunded
      createdAt: Date;
      userId: string; // user who payed and received the refund
      reason: PaymentRefundReason; // reason for the paymentRefund
      transactionFee: number; // fees that the merchant took to process the refund
      serviceFee: number; // service fee that JUHUU adds to the property's payout (either 0 or =transactionFee; if 0, JUHUU covers the costs for the refund; if =transactionFee, the property covers the costs)
      billingAddress: DeepNullable<Address>;
      taxCodeArray: TaxCode[];
      accountingAreaId: string;
      estimatedArrivalAt: Date;
      postingRowArray: PostingRow[]; // text displayed on the users invoice
      amountToArriveAtUser: number; // amount of the paymentRefund (the amount that will be refunded to the user)
      invoicePdfId: string;
      providerPaymentRefundId: string;
      paymentMethod: PaymentMethod | null; // payment method the user will be refunded with (always the same as the payment method of the payment)
      payoutId: string | null; // always null, if costs are covered by JUHUU
    };

    export namespace Create {
      export type Params = {
        paymentId: string;
        amountToArriveAtUser: number;
        reason: JUHUU.PaymentRefund.Object["reason"];
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        payment: JUHUU.Payment.Object;
      };
    }

    export namespace Retrieve {
      export type Params = {
        paymentRefundId: string;
      };

      export type Options = {
        expand?: Array<"property">;
      } & JUHUU.RequestOptions;

      export type Response = {
        paymentRefund: JUHUU.PaymentRefund.Object;
        property?: JUHUU.Property.Object;
      };
    }

    export namespace List {
      export type Params = {
        propertyId?: string;
        userId?: string;
        statusArray?: JUHUU.Payment.Object["status"][];
        createdAt?: {
          gte?: number;
          lte?: number;
        };
        limit?: number;
        skip?: number;
        paymentId?: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = JUHUU.PaymentRefund.Object[];
    }

    export namespace RetrieveInvoiceUrl {
      export type Params = {
        paymentRefundId: string;
      };

      export type Options = {} & JUHUU.RequestOptions;

      export type Response = {
        invoiceUrl: string;
      };
    }
  }

  export namespace Location {
    type Base = {
      id: string;
      readonly object: "location";
      logoLight: string | null;
      logoDark: string | null;
      location: GeoPoint | null;
      invalidAt: Date | null; // timestamp this location is no longer valid and can be deleted from the database
      purposeArray: Purpose[];
      circumstanceArray: Circumstance[];
      propertyId: string;
      name: string;
      source: "fluctuo" | null;
      rentOfferArray: Offer[];
      reservationOfferArray: Offer[];
      iconLight: string | null;
      iconDark: string | null;
      address: Address | null;
      termId: string | null;
      timeZone: TimeZone | null;
      version: number;
      devicePermissionArray: DevicePermission[];
      disabled: boolean; // if disabled is true, no new sessions can be created
      disabledBy: "propertyAdmin" | "deviceNodeArray" | null;
      visible: boolean; // if false, the location is accessible but is not shown in the UI of the app
      incidentTemplateIdArray: string[]; // array of incident template ids that are assigned to this location
    };

    export interface RentableDeviceGroup extends Base {
      type: "rentableDeviceGroup";
      concurrentSessionIdArray: string[]; // sessions that are currently active
      maximumConcurrentSessions: number; // number of maximum concurrent sessions that are allowed
      surveyEnabled: boolean;
      accountingAreaId: string;
      deviceIdArray: string[];
      locationAssignmentStrategy: "kochUndPartnerBikeTower" | "none";
    }

    export interface RentableDevice extends Base {
      type: "rentableDevice";
      source: "fluctuo" | null;
      concurrentSessionIdArray: string[]; // sessions that are currently active
      maximumConcurrentSessions: number; // number of maximum concurrent sessions that are allowed
      surveyEnabled: boolean;
      accountingAreaId: string;
      rentableDeviceGroupLocationId: string | null;
      deviceId: string | null;
    }

    export interface UseableDevice extends Base {
      type: "useableDevice";
      deviceId: string;
      useableDeviceGroupLocationId: string | null;
    }

    export type Object = RentableDeviceGroup | RentableDevice | UseableDevice;

    export namespace Create {
      export type Params = {
        propertyId: string;
        name?: string;
        type: JUHUU.Location.Object["type"];
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        location: JUHUU.Location.Object;
      };
    }

    export namespace Retrieve {
      export type Params = {
        locationId: string;
      };

      export type Options = {
        expand?: Array<"property" | "tariffArray">;
      } & JUHUU.RequestOptions;

      export type Response = {
        location: JUHUU.Location.Object;
        property: JUHUU.Property.Object;
        tariffArray: JUHUU.Tariff.Object[];
      };
    }

    export namespace List {
      export type Params = {
        rentableDeviceGroupLocationId?: string | null;
        propertyId?: string;
        visible?: boolean;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = JUHUU.Location.Object[];
    }

    export namespace Update {
      export type Params = {
        locationId: string;
        name?: string;
        address?: Partial<Address>;
        deviceIdArray?: string[];
        deviceId?: string;
        maximumConcurrentSessions?: number;
        surveyEnabled?: boolean;
        accountingAreaId?: string;
        latitude?: number;
        longitude?: number;
        purposeArray?: Purpose[];
        circumstanceArray?: Circumstance[];
        rentOfferArray?: Offer[];
        reservationOfferArray?: Offer[];
        disabled?: boolean; // if disabled is true, no new sessions can be created
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        location: JUHUU.Location.Object;
      };
    }

    export namespace Delete {
      export type Params = {
        locationId: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = JUHUU.Location.Object;
    }
  }

  export namespace Product {
    export type Object = {
      id: string;
      readonly object: "product";
      name: string; // name or title of product
      propertyId: string; // id of property that offers this product
      version: number; // version number of this typescript interface
      previewText: LocaleString; // text that is displayed on product overview page
      description: LocaleString; // text that is displayed if a user clicks on product
      bannerImageDark: string[]; // array of urls to images for darkmode
      bannerImageLight: string[]; // array of urls to images for lightmode
      model3d: string | null; // url to a 3d model of product
      datasheet: DeepNullable<LocaleString>; // url to a datasheet of product
      highlightArray: LocaleString[];
      purposeArray: Purpose[];
      technologyArray: Technology[]; // in the future maybe "mechanical", "virtual", ...
      articleId: string | null; // id to an article with more information on a product
    };

    export namespace Create {
      export type Params = {
        propertyId: string;
        name?: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        product: JUHUU.Product.Object;
      };
    }

    export namespace Retrieve {
      export type Params = {
        productId: string;
      };

      export type Options = {
        expand: Array<"property">;
      } & JUHUU.RequestOptions;

      export type Response = {
        product: Product.Object;
      };
    }

    export namespace List {
      export type Params = {
        propertyId?: string;
        categoryArray?: Category[];
        modalityArray?: Modality[];
        sectorArray?: Sector[];
        technologyArray?: Technology[];
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = Product.Object[];
    }

    export namespace Update {
      export type Params = {
        productId: string;
        name?: string;
        previewText?: LocaleString; // text that is displayed on the product overview page
        description?: LocaleString; // text that is displayed once a user clicks on product
        highlightArray?: LocaleString[];
        purposeArray?: Purpose[];
        technologyArray?: Technology[]; // in the future maybe "mechanical", "virtual", ...
        articleId?: string | null; // id to an article with more information
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        product: JUHUU.Product.Object;
      };
    }

    export namespace Delete {
      export type Params = {
        productId: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = JUHUU.Product.Object;
    }
  }

  export namespace Link {
    type Base = {
      id: string;
      readonly object: "link";
      propertyId: string;
      referenceObject: "location";
      referenceObjectId: string;
      name: string;
    };

    export interface FiveLetterQr extends Base {
      type: "fiveLetterQr";
      fiveLetterQr: string;
    }

    export type Object = FiveLetterQr;

    export namespace Create {
      export type Params = {
        propertyId: string;
        name?: string;
        fiveLetterQr?: string;
        type: JUHUU.Link.Object["type"];
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        link: JUHUU.Link.Object;
      };
    }

    export namespace Retrieve {
      export type Params = {
        linkId: string;
      };

      export type Options = {
        expand: Array<"property">;
      } & JUHUU.RequestOptions;

      export type Response = {
        link: JUHUU.Link.Object;
        property?: JUHUU.Property.Object;
      };
    }

    export namespace Search {
      export type Params = {
        q: string;
      };

      export type Options = {} & JUHUU.RequestOptions;

      export type Response = {
        linkArray: JUHUU.Link.Object[];
        count: number;
        hasMore: boolean;
      };
    }

    export namespace List {
      export type Params = {
        fiveLetterQr?: string;
        propertyId?: string;
      };

      export type Options = {};

      export type Response = JUHUU.Link.Object[];
    }

    export namespace Update {
      export type Params = {
        linkId: string;
        name?: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        link: JUHUU.Link.Object;
      };
    }

    export namespace Delete {
      export type Params = {
        linkId: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = JUHUU.Link.Object;
    }
  }

  export namespace Device {
    export type Object = {
      id: string;
      readonly object: "device";
      propertyId: string;
      name: string;
      description: string | null;
      status: DeviceStatus;
      parameterIdArray: string[];
      version: number;
      deviceTemplateId: string;
      source: "fluctuo" | null;
      location: GeoPoint | null;
      invalidAt: Date | null;
      connectorId: string | null; // connector that is used to send messages to the device, null if the device has no connector
      connectorParameter: string | null; // unique identifier that the connector uses to differentiate between the devices if a connector is used by multiple devices
      disabled: boolean; // if disabled is true, the device cannot be used by users which are not property admins
      disabledBy: "propertyAdmin" | "nodeArray" | null;
      incidentTemplateIdArray: string[]; // array of incident template ids that are assigned to this device
    };

    export namespace Create {
      export type Params = {
        propertyId: string;
        acceptTerms: boolean;
        name?: string;
        deviceTemplateId: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        device: JUHUU.Device.Object;
      };
    }

    export namespace Retrieve {
      export type Params = {
        deviceId: string;
        source?: "fluctuo" | null;
      };

      export type Options = {
        expand?: Array<"property" | "deviceTemplate" | "connector">;
      } & JUHUU.RequestOptions;

      export type Response = {
        device: JUHUU.Device.Object;
        deviceTemplate?: JUHUU.DeviceTemplate.Object;
        property?: JUHUU.Property.Object;
        connector?: JUHUU.Connector.Object;
      };
    }

    export namespace List {
      export type Params = {
        statusArray?: DeviceStatus[];
        propertyId?: string;
        deviceTemplateId?: string;
      };

      export type Options = {
        limit?: number;
        skip?: number;
      } & JUHUU.RequestOptions;

      export type Response = {
        deviceArray: JUHUU.Device.Object[];
        count: number;
        hasMore: boolean;
      };
    }

    export namespace Update {
      export type Params = {
        deviceId: string;
        name?: string;
        status?: JUHUU.Device.Object["status"];
        description?: string | null;
        latitude?: number | null;
        longitude?: number | null;
        connectorId?: string | null; // connector that is used to send messages to the device, null if the device has no connector
        connectorParameter?: string | null; // unique identifier that the connector uses to differentiate between the devices if a connector is used by multiple devices
        disabled?: boolean; // if disabled is true, the device cannot be used by users which are not property admins
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        device: JUHUU.Device.Object;
      };
    }

    export namespace Realtime {
      export type Params = {
        deviceId: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        onUpdated: (
          callback: (message: {
            payload: {
              after: JUHUU.Device.Object;
              before: JUHUU.Device.Object;
              changedFields: string[];
            };
          }) => void
        ) => void;
        close: () => void;
      };
    }

    export namespace Message {
      export type Params = {
        deviceId: string;
        message: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = void;
    }

    export namespace NodeExecute {
      export type Params = {
        deviceId: string;
        nodeId: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        nextNodeIdArray: string[];
      };
    }

    export namespace Delete {
      export type Params = {
        deviceId: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = JUHUU.Device.Object;
    }
  }

  export namespace Connector {
    type Base = {
      id: string;
      readonly object: "connector";
      status: "online" | "offline";
      description: string | null;
      name: string;
      propertyId: string;
      lastOutboundAt: Date | null;
      lastInboundAt: Date | null;
      connectionMode: "alwaysOnline" | "temporaryOnline";
      version: number;
      simId: string | null; // null, if no sim card is installed or the sim card should not be tracked by us
    };

    export interface Mqtt extends Base {
      type: "mqtt";
      username: string;
      password: string;
      clientId: string;
      host: string;
      port: number;
      mqttRetain: boolean;
      mqttQos: "0" | "1" | "2";
      acls: AccessControlListElement[];
    }

    export interface BoldLock extends Base {
      type: "boldLock";
      boldClientId: string;
      boldClientSecret: string;
      boldOrganizationId: number;
      boldDeviceId: number; // this is the "deviceId" in the bold documentation
    }

    export interface Tapkey extends Base {
      type: "tapkey";
      tapkeyBase64PysicalLockId: string; // https://developers.tapkey.io/mobile/concepts/lock_ids/#tlcp-lock-id
      tapkeyOwnerAccountId: string;
      tapkeyIpId: string;
      tapkeyBoundLockId: string;
    }

    export type Object = Mqtt | BoldLock | Tapkey;

    export namespace Create {
      export type Params = {
        propertyId: string;
        name?: string;
        username?: string;
        password?: string;
        clientId?: string;
        host?: string;
        port?: number;
        mqttRetain?: boolean;
        mqttQos?: "0" | "1" | "2";
        description?: string;
        simId?: string;
        connectionMode?: "alwaysOnline" | "temporaryOnline";
        type: JUHUU.Connector.Object["type"];
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        connector: JUHUU.Connector.Object;
      };
    }

    export namespace Retrieve {
      export type Params = {
        connectorId: string;
      };

      export type Options = {
        expand: Array<"property">;
      } & JUHUU.RequestOptions;

      export type Response = {
        connector: JUHUU.Connector.Object;
      };
    }

    export namespace List {
      export type Params = {
        propertyId?: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = JUHUU.Connector.Object[];
    }

    export namespace Update {
      export type Params = {
        connectorId: string;
        name?: string;
        description?: string | null;
        connectionMode?: "alwaysOnline" | "temporaryOnline";
        simId?: string | null; // null, if no sim card is installed or the sim card should not be tracked by us
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        connector: JUHUU.Connector.Object;
      };
    }

    export namespace Delete {
      export type Params = {
        connectorId: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = JUHUU.Connector.Object;
    }
  }

  export namespace Event {
    type Base = {
      id: string;
      readonly object: "event";
      createdAt: string;
    };

    export interface CreatePayment extends Base {
      type: "payment.create";
      payment: JUHUU.AccountingArea.Object;
    }

    export type Object = CreatePayment;

    export namespace Retrieve {
      export type Params = {
        eventId: string;
      };

      export type Options = {
        expand: Array<"property">;
      } & JUHUU.RequestOptions;

      export type Response = {
        event: JUHUU.Event.Object;
      };
    }

    export namespace List {
      export type Params = {
        propertyId?: string;
        paymentId?: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        eventArray: JUHUU.Event.Object[];
        count: number;
        hasMore: boolean;
      };
    }
  }

  export namespace Incident {
    type Base = {
      id: string;
      readonly object: "incident";
      severity: "low" | "medium" | "high";
      createdBy: "propertyAdmin" | "system" | "user" | "nodeArray";
      propertyId: string; // id of the property who owns the article. If null, the article does not belong to any property
      createdByUserId: string | null;
      status:
        | "waitingForPropertyConfirmation"
        | "waitingForResolvement"
        | "rejected"
        | "resolved";
      title: string;
      createdAt: Date;
      description: string;
      imageUrlArray: string[];
      incidentTemplateId: string | null;
    };

    export interface Location extends Base {
      type: "location";
      locationId: string;
    }

    export interface Device extends Base {
      type: "device";
      deviceId: string;
    }

    export type Object = Location | Device;

    export namespace Create {
      export type Params = {
        propertyId: string;
        description?: JUHUU.Incident.Object["description"];
        severity?: JUHUU.Incident.Object["severity"];
        deviceId?: string;
        locationId?: string;
        incidentTemplateId?: string;
        title?: JUHUU.Incident.Object["title"];
        type: JUHUU.Incident.Object["type"];
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        connector: JUHUU.Connector.Object;
      };
    }

    export namespace Retrieve {
      export type Params = {
        incidentId: string;
      };

      export type Options = {
        expand: Array<"property">;
      } & JUHUU.RequestOptions;

      export type Response = {
        incident: JUHUU.Incident.Object;
      };
    }

    export namespace List {
      export type Params = {
        propertyId?: string;
        statusArray?: JUHUU.Incident.Object["status"][];
      };

      export type Options = {
        limit?: number;
        skip?: number;
      } & JUHUU.RequestOptions;

      export type Response = {
        incidentArray: JUHUU.Incident.Object[];
        hasMore: boolean;
        count: number;
      };
    }

    export namespace Update {
      export type Params = {
        incidentId: string;
        title?: JUHUU.Incident.Object["title"];
        status?: JUHUU.Incident.Object["status"];
        severity?: JUHUU.Incident.Object["severity"];
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        incident: JUHUU.Incident.Object;
      };
    }
  }

  export namespace IncidentTemplate {
    export type Object = {
      id: string;
      readonly object: "incidentTemplate";
      name: string;
      title: LocaleString;
      severity: "low" | "medium" | "high";
      description: LocaleString;
      propertyId: string;
      lastUpdatedAt: Date;
      createdAt: Date;
    };

    export namespace Create {
      export type Params = {
        propertyId: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        incidentTemplate: JUHUU.IncidentTemplate.Object;
      };
    }

    export namespace Retrieve {
      export type Params = {
        incidentTemplateId: string;
      };

      export type Options = {
        expand?: Array<"property">;
      } & JUHUU.RequestOptions;

      export type Response = {
        incidentTemplate: JUHUU.IncidentTemplate.Object;
        property?: JUHUU.Property.Object;
      };
    }

    export namespace List {
      export type Params = {
        propertyId?: string;
      };

      export type Options = {
        limit?: number;
        skip?: number;
      } & JUHUU.RequestOptions;

      export type Response = {
        incidentTemplateArray: JUHUU.IncidentTemplate.Object[];
        count: number;
        hasMore: boolean;
      };
    }

    export namespace Update {
      export type Params = {
        incidentTemplateId: string;
        title?: LocaleString;
        description?: LocaleString;
        name?: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        incidentTemplate: JUHUU.IncidentTemplate.Object;
      };
    }

    export namespace Delete {
      export type Params = {
        incidentTemplateId: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        incidentTemplate: JUHUU.IncidentTemplate.Object;
      };
    }
  }

  export namespace Parameter {
    type Base = {
      id: string;
      readonly object: "parameter";
      description: string | null;
      name: string | null;
      propertyId: string;
      lastUpdatedAt: Date | null;
      parameterAnomalyGroupIdArray: string[];
      createdAt: Date | null;
      reference: string | null;
    };

    export interface Text extends Base {
      type: "text";
      currentValue: string;
    }

    export interface Number extends Base {
      type: "number";
      currentValue: number;
    }

    export interface Enum extends Base {
      type: "enum";
      currentValue: string;
      enumArray: string[];
    }

    export interface Boolean extends Base {
      type: "boolean";
      currentValue: boolean;
    }

    export type Object = Number | Boolean | Enum | Text;

    export namespace Create {
      export type Params = {
        propertyId: string;
        type: JUHUU.Parameter.Object["type"];
        name?: string;
        description?: string;
        currentValue?: boolean | string | number;
        enumArray?: string[];
        reference?: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        parameter: JUHUU.Parameter.Object;
      };
    }

    export namespace Realtime {
      export type Params = {
        parameterId: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        onUpdated: (
          callback: (message: {
            payload: {
              after: JUHUU.Parameter.Object;
              before: JUHUU.Parameter.Object;
              changedFields: string[];
            };
          }) => void
        ) => void;
        close: () => void;
      };
    }

    export namespace Retrieve {
      export type Params = {
        parameterId: string;

        /**
         * Supply a device ID if your parameterId starts with 'device.'
         */
        deviceId?: string;
      };

      export type Options = {
        expand: Array<"property">;
      } & JUHUU.RequestOptions;

      export type Response = {
        parameter: JUHUU.Parameter.Object;
      };
    }

    export namespace List {
      export type Params = {
        propertyId?: string;
        parameterAnomalyGroupId?: string;
      };

      export type Options = {
        skip?: number;
        limit?: number;
      } & JUHUU.RequestOptions;

      export type Response = {
        parameterArray: JUHUU.Parameter.Object[];
        count: number;
        hasMore: boolean;
      };
    }

    export namespace Update {
      export type Params = {
        parameterId: string;

        /**
         * Supply a device ID if your parameterId starts with 'device.'
         */
        deviceId?: string;

        name?: string;
        currentValue?: string | boolean | number;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        parameter: JUHUU.Parameter.Object;
      };
    }

    export namespace Delete {
      export type Params = {
        parameterId: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        parameter: JUHUU.Parameter.Object;
      };
    }
  }

  export namespace ParameterAnomalyGroup {
    export type Object = {
      id: string;
      readonly object: "parameterAnomalyGroup";
      parameterAnomalyGroupTrackerId: string | null;
      propertyId: string;
      name: string;
    };

    export namespace Create {
      export type Params = {
        propertyId: string;
        parameterAnomalyGroupTrackerId?: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        parameterAnomalyGroup: JUHUU.ParameterAnomalyGroup.Object;
      };
    }

    export namespace Retrieve {
      export type Params = {
        parameterAnomalyGroupId: string;
      };

      export type Options = {
        expand?: Array<"property">;
      } & JUHUU.RequestOptions;

      export type Response = {
        parameterAnomalyGroup: JUHUU.ParameterAnomalyGroup.Object;
      };
    }

    export namespace List {
      export type Params = {
        propertyId?: string;
        parameterAnomalyGroupTrackerId?: string;
      };

      export type Options = {
        skip?: number;
        limit?: number;
      } & JUHUU.RequestOptions;

      export type Response = {
        parameterAnomalyGroupArray: JUHUU.ParameterAnomalyGroup.Object[];
        count: number;
        hasMore: boolean;
      };
    }

    export namespace Update {
      export type Params = {
        parameterAnomalyGroupId: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        parameterAnomalyGroup: JUHUU.ParameterAnomalyGroup.Object;
      };
    }

    export namespace Delete {
      export type Params = {
        parameterAnomalyGroupId: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        parameterAnomalyGroup: JUHUU.ParameterAnomalyGroup.Object;
      };
    }
  }

  export namespace ParameterAnomalyGroupTracker {
    export type Object = {
      id: string;
      readonly object: "parameterAnomalyGroupTracker";
      nextRunAt: Date | null;
      name: string;
      propertyId: string;
    };

    export namespace Create {
      export type Params = {
        propertyId: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        parameterAnomalyGroupTracker: JUHUU.ParameterAnomalyGroupTracker.Object;
      };
    }

    export namespace Retrieve {
      export type Params = {
        parameterAnomalyGroupTrackerId: string;
      };

      export type Options = {
        expand?: Array<"property">;
      } & JUHUU.RequestOptions;

      export type Response = {
        parameterAnomalyGroupTracker: JUHUU.ParameterAnomalyGroupTracker.Object;
      };
    }

    export namespace List {
      export type Params = {
        propertyId?: string;
      };

      export type Options = {
        skip?: number;
        limit?: number;
      } & JUHUU.RequestOptions;

      export type Response = {
        parameterAnomalyGroupTrackerArray: JUHUU.ParameterAnomalyGroupTracker.Object[];
        count: number;
        hasMore: boolean;
      };
    }

    export namespace Update {
      export type Params = {
        parameterAnomalyGroupTrackerId: string;
        name: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        parameterAnomalyGroupTracker: JUHUU.ParameterAnomalyGroupTracker.Object;
      };
    }

    export namespace Delete {
      export type Params = {
        parameterAnomalyGroupTrackerId: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        parameterAnomalyGroupTracker: JUHUU.ParameterAnomalyGroupTracker.Object;
      };
    }
  }

  export namespace ParameterHistory {
    type Base = {
      id: string;
      readonly object: "parameter";
      description: string | null;
      name: string | null;
      propertyId: string;
      createdAt: Date;
      reference: string | null;
    };

    export interface Text extends Base {
      type: "text";
      currentValue: string;
    }

    export interface Number extends Base {
      type: "number";
      currentValue: number;
    }

    export interface Enum extends Base {
      type: "enum";
      currentValue: string;
      enumArray: string[];
    }

    export interface Boolean extends Base {
      type: "boolean";
      currentValue: boolean;
    }

    export type Object = Number | Boolean | Enum | Text;

    export namespace Retrieve {
      export type Params = {
        parameterHistoryId: string;
      };

      export type Options = {
        expand?: Array<"property">;
      } & JUHUU.RequestOptions;

      export type Response = {
        parameterHistory: JUHUU.ParameterHistory.Object;
      };
    }

    export namespace List {
      export type Params = {
        propertyId?: string;
        parameterId?: string;
      };

      export type Options = {
        skip?: number;
        limit?: number;
      } & JUHUU.RequestOptions;

      export type Response = {
        parameterHistoryArray: JUHUU.ParameterHistory.Object[];
        count: number;
        hasMore: boolean;
      };
    }
  }

  export namespace DeviceTemplate {
    export type Object = {
      id: string;
      readonly object: "deviceTemplate";
      name: string; // z.B. BikeLoop V1
      propertyId: string;
      nodeArray: GraphNode[]; // nodes that are being executed when an event occurs
      userLayoutBlockArray: LayoutBlock[];
      userLayoutBlockActionButton: Layout.Button.General | null;
      maintenanceLayoutBlockArray: LayoutBlock[];
      maintenanceLayoutBlockActionButton: Layout.Button.General | null;
      source: "fluctuo" | null;
      invalidAt: Date | null;
      commandArray: Command[]; // commands that can be sent to the device and make it do something
      useQuickActionArray: Layout.PreviewButton[]; // quick actions that are shown before accessing the device in before the device was rented
      deviceImageDark: string;
      deviceImageLight: string;
      callToAction: LocaleString;
      devicePermissionArray: DevicePermission[];
    };

    export namespace Create {
      export type Params = {
        propertyId: string;
        name?: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        deviceTemplate: JUHUU.DeviceTemplate.Object;
      };
    }

    export namespace Retrieve {
      export type Params = {
        deviceTemplateId: string;
        source?: "fluctuo" | null;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        deviceTemplate: JUHUU.DeviceTemplate.Object;
      };
    }

    export namespace List {
      export type Params = {
        propertyId?: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = JUHUU.DeviceTemplate.Object[];
    }

    export namespace Delete {
      export type Params = {
        deviceTemplateId: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = JUHUU.DeviceTemplate.Object;
    }
  }

  export namespace Sim {
    export type Object = {
      id: string;
      readonly object: "sim";
      iccid: string | null;
      status: SimStatus;
      provider: "1nce" | null;
      countryCode: CountryCode | null;
      imei: string | null;
      propertyId: string;
      description: string | null;
      name: string;
      dataQuotaMax: number | null;
      dataQuotaCurrent: number | null;
      dataQuotaThresholdPercentage: number | null;
      providerUsername: string | null;
      providerPassword: string | null;
    };

    export namespace Create {
      export type Params = {
        propertyId: string;
        iccid?: string;
        name?: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        sim: JUHUU.Sim.Object;
      };
    }

    export namespace Retrieve {
      export type Params = {
        simId: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        sim: JUHUU.Sim.Object;
      };
    }

    export namespace List {
      export type Params = {
        propertyId?: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = JUHUU.Sim.Object[];
    }

    export namespace UpdateFromProvider {
      export type Params = {
        simId: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        sim: JUHUU.Sim.Object;
      };
    }

    export namespace Delete {
      export type Params = {
        simId: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = JUHUU.Sim.Object;
    }
  }

  export namespace ConnectorMessage {
    export type Object = {
      id: string;
      readonly object: "connectorMessage";
      message: string;
      connectorId: string;
      direction: "inbound" | "outbound";
      createdAt: Date;
      deviceId: string | null;
      propertyId: string;
    };

    export namespace Retrieve {
      export type Params = {
        connectorMessageId: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        connectorMessage: JUHUU.ConnectorMessage.Object;
      };
    }

    export namespace List {
      export type Params = {
        propertyId?: string;
        connectorId?: string;
      };

      export type Options = {
        skip?: number;
        limit?: number;
      } & JUHUU.RequestOptions;

      export type Response = JUHUU.ConnectorMessage.Object[];
    }
  }
}
