import type { Category } from '@types';

import type { CategoryRes } from './types';

export function modifyCategoryRes(categoryRes: CategoryRes): Category {
  return {
    id: categoryRes.id,
    title: categoryRes.title,
    slug: categoryRes.slug,
    iconUrl: categoryRes.icon_url,
    description: categoryRes.description,
    createdAt: categoryRes.created_at,
    updatedAt: categoryRes.updated_at,
    deletedAt: categoryRes.deleted_at,
  };
}
