import type { AuthOptions } from 'next-auth';

type BaseAuthConfig = Omit<AuthOptions, 'callbacks' | 'providers'>;

export const authBaseConfig: BaseAuthConfig = {
  pages: {
    signIn: '/auth/login',
  },
  session: { strategy: 'jwt' },
};
