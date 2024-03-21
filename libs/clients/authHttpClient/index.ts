import { checkFetchErrors, generalClientErrorHandler } from '@libs/utils';
import type { TokenHandler } from '@types';

import HttpClient from '../HttpClient';

const refreshTokenHandler: TokenHandler = () => 'refresh-token';

const authHttpClient = new HttpClient(
  '/',
  checkFetchErrors,
  generalClientErrorHandler,
  refreshTokenHandler,
);

export default authHttpClient;
