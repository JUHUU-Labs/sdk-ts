import { JUHUU } from ".";
import { Environment } from "./types/types";
import io, { Socket } from "socket.io-client";

export default class Service {
  constructor(config: JUHUU.SetupConfig) {
    this.environment = config.environment;
    this.getAccessToken = config.getAccessToken;
    this.onException = config.onException;
    this.setAccessToken = config.setAccessToken;
    this.getAccessToken = config.getAccessToken;
    this.setRefreshToken = config.setRefreshToken;
    this.getRefreshToken = config.getRefreshToken;
    this.clientVersion = config.clientVersion;

    switch (config.environment) {
      case "development":
        this.httpBaseUrl = "https://api.juhuu.dev/v1/";
        this.wssBaseUrl = "wss://api.juhuu.dev/v1/";
        break;
      default:
        this.httpBaseUrl = "https://api.juhuu.app/v1/";
        this.wssBaseUrl = "wss://api.juhuu.app/v1/";
        break;
    }
  }

  readonly environment: Environment;
  readonly httpBaseUrl: string;
  readonly wssBaseUrl: string;
  readonly clientVersion: string;

  onException: <T>(
    response: JUHUU.HttpResponse<T>
  ) => Promise<"abort" | "retry">;
  getAccessToken: () => Promise<string | null> | null;
  setAccessToken: (accessToken: string) => Promise<void>;
  getRefreshToken: () => Promise<string | null>;
  setRefreshToken: (refreshToken: string) => Promise<void>;

  async sendRequest<T>(
    {
      url,
      method,
      body = undefined,
      authenticationNotOptional,
    }:
      | {
          method: "GET";
          url: string;
          body: undefined;
          authenticationNotOptional: boolean;
        }
      | {
          method: "POST";
          url: string;
          body: any;
          authenticationNotOptional: boolean;
        }
      | {
          method: "PATCH";
          url: string;
          body: any;
          authenticationNotOptional: boolean;
        }
      | {
          method: "DELETE";
          url: string;
          body: undefined;
          authenticationNotOptional: boolean;
        },
    options: JUHUU.RequestOptions = {}
  ): Promise<JUHUU.HttpResponse<T>> {
    // set defaults only for options that are not set
    if (options.triggerOnException === undefined) {
      options.triggerOnException = true;
    }

    if (options.refreshTokensIfNecessary === undefined) {
      options.refreshTokensIfNecessary = true;
    }

    let token: string | null | undefined = null;

    if (options.accessToken === undefined || options.accessToken === null) {
      token = await this.getAccessToken();
    } else {
      token = options.accessToken;
    }

    console.log("accessToken:", token);

    if (
      (token === null || token === undefined) &&
      authenticationNotOptional === true
    ) {
      console.error(
        "endpoint",
        url,
        "should use authentication but no token was found"
      );
      return {
        ok: false,
        data: null,
      } as JUHUU.HttpResponse<T>;
    }

    const uri = this.httpBaseUrl + url;

    let response: Response | null = null;
    let responseObject: JUHUU.HttpResponse<T> | null = null;

    try {
      switch (method) {
        case "GET": {
          response = await this.sendGetRequest(token, uri);
          break;
        }

        case "POST": {
          response = await this.sendPostRequest(token, uri, body);
          break;
        }

        case "PATCH": {
          response = await this.sendPatchRequest(token, uri, body);
          break;
        }

        case "DELETE": {
          response = await this.sendDeleteRequest(token, uri);
          break;
        }
      }

      if (response.ok === false) {
        throw new Error(response.statusText);
      }

      responseObject = {
        ok: response.ok,
        data: await response.json(),
        statusText: response.statusText,
        status: response.status,
      };
    } catch (error) {
      console.error(error);

      responseObject = {
        ok: false,
        data: await response?.json(),
        statusText: response?.statusText ?? "no statusText",
        status: response?.status ?? 0,
      };

      if (
        responseObject.status === 403 &&
        options.refreshTokensIfNecessary === true
      ) {
        console.log("refreshing tokens...");
        // get new access and refresh token with old refresh token
        const oldRefreshToken = await this.getRefreshToken();

        console.log("old refresh token", oldRefreshToken);
        if (oldRefreshToken === null) {
          console.log("no old refresh token found");
          return responseObject;
        }

        console.log("sending request to refresh tokens...");
        const query = await this.sendRequest<{
          accessToken: string;
          refreshToken: string;
        }>(
          {
            method: "GET",
            url: "auth/refresh",
            body: undefined,
            authenticationNotOptional: true,
          },
          {
            accessToken: oldRefreshToken, // use old refresh token instead of access token
            triggerOnException: false,
            refreshTokensIfNecessary: false,
          }
        );

        console.log("query for new tokens", query);

        if (query.ok === false) {
          return responseObject;
        }

        const accessToken = query.data.accessToken;
        const refreshToken = query.data.refreshToken;

        await Promise.all([
          this.setRefreshToken(refreshToken),
          this.setAccessToken(accessToken),
        ]);

        // send original request again
        console.log("retrying original request...");

        const retryResponse = await this.sendRequest<T>(
          {
            url,
            method,
            body,
            authenticationNotOptional,
          },
          {
            accessToken: accessToken,
            refreshTokensIfNecessary: false,
          }
        );

        console.log("retry response", retryResponse);
        if (retryResponse.ok === true) {
          return retryResponse;
        } else {
          return responseObject;
        }
      }

      if (options.triggerOnException === true) {
        await this.onException<T>(responseObject);
      }
    } finally {
      console.log(
        method +
          ": " +
          uri +
          " (body: " +
          JSON.stringify(body, null, 2) +
          ") => " +
          JSON.stringify(responseObject, null, 2)
      );
    }

    return responseObject;
  }

