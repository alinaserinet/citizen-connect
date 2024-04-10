import type { HttpBridge } from '@libs/bridges';
import type { Department } from '@types';

import { modifyDepartmentRes } from './modifier';
import type { DepartmentRes } from './types';

export default class DepartmentService {
  public constructor(
    private readonly baseUrl: string,
    private readonly bridge: HttpBridge,
  ) {}

  public async getAll(signal?: AbortSignal): Promise<Department[]> {
    const departments = await this.bridge.get<DepartmentRes[]>(
      this.baseUrl,
      signal,
    );
    return departments.map(department => modifyDepartmentRes(department));
  }
}
