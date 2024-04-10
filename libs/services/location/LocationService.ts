import type { HttpBridge } from '@libs/bridges';
import type { Location } from '@types';

import { modifyLocationRes } from './modifier';
import type { LocationRes } from './types';

export default class LocationService {
  public constructor(
    private readonly baseUrl: string,
    private readonly bridge: HttpBridge,
  ) {}

  public async getAll(signal?: AbortSignal): Promise<Location[]> {
    const locations = await this.bridge.get<LocationRes[]>(
      this.baseUrl,
      signal,
    );
    return locations.map(request => modifyLocationRes(request));
  }
}
