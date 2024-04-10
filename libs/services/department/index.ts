import { userHttpClient, userHttpServer } from '@libs/bridges';

import DepartmentService from './DepartmentService';

export const departmentService = {
  server: new DepartmentService('/department', userHttpServer),
  client: new DepartmentService('/department', userHttpClient),
};
