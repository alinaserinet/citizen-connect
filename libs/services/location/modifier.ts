import type { Location } from '@types';

import type { LocationRes } from './types';

export function modifyLocationRes(locationRes: LocationRes): Location {
  return {
    id: locationRes.id,
    title: locationRes.title,
    slug: locationRes.slug,
    iconUrl: locationRes.icon_url,
    description: locationRes.description,
    createdAt: locationRes.created_at,
    updatedAt: locationRes.updated_at,
    deletedAt: locationRes.deleted_at,
  };
}
