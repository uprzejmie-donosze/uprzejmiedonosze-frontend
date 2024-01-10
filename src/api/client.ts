import { HTTPClient } from "./httpClient";
import { IUpdateUserBody } from "./requests";
import { Category, IUser, Report, TermsOfUse } from "./responses";

export class APIClient {
  private httpClient: HTTPClient;

  constructor(host: string) {
    this.httpClient = new HTTPClient(host);
  }

  getUser(token: string): Promise<IUser> {
    return this.httpClient.patch("user", token) as Promise<IUser>;
  }

  updateUser(token: string, user: IUpdateUserBody): Promise<IUser> {
    return this.httpClient.post("user", token, user) as Promise<IUser>;
  }

  confirmTermsOfUse(token: string): Promise<IUser> {
    return this.httpClient.patch("user/confirm-terms", token) as Promise<IUser>;
  }

  getTermsOfUse(): Promise<TermsOfUse> {
    return this.httpClient.get("config/terms", "") as Promise<TermsOfUse>;
  }

  sendImage(
    token: string,
    id: string,
    image: any,
    pictureType: string,
    metadata: {
      dateTime?: string;
      latLng?: string;
    },
  ): Promise<Report> {
    const body = { [pictureType]: image, ...metadata };
    return this.httpClient.post(
      `app/${id}/image`,
      token,
      body,
    ) as Promise<Report>;
  }

  createReport(token: string): Promise<Report> {
    return this.httpClient.post("app/new", token) as Promise<Report>;
  }

  getReport(token: string, id: string): Promise<Report> {
    return this.httpClient.get(`app/${id}`, token) as Promise<Report>;
  }

  getCategories(): Promise<[Category]> {
    return this.httpClient.get("config/categories", "") as Promise<[Category]>;
  }
}
