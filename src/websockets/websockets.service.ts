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

    socket.on("connect", () => {
      this.logger("connected to websocket");
    });

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
      socket.on("session_update", (message: JUHUU.Websocket.SessionUpdate) => {
        callback(message);
      });
    };

    const onConnect = (callback: () => void) => {
      socket.on("connect", callback);
    };

    const onDisconnect = (callback: (reason: string) => void) => {
      socket.on("disconnect", callback);
    };

    const onReconnect = (callback: (attemptNumber: number) => void) => {
      socket.on("reconnect", callback);
    };

    const onConnectError = (callback: (error: any) => void) => {
      socket.on("connect_error", callback);
    };

    const onReconnectAttempt = (callback: (attemptNumber: number) => void) => {
      socket.on("reconnect_attempt", callback);
    };

    const onReconnectError = (callback: (error: any) => void) => {
      socket.on("reconnect_error", callback);
    };

    const onReconnectFailed = (callback: () => void) => {
      socket.on("reconnect_failed", callback);
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
      onConnect,
      onDisconnect,
      onReconnect,
      onConnectError,
      onReconnectAttempt,
      onReconnectError,
      onReconnectFailed,
      onPong: (callback: (message: any) => void) => {
        socket.on("pong", callback);
      },
      isConnected: () => {
        return socket.connected;
      },
      close: () => {
        socket.close();
      },
    };
  }
}
