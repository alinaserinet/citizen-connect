// eslint-disable-next-line import/no-cycle
import { authHttpClient, authHttpServer } from '@libs/bridges';

import AuthService from './AuthService';

export const authService = {
  client: new AuthService('/auth', authHttpClient),
  server: new AuthService('/auth', authHttpServer),
};
