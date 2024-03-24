import { authService } from '@libs/services';
import type { User } from 'next-auth';
import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';

export const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        mobile: { label: 'mobile', type: 'number' },
        otp: { label: 'otp', type: 'number' },
      },

      async authorize(credentials) {
        const { mobile, otp } = credentials ?? { mobile: null, otp: null };
        if (!mobile || !otp) return null;

        try {
          const res = await authService.entry(mobile, otp);
          return res as unknown as User;
        } catch (_) {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: '/auth/login',
  },
  callbacks: {
    jwt({ token, user }) {
      return { ...token, ...user };
    },

    session({ session, token }) {
      session.user = token;
      return session;
    },
  },
});

export { handler as GET, handler as POST };
