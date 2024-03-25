// eslint-disable-next-line import/no-cycle
import { authServerService } from '@libs/services';
import type { Awaitable, User } from 'next-auth';
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
      const res = await authServerService.entry(mobile, otp);
      return await ({
        accessToken: res.access_token,
        refreshToken: res.refresh_token,
      } as Awaitable<User>);
    } catch (_) {
      return null;
    }
  },
});
