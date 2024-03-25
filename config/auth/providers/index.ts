import type { Provider } from 'next-auth/providers/index';

import credentials from './credentials';

export const authProviders: Provider[] = [credentials];
