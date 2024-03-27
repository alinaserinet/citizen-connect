// eslint-disable-next-line import/no-cycle
import { authService } from '@libs/services';
import { jwtDecode } from 'jwt-decode';
import type { Awaitable, User } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

interface JWTDecoded {
  sub: number;
  full_name: string;
  isEmployee: boolean;
  iat: number;
  exp: number;
}

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
      const res = await authService.server.entry(mobile, otp);
      const decoded = jwtDecode<JWTDecoded>(res.access_token);
      return await ({
        accessToken: res.access_token,
        refreshToken: res.refresh_token,
        name: decoded.full_name,
      } as Awaitable<User>);
    } catch (_) {
      return null;
    }
  },
});
