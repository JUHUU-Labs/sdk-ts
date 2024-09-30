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
  AutoRenewMode,
  Category,
  Circumstance,
  ColorScheme,
  Command,
  CountryCode,
  CurrencyCode,
  DeepNullable,
  DeviceStatus,
  Environment,
  FuelType,
  GeoPoint,
  GraphNode,
  LanguageCode,
  Layout,
  LayoutBlock,
  Modality,
  Offer,
  Parameter,
  Party,
  PaymentMethod,
  PaymentReason,
  PaymentServiceProvider,
  PaymentStatus,
  PayoutStatus,
  Person,
  Platform,
  PostingRow,
  PushToken,
  Sector,
  SimStatus,
  StarRating,
  TimeZone,
  Utilization,
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

export * from "./types/types";

export class Juhuu {
  constructor(config: JUHUU.SetupConfig) {
    this.sessions = new SessionsService(config);
    this.links = new LinksService(config);
    this.users = new UsersService(config);
    this.payments = new PaymentsService(config);
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
  }

  /**
   * Top Level Resources
   */
  readonly sessions: SessionsService;
  readonly links: LinksService;
  readonly users: UsersService;
  readonly payments: PaymentsService;
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
}

export namespace JUHUU {
  export interface SetupConfig {
    environment: Environment;
    getAccessToken: () => Promise<string | null>;
    onException: <T>(response: JUHUU.HttpResponse<T>) => Promise<"abort">;
    setAccessToken: (accessToken: string) => Promise<void>;
    getRefreshToken: () => Promise<string | null>;
    setRefreshToken: (refreshToken: string) => Promise<void>;
    clientVersion: string;
  }

  export interface HttpResponse<T> {
    ok: boolean;
    data: T;
    statusText: string;
    status: number;
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

  export const ReadonlyIntegrationStateArray = ["full", "partial"] as const;

  export type IntegrationState = (typeof ReadonlyIntegrationStateArray)[number];

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
        limit: number;
        skip: number;
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
      defaultPaymentMethodId: string | null;
      defaultPaymentMethodProvider: "stripe" | "not_set"; // "stripe" | "paypal"
      acceptedTermIdArray: string[];
      licenseArray: JUHUU.License.Object[];
      languageCode: LanguageCode | null;
      billingAddress: DeepNullable<Address>;
      billingEmail: string | null; // primary email that must never be empty
      billingEmailVerified: boolean;
      vat: string | null;
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

    export namespace List {
      export type Params = {
        managementUserId?: string;
        propertyId?: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = JUHUU.User.Object[];
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
        licenseArray?: string[];
        platform?: Platform;
        languageCode?: LanguageCode;
        appVersion?: string;
        billingAddress?: DeepNullable<Address>;
        vat?: string | null;
        acceptedTermIdArray?: string[];
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
        userId?: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = JUHUU.User.Object[];
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
        name: string;
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
        termId?: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = JUHUU.Term.Object[];
    }
  }

  export namespace AccountingArea {
    export type Object = {
      id: string;
      name: string;
      propertyId: string;
      creditPostingRowDescription: string;
      orderNumber: string; // mandatory field. Value is being used in posting row of credit note
      BKTXT: string | null;
      SGTXT: string | null;
      ZUONR: string | null;
    };

