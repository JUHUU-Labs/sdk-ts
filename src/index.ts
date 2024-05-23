import { JUHUU as JuhuuTypes } from "./types";
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

export default class JUHUU {
  constructor(config: JuhuuTypes.SetupConfig) {
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
}
