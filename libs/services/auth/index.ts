import { authHttpClient, authHttpServer } from '@libs/bridges/auth';

import AuthService from './AuthService';

export const authService = {
  client: new AuthService('/auth', authHttpClient),
  server: new AuthService('/auth', authHttpServer),
};
