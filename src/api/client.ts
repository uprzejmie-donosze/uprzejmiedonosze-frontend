import { HTTPClient } from "./httpClient";

export class APIClient {
  private httpClient: HTTPClient;

  constructor(host: string) {
    this.httpClient = new HTTPClient(host);
  }

  getUser(token: string) {
    // return this.httpClient.get("/user", token);
    return Promise.resolve({
      data: {
        name: "John Doe",
        msisdn: "123456789",
        address: "221b Baker Street, London",
        email: "john@doe.net",
        sex: "m",
        number: 1,
        exposeData: false,
        stopAgresji: true,
        termsConfirmation: "2023-04-25T13:52:14",
        autoSend: true,
        myAppsSize: 200,
      },
      number: 1,
      updated: "2023-04-25T13:52:14",
      lastLocation: "51.523788, -0.158611",
      appsCount: 200,
    });
  }

  updateUser(token: string) {
    return this.httpClient.post("/user", token);
  }
}
