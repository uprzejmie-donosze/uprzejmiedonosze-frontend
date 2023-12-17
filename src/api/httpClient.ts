
export class HTTPClient {
  private host: string;

  constructor(host: string) {
    this.host = host;
  }

  static getHeaders(token: string) {
    return new Headers({
      authorization: `Bearer ${token}`,
      accept: 'application/json',
      'content-type': 'application/json',
    });
  }

  static fetchToJson(res: Response): Promise<Response> {
    return res.headers.get('content-type') === 'application/json' ? res.json() : res.text();
  }

  static handleResponse(response: Response): Promise<Response>  {
    const jsonResponse = HTTPClient.fetchToJson(response);
    if (response.ok) {
      return jsonResponse;
    }
    throw new Error('Something went wrong'); // TODO: handle error
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
    body?: {[key: string]: any};
    params?: {[key: string]: string};
  }) {
    let url = `${this.host}${path}`;
    if (params) url += `?${new URLSearchParams(params).toString()}`;

    return await fetch(url, {
      method: method,
      headers: HTTPClient.getHeaders(token),
      body: JSON.stringify(body),
    })
    .then(response => HTTPClient.handleResponse(response))
    .catch(e => { throw new Error('Something went wrong'); }); // TODO: handle error
  }

  get(path: string, token: string, params: {[key: string]: string} = {}) {
    return this.makeRequest({ method: "GET", token, path, params });
  }

  patch(path: string, token: string, body: {[key: string]: any} = {}) {
    return this.makeRequest({ method: "PATCH", token, path, body });
  }

  post(path: string, token: string, body: {[key: string]: any} = {}) {
    return this.makeRequest({ method: "POST", token, path, body });
  }

  put(path: string, token: string, body: {[key: string]: any} = {}) {
    return this.makeRequest({ method: "PUT", token, path, body });
  }
}
