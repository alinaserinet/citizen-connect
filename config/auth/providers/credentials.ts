import { authService } from '@libs/services';
import type { User } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default CredentialsProvider({
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
});
