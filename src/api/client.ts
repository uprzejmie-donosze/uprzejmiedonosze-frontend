import { HTTPClient } from "./httpClient";
import { IUser } from "./responses";

export class APIClient {
  private httpClient: HTTPClient;

  constructor(host: string) {
    this.httpClient = new HTTPClient(host);
  }

  getUser(token: string): Promise<IUser> {
    return this.httpClient.patch("user", token) as Promise<IUser>;
  }

  updateUser(token: string, user: IUser): Promise<unknown> {
    return this.httpClient.post("user", token, user);
  }
}
