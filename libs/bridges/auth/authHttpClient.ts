'use client';
import { checkFetchErrors, generalClientErrorHandler } from '@libs/utils';
import type { TokenHandler } from '@types';
import { getSession } from 'next-auth/react';

import HttpBridge from '../HttpBridge';

const refreshTokenHandler: TokenHandler = async () => {
  const session = await getSession();
  return session?.user.refreshToken ?? '';
};

const authHttpClient = new HttpBridge(
  'http://localhost:8000',
  checkFetchErrors,
  generalClientErrorHandler,
  refreshTokenHandler,
);

export default authHttpClient;
