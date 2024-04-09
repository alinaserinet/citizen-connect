import type { HttpBridge } from '@libs/bridges';
import type { Request } from '@types';

import { modifyRequestRes } from './modifier';
import type { RequestReq, RequestRes } from './types';

export default class RequestService {
  public constructor(
    private readonly baseUrl: string,
    private readonly bridge: HttpBridge,
  ) {}

  public async getAll(signal?: AbortSignal): Promise<Request[]> {
    const requests = await this.bridge.get<RequestRes[]>(this.baseUrl, signal);
    return requests.map(request => modifyRequestRes(request));
  }

  public async get(
    id: number | string,
    signal?: AbortSignal,
  ): Promise<Request | null> {
    const request = await this.bridge.get<RequestRes | null>(
      `${this.baseUrl}/${id}`,
      signal,
    );

    if (!request) return null;
    return modifyRequestRes(request);
  }

  public async create(data: RequestReq, signal?: AbortSignal) {
    const createdRequest = await this.bridge.post<RequestReq, RequestRes>(
      this.baseUrl,
      data,
      signal,
    );
    return modifyRequestRes(createdRequest);
  }
}