  private async sendGetRequest(
    token: string | undefined | null,
    uri: string
  ): Promise<Response> {
    const headers: any = {
      "Content-Type": "application/json",
      "Client-Version": this.clientVersion,
    };

    if (token !== undefined && token !== null) {
      headers.Authorization = `Bearer ${token}`;
    }

    return await fetch(uri, {
      method: "GET",
      headers,
    });
  }

  private async sendPostRequest(
    token: string | undefined | null,
    uri: string,
    body: any
  ): Promise<Response> {
    const headers: any = {
      "Content-Type": "application/json",
      "Client-Version": this.clientVersion,
    };

    if (token !== undefined && token !== null) {
      headers.Authorization = `Bearer ${token}`;
    }

    return await fetch(uri, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    });
  }

  private async sendPatchRequest(
    token: string | undefined | null,
    uri: string,
    body: any
  ): Promise<Response> {
    const headers: any = {
      "Content-Type": "application/json",
      "Client-Version": this.clientVersion,
    };

    if (token !== undefined && token !== null) {
      headers.Authorization = `Bearer ${token}`;
    }

    return await fetch(uri, {
      method: "PATCH",
      headers,
      body: JSON.stringify(body),
    });
  }

  private async sendDeleteRequest(
    token: string | undefined | null,
    uri: string
  ): Promise<Response> {
    const headers: any = {
      "Content-Type": "application/json",
      "Client-Version": this.clientVersion,
    };

    if (token !== undefined && token !== null) {
      headers.Authorization = `Bearer ${token}`;
    }
    return await fetch(uri, {
      method: "DELETE",
      headers,
    });
  }

  connectToWebsocket<T>({ url }: { url: string }): Socket {
    const uri = this.wssBaseUrl + url;
    console.log("connecting to websocket", uri);
    const socket = io(uri, { transports: ["websocket"] });

    socket.on("connect", () => {
      console.log("connected to websocket", uri);
    });

    socket.on("connect_error", (error) => {
      console.error("Connection error:", error);
    });

    return socket;
  }

  disconnectFromWebsocket(socket: Socket) {
    socket.disconnect();
  }
}
