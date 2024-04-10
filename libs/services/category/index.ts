import { userHttpClient, userHttpServer } from '@libs/bridges';

import CategoryService from './CategoryService';

export const categoryService = {
  server: new CategoryService('/category', userHttpServer),
  client: new CategoryService('/category', userHttpClient),
};
