import type { HttpBridge } from '@libs/bridges';
import type { Category } from '@types';

import { modifyCategoryRes } from './modifier';
import type { CategoryRes } from './types';

export default class CategoryService {
  public constructor(
    private readonly baseUrl: string,
    private readonly bridge: HttpBridge,
  ) {}

  public async getAll(signal?: AbortSignal): Promise<Category[]> {
    const categories = await this.bridge.get<CategoryRes[]>(
      this.baseUrl,
      signal,
    );
    return categories.map(category => modifyCategoryRes(category));
  }
}
