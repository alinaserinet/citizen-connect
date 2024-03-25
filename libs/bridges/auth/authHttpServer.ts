'use client';
import { checkFetchErrors, generalClientErrorHandler } from '@libs/utils';
import type { TokenHandler } from '@types';

import HttpBridge from '../HttpBridge';

const refreshTokenHandler: TokenHandler = () => 'refresh-token';

const authHttpServer = new HttpBridge(
  'http://localhost:8000',
  checkFetchErrors,
  generalClientErrorHandler,
  refreshTokenHandler,
);

export default authHttpServer;
