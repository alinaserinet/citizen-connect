import type { Request } from '@types';

import type { RequestRes } from './types';

export function modifyRequestRes(requestRes: RequestRes): Request {
  return {
    id: requestRes.id,
    title: requestRes.title,
    description: requestRes.description,
    status: requestRes.status,
    priority: requestRes.priority,
    user_id: requestRes.user_id,
    departmentId: requestRes.department_id,
    locationId: requestRes.location_id,
    responsibleId: requestRes.responsible_id,
    categoryId: requestRes.category_id,
    createdAt: requestRes.created_at,
    updatedAt: requestRes.updated_at,
    deletedAt: requestRes.deleted_at,
  };
}
