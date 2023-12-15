
export class HTTPClient {
  host = "";

  constructor(host) {
    this.host = host;
  }

  static getHeaders(token) {
    return new Headers({
      authorization: `Bearer ${token}`,
      accept: 'application/json',
      'content-type': 'application/json',
    });
  }

  static fetchToJson(res) {
    return res.headers.get('content-type') === 'application/json' ? res.json() : res.text();
  }

  static handleResponse(response) {
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

  get(path, token, params = {}) {
    return this.makeRequest({ method: "GET", token, path, params });
  }

  patch(path, token, body = {}) {
    return this.makeRequest({ method: "PATCH", token, path, body });
  }

  post(path, token, body = {}) {
    return this.makeRequest({ method: "POST", token, path, body });
  }

  put(path, token, body = {}) {
    return this.makeRequest({ method: "PUT", token, path, body });
  }
}