    export namespace Create {
      export type Params = {
        propertyId: string;
        name: string;
        creditPostingRowDescription?: string;
        orderNumber?: string;
        BGTXT?: string | null;
        SGTXT?: string | null;
        ZUONR?: string | null;
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

    export namespace Delete {
      export type Params = {
        accountingAreaId?: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = JUHUU.AccountingArea.Object[];
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
        articleId?: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = JUHUU.Article.Object[];
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
        title?: string;
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

      export type Response = JUHUU.Chat.Object[];
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
      chatId: string; // id of the chat where the message was sent
      originalMessage: string; // originalMessage of the chatMessage in the original language
      translatedMessage: string; // translated originalMessage of the chatMessage
      languageCode: LanguageCode; // language code of the original or translated message
    };

    export interface UserChatMessage extends Base {
      type: "user";
      userId: string; // id of the user who owns the chat
    }

    export interface AiChatMessage extends Base {
      type: "ai";
      articleEmbeddingArray: JUHUU.ArticleEmbedding.Object[];
    }

    export type Object = AiChatMessage | UserChatMessage;

    export namespace Create {
      export type Params = {
        userId: string;
        message: string;
        chatId: string;
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
        tariffId?: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = JUHUU.Tariff.Object[];
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
      validFor:
        | "endOfYear" // validity is set to the end of this year
        | "endOfMonth" // validity is set to the end of this month
        | "endOfWeek" // validity is set to the end of this week
        | "endOfDay" // validity is set to the end of this day
        | "year" // validity is granted for a year from the date of creation
        | "always" // validity is granted forever
        | "month" // validity is granted for a month from the date of creation
        | "week" // validity is granted for a week from the date of creation
        | "day"; // validity is granted for a day from the date of creation
      obtainDescription: LocaleString;
    };

    export interface RegexLicenseTemplate extends Base {
      type: "regex";
      regex: string;
      propertyId: string;
    }

    export interface AutomaticLicenseTemplate extends Base {
      type: "automatic";
    }

    export type Object = AutomaticLicenseTemplate | RegexLicenseTemplate;

    export namespace Create {
      export type Params = {
        propertyId: string;
        name?: LocaleString;
        type: string;
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

      export type Options = {
        expand?: Array<"property">;
      } & JUHUU.RequestOptions;

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
        licenseTemplateId?: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = JUHUU.LicenseTemplate.Object[];
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
      version: number; // 2.0.0
      deviceIconLight: string | null; // url of image is used when a new device is created; this is the default image to use
      deviceIconDark: string | null;
      colorScheme: ColorScheme;
      contactUrl: string | null;
    };

    export interface Internal extends Base {
      type: "internal";
      legalName: string;
      emailSignature: string;
      billingAddress: Address;
      vat: string;
      invoiceImage: string;
      invoiceNumberPrefix: string;
      stripeConnectedAccountId: string;
      payoutPostProcessIdentifier: "oebbV1" | null;
      iban: string;
      bic: string;
      automaticPayoutsEnabled: boolean;
      payoutCurrencyCode: CurrencyCode;
      timeZone: TimeZone;
    }

    export interface External extends Base {
      type: "external";
    }

    export type Object = Internal | External;

    export namespace Create {
      export type Params = {
        userId?: string;
        name: string;
        type?: Object["type"];
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
      export type Params = {};

      export type Options = JUHUU.RequestOptions;

      export type Response = JUHUU.Property.Object[];
    }

    export namespace StripeAccountUrl {
      export type Params = {
        propertyId: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        url: string;
      };
    }

    export namespace Update {
      export type Params = {
        propertyId: string;
        name?: string;
        legalName?: string;
        billingAddress?: Partial<Address>;
        email?: string;
        website?: string;
        phone?: string;
        faqUrl?: string;
        colorScheme?: Partial<ColorScheme>;
        contactUrl?: string;
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
      invalidAt: Date;
      source: "fluctuo" | null;
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

    export namespace Create {
      export type Params = {
        propertyId: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        payout: JUHUU.Payout.Object;
      };
    }

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

    export namespace Delete {
      export type Params = {
        payoutId?: string;
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
      vat: string | null;
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

  export namespace Location {
    type Base = {
      id: string;
      readonly object: "location";
      logoLight: string | null;
      logoDark: string | null;
      location: GeoPoint;
      altitudeRange: [number, number]; // from, to
      invalidAt: Date; // timestamp this location is no longer valid and can be deleted from the database
      utilization: Utilization | null;
      purposeArray: Purpose[];
      circumstanceArray: Circumstance[];
      propertyId: string;
      name: string;
      source: "fluctuo" | null;
      rentOfferArray: Offer[];
      reservationOfferArray: Offer[];
      iconLight: string | null;
      iconDark: string | null;
      address: Address;
      termId: string;
      timeZone: TimeZone;
    };

    export interface RentableDeviceGroup extends Base {
      type: "rentableDeviceGroup";
      concurrentSessionIdArray: string[]; // sessions that are currently active
      maximumConcurrentSessions: number; // number of maximum concurrent sessions that are allowed
      surveyEnabled: boolean;
      accountingAreaId: string;
      deviceIdArray: string[];
    }

    export interface RentableDevice extends Base {
      type: "rentableDevice";
      source: "fluctuo" | null;
      concurrentSessionIdArray: string[]; // sessions that are currently active
      maximumConcurrentSessions: number; // number of maximum concurrent sessions that are allowed
      surveyEnabled: boolean;
      accountingAreaId: string;
      rentableDeviceGroupLocationId: string | null;
      deviceId: string;
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
        name: string;
        type: string;
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
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        location: JUHUU.Location.Object;
      };
    }

    export namespace Delete {
      export type Params = {
        locationId?: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = JUHUU.Location.Object[];
    }
  }

  export namespace Product {
    export type Base = {
      id: string;
      readonly object: "product";
      name: string;
      propertyId: string;
      version: number;
      previewText: JUHUU.LocaleString;
      description: JUHUU.LocaleString;
      bannerImageDark: string[];
      bannerImageLight: string[];
      model3d: string | null;
      datasheet: JUHUU.DeepNullable<JUHUU.LocaleString>;
      highlightArray: JUHUU.LocaleString[];
      purposeArray: JUHUU.Purpose[];
      technologyArray: JUHUU.Technology[];
      invalidAt: Date;
      source: "fluctuo" | null;
    };

    export interface PhysicalProduct extends Base {
      type: "physicalProduct";
      weight: number; // in kilograms
      dimensions: {
        length: number; // in meters
        width: number; // in meters
        height: number; // in meters
      };
      material: string;
      color: string;
    }

    export interface DigitalProduct extends Base {
      type: "digitalProduct";
      fileSize: number; // in megabytes
      downloadUrl: string;
    }

    export type Object = PhysicalProduct | DigitalProduct;

    export namespace Create {
      export type Params = {
        propertyId: string;
        name: string;
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

    export namespace Delete {
      export type Params = {
        productId?: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = JUHUU.Product.Object[];
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
        name: string;
        fiveLetterQr: string;
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

    export namespace List {
      export type Params = {
        fiveLetterQr?: string;
        propertyId?: string;
      };

      export type Options = {};

      export type Response = JUHUU.Link.Object[];
    }

    export namespace Delete {
      export type Params = {
        linkId?: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = JUHUU.Link.Object[];
    }
  }

  export namespace License {
    export type Object = {
      id: string;
      validUntil: Date | null; // if null, the license is valid forever
      licenseTemplateId: string | null; // if null, the license is handle by us
      version: number;
    };
  }

  export namespace Device {
    export type Object = {
      id: string;
      readonly object: "device";
      propertyId: string;
      name: string;
      description: string | null;
      status: DeviceStatus;
      parameterArray: Parameter[]; // values of the parameters are used as current values for the parameters of the device
      version: number;
      deviceTemplateId: string;
      source: "fluctuo" | null;
      location: GeoPoint;
      fuel: {
        type: FuelType;
        level: number; // percentage between 0 and 100
      } | null; // null if not in use
      rangeRemaining: number | null; // in km, null if not in use
      invalidAt: Date | null;
      connectorId: string | null; // connector that is used to send messages to the device, null if the device has no connector
      connectorParameter: string | null; // unique identifier that the connector uses to differentiate between the devices if a connector is used by multiple devices
    };

    export namespace Create {
      export type Params = {
        propertyId: string;
        name: string;
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
        expand?: Array<"property" | "deviceTemplate">;
      } & JUHUU.RequestOptions;

      export type Response = {
        device: JUHUU.Device.Object;
        deviceTemplate?: JUHUU.DeviceTemplate.Object;
        property?: JUHUU.Property.Object;
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

    export namespace ParameterUpdate {
      export type Params = {
        deviceId: string;
        parameterName: string;
        value: string | number | boolean;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        device: JUHUU.Device.Object;
      };
    }

    export namespace CommandExecute {
      export type Params = {
        deviceId: string;
        commandName: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        device: JUHUU.Device.Object;
      };
    }

    export namespace Delete {
      export type Params = {
        deviceId?: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = JUHUU.Device.Object[];
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
      simId: string | null; // null, if no sim card of ours is installed
    };

    export namespace Create {
      export type Params = {
        propertyId: string;
        name: string;
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
        type: ["type"];
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        connector: JUHUU.Connector.Object;
      };
    }

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

    export type Object = Mqtt;

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

    export namespace Delete {
      export type Params = {
        connectorId?: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = JUHUU.Connector.Object[];
    }
  }

  export namespace DeviceTemplate {
    export type Object = {
      id: string;
      readonly object: "deviceTemplate";
      productId: string;
      name: string; // z.B. BikeLoop V1
      propertyId: string;
      parameterArray: Parameter[]; // "values" of the parameters are used as default values for the parameters of the device
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
    };

    export namespace Create {
      export type Params = {
        propertyId: string;
        name: string;
        productId: string;
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
        deviceTemplateId?: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = JUHUU.DeviceTemplate.Object[];
    }
  }

  export namespace Sim {
    export type Object = {
      id: string;
      readonly object: "sim";
      iccid: string;
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
        iccid: string;
        name?: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = {
        payout: JUHUU.Sim.Object;
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
        simId?: string;
      };

      export type Options = JUHUU.RequestOptions;

      export type Response = JUHUU.Sim.Object[];
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
