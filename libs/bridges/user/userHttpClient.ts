'use client';
import { checkFetchErrors, generalClientErrorHandler } from '@libs/utils';
import type { TokenHandler } from '@types';
import { getSession } from 'next-auth/react';

import HttpBridge from '../HttpBridge';

const accessTokenHandler: TokenHandler = async () => {
  const session = await getSession();
  console.log('session::', session);

  // @ts-expect-error no-param
  return session?.user?.access_token;
};

const userHttpClient = new HttpBridge(
  'http://localhost:8000',
  checkFetchErrors,
  generalClientErrorHandler,
  accessTokenHandler,
);

export default userHttpClient;
