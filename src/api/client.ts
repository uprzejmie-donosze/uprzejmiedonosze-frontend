import { HTTPClient } from "./httpClient";
import { IUpdateUserBody } from "./requests";
import { IUser, NewReport } from "./responses";

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

  sendImage(
    token: string,
    id: string,
    image: any,
    pictureType: string,
    metadata: {
      dateTime?: string;
      latLng?: string;
    },
  ): Promise<NewReport> {
    const params: any = { pictureType: pictureType, ...metadata, image: image };
    return this.httpClient.post(
      `app/${id}/image`,
      token,
      params,
    ) as Promise<NewReport>;
  }

  createReport(token: string): Promise<NewReport> {
    return this.httpClient.post("app/new", token) as Promise<NewReport>;
  }

  getReport(token: string, id: string): Promise<NewReport> {
    return this.httpClient.get(`app/${id}`, token) as Promise<NewReport>;
  }
}
