import type { Department } from '@types';

import type { DepartmentRes } from './types';

export function modifyDepartmentRes(departmentRes: DepartmentRes): Department {
  return {
    id: departmentRes.id,
    title: departmentRes.title,
    slug: departmentRes.slug,
    iconUrl: departmentRes.icon_url,
    description: departmentRes.description,
    createdAt: departmentRes.created_at,
    updatedAt: departmentRes.updated_at,
    deletedAt: departmentRes.deleted_at,
  };
}
