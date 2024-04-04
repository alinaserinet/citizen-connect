'use client';
import { checkFetchErrors, generalClientErrorHandler } from '@libs/utils';
import type { TokenHandler } from '@types';
import { getSession } from 'next-auth/react';

import HttpBridge from '../HttpBridge';

const accessTokenHandler: TokenHandler = async () => {
  const session = await getSession();
  return session?.user.accessToken ?? '';
};

const userHttpClient = new HttpBridge(
  process.env.NEXT_PUBLIC_BASE_API_URL,
  checkFetchErrors,
  generalClientErrorHandler,
  accessTokenHandler,
);

export default userHttpClient;
