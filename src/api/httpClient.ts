import { ErrorResponse } from "./responses";

const GENERIC_ERROR_MSG = "Błąd podczas wysyłania danych";

export class HTTPClient {
  private host: string;

  constructor(host: string) {
    this.host = host;
  }

  static getHeaders(token: string) {
    return new Headers({
      authorization: `Bearer ${token}`,
      accept: "application/json",
      "content-type": "application/json",
    });
  }

  static async fetchToJson(res: Response): Promise<unknown> {
    return (await res.headers.get("Content-Type").includes("application/json"))
      ? res.json()
      : res.text();
  }

  static async handleResponse(response: Response): Promise<unknown> {
    const jsonResponse = await HTTPClient.fetchToJson(response);
    if (response.ok) {
      return jsonResponse;
    }
    throw Error((jsonResponse as ErrorResponse).error || GENERIC_ERROR_MSG);
  }

  async makeRequest({
    method,
    path,
    token,
    body,
    params,
  }: {
    method: string;
    path: string;
    token: string;
    body?: { [key: string]: any };
    params?: { [key: string]: string };
  }): Promise<unknown> {
    let url = `${this.host}${path}`;
    if (params) url += `?${new URLSearchParams(params).toString()}`;

    try {
      const response = await fetch(url, {
        method: method,
        headers: HTTPClient.getHeaders(token),
        body: JSON.stringify(body),
      });
      const data = await HTTPClient.handleResponse(response);
      return data;
    } catch (e) {
      throw new Error(e.message);
    }
  }

  get(path: string, token: string, params: { [key: string]: string } = {}) {
    return this.makeRequest({ method: "GET", token, path, params });
  }

  patch(path: string, token: string, body: { [key: string]: any } = {}) {
    return this.makeRequest({ method: "PATCH", token, path, body });
  }

  post(path: string, token: string, body: { [key: string]: any } = {}) {
    return this.makeRequest({ method: "POST", token, path, body });
  }

  put(path: string, token: string, body: { [key: string]: any } = {}) {
    return this.makeRequest({ method: "PUT", token, path, body });
  }
}
