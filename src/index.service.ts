import { JUHUU } from ".";
import { Environment } from "./types/types";
import io, { Socket } from "socket.io-client";

export default class Service {
  constructor(config: JUHUU.SetupConfig) {
    this.environment = config.environment ?? "production";
    this.getAccessToken = config.getAccessToken ?? (() => null);
    this.onException = config.onException ?? (() => Promise.resolve("abort"));
    this.setAccessToken = config.setAccessToken ?? (() => Promise.resolve());
    this.getAccessToken = config.getAccessToken ?? (() => null);
    this.setRefreshToken = config.setRefreshToken ?? (() => Promise.resolve());
    this.getRefreshToken =
      config.getRefreshToken ?? (() => Promise.resolve(null));
    this.logger = config.logger ?? (() => {});
    this.clientVersion = config.clientVersion;
    this.apiKey = config.apiKey ?? null;
    this.defaultRequestOptions = config.defaultRequestOptions ?? {};
    this.authenticationMode = config.authenticationMode ?? "jwt";

    switch (config.environment) {
      case "development": {
        this.httpBaseUrl = "https://api.juhuu.dev/v1/";
        this.wssBaseUrl = "wss://api.juhuu.dev/v1/";
        break;
      }

      case "staging": {
        this.httpBaseUrl = "https://api.juhuu.review/v1/";
        this.wssBaseUrl = "wss://api.juhuu.review/v1/";
        break;
      }

      default: {
        this.httpBaseUrl = "https://api.juhuu.app/v1/";
        this.wssBaseUrl = "wss://api.juhuu.app/v1/";
        break;
      }
    }
  }

  readonly environment: Environment;
  readonly httpBaseUrl: string;
  readonly wssBaseUrl: string;
  readonly clientVersion: string;
  readonly apiKey: string | null;
  readonly defaultRequestOptions: JUHUU.RequestOptions;
  readonly authenticationMode: "jwt" | "apiKey";

