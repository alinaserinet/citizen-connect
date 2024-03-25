import type {
  ErrorChecker,
  ErrorHandler,
  ErrorMiddleware,
  TokenHandler,
} from '@types';

const defaultHeaders = {
  'Content-Type': 'application/json',
};

const generateBearerToken = (token: string) => {
  return token !== '' ? `Bearer ${token}` : '';
};

export default class HttpClient {
  public constructor(
    private readonly baseUrl: string,
    private readonly errorChecker: ErrorChecker,
    private readonly errorHandler: ErrorHandler,
    private readonly tokenHandler: TokenHandler,
    private readonly errorMiddleware?: ErrorMiddleware,
  ) {
    this.get = this.get.bind(this);
    this.post = this.post.bind(this);
    this.put = this.put.bind(this);
    this.patch = this.patch.bind(this);
    this.delete = this.delete.bind(this);
  }

  public async get<Res>(endPoint: string, signal?: AbortSignal): Promise<Res> {
    try {
      const url = this.baseUrl + endPoint;
      const requestInit: RequestInit = {
        method: 'GET',
        headers: {
          ...defaultHeaders,
          Authorization: generateBearerToken(await this.tokenHandler()),
        },
        signal,
      };

      const response = await fetch(url, requestInit);
      await this.errorChecker(response, url, requestInit);

      const parsedResponse: Res = await response.json();
      return parsedResponse;
    } catch (error: unknown) {
      const appError = this.errorHandler(error);

      if (typeof this.errorMiddleware === 'function') {
        return this.errorMiddleware(appError);
      }

      return Promise.reject(appError);
    }
  }

  public async post<Req, Res>(
    endPoint: string,
    data?: Req,
    signal?: AbortSignal,
  ): Promise<Res> {
    try {
      const url = this.baseUrl + endPoint;
      const requestInit: RequestInit = {
        method: 'POST',
        headers: {
          ...defaultHeaders,
          Authorization: generateBearerToken(await this.tokenHandler()),
        },
        body: JSON.stringify(data),
        signal,
      };

      const response = await fetch(url, requestInit);
      await this.errorChecker(response, url, requestInit);

      const parsedResponse: Res = await response.json();
      return parsedResponse;
    } catch (error: unknown) {
      const appError = this.errorHandler(error);

      if (typeof this.errorMiddleware === 'function') {
        return this.errorMiddleware(appError);
      }

      return Promise.reject(appError);
    }
  }

  public async patch<Req, Res>(
    endPoint: string,
    data: Partial<Req>,
    signal?: AbortSignal,
  ): Promise<Res> {
    try {
      const url = this.baseUrl + endPoint;
      const requestInit: RequestInit = {
        method: 'PATCH',
        headers: {
          ...defaultHeaders,
          Authorization: generateBearerToken(await this.tokenHandler()),
        },
        body: JSON.stringify(data),
        signal,
      };

      const response = await fetch(url, requestInit);
      await this.errorChecker(response, url, requestInit);

      const parsedResponse: Res = await response.json();
      return parsedResponse;
    } catch (error: unknown) {
      const appError = this.errorHandler(error);

      if (typeof this.errorMiddleware === 'function') {
        return this.errorMiddleware(appError);
      }

      return Promise.reject(appError);
    }
  }

  public async put<Req, Res>(
    endPoint: string,
    data: Partial<Req>,
    signal?: AbortSignal,
  ): Promise<Res> {
    try {
      const url = this.baseUrl + endPoint;
      const requestInit: RequestInit = {
        method: 'PUT',
        headers: {
          ...defaultHeaders,
          Authorization: generateBearerToken(await this.tokenHandler()),
        },
        body: JSON.stringify(data),
        signal,
      };

      const response = await fetch(url, requestInit);
      await this.errorChecker(response, url, requestInit);

      const parsedResponse: Res = await response.json();
      return parsedResponse;
    } catch (error: unknown) {
      const appError = this.errorHandler(error);

      if (typeof this.errorMiddleware === 'function') {
        return this.errorMiddleware(appError);
      }

      return Promise.reject(appError);
    }
  }

  public async delete<Res>(
    endPoint: string,
    signal?: AbortSignal,
  ): Promise<Res> {
    try {
      const url = this.baseUrl + endPoint;
      const requestInit: RequestInit = {
        method: 'DELETE',
        headers: {
          ...defaultHeaders,
          Authorization: generateBearerToken(await this.tokenHandler()),
        },
        signal,
      };

      const response = await fetch(url, requestInit);
      await this.errorChecker(response, url, requestInit);

      const parsedResponse: Res = await response.json();
      return parsedResponse;
    } catch (error: unknown) {
      const appError = this.errorHandler(error);

      if (typeof this.errorMiddleware === 'function') {
        return this.errorMiddleware(appError);
      }

      return Promise.reject(appError);
    }
  }
}
