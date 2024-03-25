// eslint-disable-next-line import/no-cycle
import { authHttpClient, authHttpServer } from '@libs/bridges';

import AuthService from './AuthService';

export const authClientService = new AuthService('/auth', authHttpClient);
export const authServerService = new AuthService('/auth', authHttpServer);
