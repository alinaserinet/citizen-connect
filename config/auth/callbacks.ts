import type { CallbacksOptions } from 'next-auth';

export const authCallbacks: Partial<CallbacksOptions> = {
  jwt({ token, user }) {
    return { ...token, ...user };
  },

  session({ session, token }) {
    session.user = token;
    return session;
  },
};
