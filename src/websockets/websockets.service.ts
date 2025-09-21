import { JUHUU } from "..";
import Service from "../index.service";

export default class WebsocketsService extends Service {
  constructor(config: JUHUU.SetupConfig) {
    super(config);
  }

  connect(
    WebsocketConnectOptions?: JUHUU.Websocket.Connect.Options
  ): JUHUU.Websocket.Connect.Response {
    const socket = super.connectToWebsocket({ url: "websocket" });

    socket.on(
      "subscription_success",
      (message: JUHUU.Websocket.SubscriptionSuccess) => {
        this.logger("Subscription success:", message);
      }
    );

    socket.on(
      "unsubscription_success",
      (message: JUHUU.Websocket.UnsubscriptionSuccess) => {
        this.logger("Unsubscription success:", message);
      }
    );

    socket.on("error", (error: any) => {
      this.logger("WebSocket error:", error);
    });

    const onLocationUpdate = (
      callback: (message: JUHUU.Websocket.LocationUpdate) => void
    ) => {
      socket.on(
        "location_update",
        (message: JUHUU.Websocket.LocationUpdate) => {
          callback(message);
        }
      );
    };

    const onParameterUpdate = (
      callback: (message: JUHUU.Websocket.ParameterUpdate) => void
    ) => {
      socket.on(
        "parameter_update",
        (message: JUHUU.Websocket.ParameterUpdate) => {
          callback(message);
        }
      );
    };

    const onSessionUpdate = (
      callback: (message: JUHUU.Websocket.SessionUpdate) => void
    ) => {
      socket.on(
        "session_update",
        (message: JUHUU.Websocket.SessionUpdate) => {
          callback(message);
        }
      );
    };

    return {
      subscribe: (
        locationIdArray?: string[],
        parameterIdArray?: string[],
        sessionIdArray?: string[]
      ) => {
        socket.emit("subscribe", {
          locationIdArray: locationIdArray || [],
          parameterIdArray: parameterIdArray || [],
          sessionIdArray: sessionIdArray || [],
        });
      },
      unsubscribeFromLocations: (locationIdArray: string[]) => {
        socket.emit("unsubscribe", { locationIdArray });
      },
      unsubscribeFromParameters: (parameterIdArray: string[]) => {
        socket.emit("unsubscribe", { parameterIdArray });
      },
      unsubscribeFromSessions: (sessionIdArray: string[]) => {
        socket.emit("unsubscribe", { sessionIdArray });
      },
      unsubscribe: (
        locationIdArray?: string[],
        parameterIdArray?: string[],
        sessionIdArray?: string[]
      ) => {
        socket.emit("unsubscribe", {
          locationIdArray: locationIdArray || [],
          parameterIdArray: parameterIdArray || [],
          sessionIdArray: sessionIdArray || [],
        });
      },
      ping: (data?: any) => {
        socket.emit("ping", data);
      },
      onLocationUpdate,
      onParameterUpdate,
      onSessionUpdate,
      onPong: (callback: (message: any) => void) => {
        socket.on("pong", callback);
      },
      close: () => {
        socket.close();
      },
    };
  }
}
