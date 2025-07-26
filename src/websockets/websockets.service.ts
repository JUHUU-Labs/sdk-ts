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

    const pendingRpcResponses: Map<
      string,
      (value: JUHUU.Websocket.Rpc.Response) => void
    > = new Map();

    socket.on("rpc.response", (message: JUHUU.Websocket.Rpc.Response) => {
      const resolver = pendingRpcResponses.get(message.id);
      if (resolver !== undefined) {
        resolver(message);
        pendingRpcResponses.delete(message.id);
      }
    });

    const onQueryUpdate = (
      callback: (message: JUHUU.Websocket.QueryUpdate) => void
    ) => {
      socket.on("query.update", (message: JUHUU.Websocket.QueryUpdate) => {
        callback(message);
      });
    };

    return {
      subscribe: (rooms: string[]) => {
        socket.emit("subscribe", { rooms });
      },
      unsubscribe: (rooms: string[]) => {
        socket.emit("unsubscribe", { rooms });
      },
      subscribeQuery: (payload: JUHUU.Websocket.SubscribeQuery.Params) => {
        socket.emit("subscribeQuery", payload);
      },
      unsubscribeQuery: (payload: JUHUU.Websocket.UnsubscribeQuery.Params) => {
        socket.emit("unsubscribeQuery", payload);
      },
      rpc: async (
        payload: JUHUU.Websocket.Rpc.Params
      ): Promise<JUHUU.Websocket.Rpc.Response> => {
        return await new Promise((resolve) => {
          pendingRpcResponses.set(payload.id, resolve);
          socket.emit("rpc", payload);
        });
      },
      onQueryUpdate,
      close: () => {
        socket.close();
      },
    };
  }
}
