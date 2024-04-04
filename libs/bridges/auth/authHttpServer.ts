// eslint-disable-next-line import/no-cycle
import { authConfig } from '@config';
import { checkFetchErrors, generalClientErrorHandler } from '@libs/utils';
import type { TokenHandler } from '@types';
import { getServerSession } from 'next-auth';

import HttpBridge from '../HttpBridge';

const refreshTokenHandler: TokenHandler = async () => {
  const session = await getServerSession(authConfig);
  return session?.user.refreshToken ?? '';
};

const authHttpServer = new HttpBridge(
  process.env.MAIN_BASE_API_URL,
  checkFetchErrors,
  generalClientErrorHandler,
  refreshTokenHandler,
);

export default authHttpServer;