  onException: <T>(
    response: JUHUU.HttpResponse<T>
  ) => Promise<"abort" | "retry">;
  getAccessToken: () => Promise<string | null> | null;
  setAccessToken: (accessToken: string) => Promise<void>;
  getRefreshToken: () => Promise<string | null>;
  setRefreshToken: (refreshToken: string) => Promise<void>;
  logger: (message: string, ...args: any[]) => void;

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
    requestOptions: JUHUU.RequestOptions = {}
  ): Promise<JUHUU.HttpResponse<T>> {
    // set defaults only for options that are not set
    const currentRequestOptions = {
      ...this.defaultRequestOptions,
      ...requestOptions,
    };

    if (currentRequestOptions.triggerOnException === undefined) {
      switch (this.authenticationMode) {
        case "jwt": {
          currentRequestOptions.triggerOnException = true;
          break;
        }

        case "apiKey": {
          currentRequestOptions.triggerOnException = false;
          break;
        }
      }
    }

    this.logger("authenticationMode", this.authenticationMode);

    if (currentRequestOptions.refreshTokensIfNecessary === undefined) {
      switch (this.authenticationMode) {
        case "jwt": {
          currentRequestOptions.refreshTokensIfNecessary = true;
          break;
        }

        case "apiKey": {
          currentRequestOptions.refreshTokensIfNecessary = false;
          break;
        }
      }
    }

    this.logger("currentOptions", currentRequestOptions);
    let token: string | null | undefined = null;
    let apiKey: string | null = null;

    switch (this.authenticationMode) {
      case "jwt": {
        if (
          currentRequestOptions.accessToken === undefined ||
          currentRequestOptions.accessToken === null
        ) {
          token = await this.getAccessToken();
        } else {
          token = currentRequestOptions.accessToken;
        }

        this.logger("accessToken:", token);

        if (
          (token === null || token === undefined) &&
          authenticationNotOptional === true
        ) {
          this.logger(
            "endpoint",
            url,
            "should use authentication but no token was found"
          );
          return {
            ok: false,
            data: {},
          } as JUHUU.HttpResponse<T>;
        }
        break;
      }

      case "apiKey": {
        if (
          currentRequestOptions.apiKey === undefined ||
          currentRequestOptions.apiKey === null
        ) {
          apiKey = this.apiKey;
        } else {
          apiKey = currentRequestOptions.apiKey;
        }

        if (apiKey === null) {
          this.logger(
            "endpoint",
            url,
            "should use authentication but no apiKey was found"
          );
          return {
            ok: false,
            data: {},
          } as JUHUU.HttpResponse<T>;
        }

        break;
      }
    }

    const uri = this.httpBaseUrl + url;

    let response: Response | null = null;
    let responseObject: JUHUU.HttpResponse<T> | null = null;

    this.logger(
      "sending request to",
      uri,
      "with apiKey",
      apiKey,
      "and token",
      token
    );

    try {
      switch (method) {
        case "GET": {
          response = await this.sendGetRequest({ token, uri, apiKey });
          break;
        }

        case "POST": {
          response = await this.sendPostRequest({ token, uri, body, apiKey });
          break;
        }

        case "PATCH": {
          response = await this.sendPatchRequest({ token, uri, body, apiKey });
          break;
        }

        case "DELETE": {
          response = await this.sendDeleteRequest({ token, uri, apiKey });
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
      this.logger("JUHUU SDK, error sending request: ", error);

      responseObject = {
        ok: false,
        data: await response?.json(),
        statusText: response?.statusText ?? "",
        status: response?.status ?? 0,
      };

      this.logger(
        "refreshTokensIfNecessary",
        currentRequestOptions.refreshTokensIfNecessary
      );
      this.logger("responseObject.status", responseObject.status);

      if (
        responseObject.status === 403 &&
        currentRequestOptions.refreshTokensIfNecessary === true
      ) {
        this.logger("refreshing tokens...");
        // get new access and refresh token with old refresh token
        const oldRefreshToken = await this.getRefreshToken();

        this.logger("old refresh token", oldRefreshToken);
        if (oldRefreshToken === null) {
          this.logger("no old refresh token found");
          return responseObject;
        }

        this.logger("sending request to refresh tokens...");
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

        this.logger("query for new tokens", query);

        if (query.ok === false) {
          return responseObject;
        }

        if (query.data === null) {
          this.logger("no data in query");
          return responseObject;
        }

        const accessToken = query.data.accessToken;
        const refreshToken = query.data.refreshToken;

        await Promise.all([
          this.setRefreshToken(refreshToken),
          this.setAccessToken(accessToken),
        ]);

        // send original request again
        this.logger("retrying original request...");

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

        this.logger("retry response", retryResponse);
        if (retryResponse.ok === true) {
          return retryResponse;
        } else {
          return responseObject;
        }
      }

      if (currentRequestOptions.triggerOnException === true) {
        await this.onException<T>(responseObject);
      }
    } finally {
      this.logger(
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

  private async sendGetRequest({
    token,
    apiKey,
    uri,
  }: {
    token: string | undefined | null;
    apiKey: string | null;
    uri: string;
  }): Promise<Response> {
    const headers: any = {
      "Content-Type": "application/json",
      "Client-Version": this.clientVersion,
    };

    if (token !== undefined && token !== null) {
      headers.Authorization = `Bearer ${token}`;
    }

    if (apiKey !== null) {
      headers["X-API-KEY"] = apiKey;
    }

    return await fetch(uri, {
      method: "GET",
      headers,
    });
  }

  private async sendPostRequest({
    token,
    uri,
    apiKey,
    body,
  }: {
    token: string | undefined | null;
    uri: string;
    apiKey: string | null;
    body: any;
  }): Promise<Response> {
    const headers: any = {
      "Content-Type": "application/json",
      "Client-Version": this.clientVersion,
    };

    if (token !== undefined && token !== null) {
      headers.Authorization = `Bearer ${token}`;
    }

    if (apiKey !== null) {
      headers["X-API-KEY"] = apiKey;
    }

    return await fetch(uri, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    });
  }

  private async sendPatchRequest({
    token,
    uri,
    apiKey,
    body,
  }: {
    token: string | undefined | null;
    uri: string;
    apiKey: string | null;
    body: any;
  }): Promise<Response> {
    const headers: any = {
      "Content-Type": "application/json",
      "Client-Version": this.clientVersion,
    };

    if (token !== undefined && token !== null) {
      headers.Authorization = `Bearer ${token}`;
    }

    if (apiKey !== null) {
      headers["X-API-KEY"] = apiKey;
    }

    return await fetch(uri, {
      method: "PATCH",
      headers,
      body: JSON.stringify(body),
    });
  }

  private async sendDeleteRequest({
    token,
    uri,
    apiKey,
  }: {
    token: string | undefined | null;
    uri: string;
    apiKey: string | null;
  }): Promise<Response> {
    const headers: any = {
      "Content-Type": "application/json",
      "Client-Version": this.clientVersion,
    };

    if (token !== undefined && token !== null) {
      headers.Authorization = `Bearer ${token}`;
    }

    if (apiKey !== null) {
      headers["X-API-KEY"] = apiKey;
    }

    return await fetch(uri, {
      method: "DELETE",
      headers,
    });
  }

  connectToWebsocket<T>({ url }: { url: string }): Socket {
    const uri = this.wssBaseUrl + url;
    this.logger("connecting to websocket", uri);
    const socket = io(uri, { transports: ["websocket"] });

    return socket;
  }

  disconnectFromWebsocket(socket: Socket) {
    socket.disconnect();
  }
}
