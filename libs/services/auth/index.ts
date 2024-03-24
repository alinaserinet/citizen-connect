import { authHttpClient } from '@libs/clients';

import AuthService from './AuthService';

export const authService = new AuthService('/auth', authHttpClient);
