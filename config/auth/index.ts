import type { AuthOptions } from 'next-auth';

import { authBaseConfig } from './base';
import { authCallbacks } from './callbacks';
import { authProviders } from './providers';

export const authConfig: AuthOptions = {
  ...authBaseConfig,
  callbacks: authCallbacks,
  providers: authProviders,
};
