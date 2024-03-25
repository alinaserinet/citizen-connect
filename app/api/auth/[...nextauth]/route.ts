import { authConfig } from '@config';
import NextAuth from 'next-auth/next';

export const handler = NextAuth(authConfig);

export { handler as GET, handler as POST };
