import { HTTPClient } from "./httpClient";
import { IUpdateUserBody } from "./requests";
import { IUser } from "./responses";

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

  // TODO;
  sendImage(
    token: string,
    image: any,
    id: string,
    metadata?: any,
  ): Promise<unknown> {
    return Promise.resolve({});
  }
}
