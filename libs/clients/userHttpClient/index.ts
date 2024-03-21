import { checkFetchErrors, generalClientErrorHandler } from '@libs/utils';
import type { TokenHandler } from '@types';

import HttpClient from '../HttpClient';

const accessTokenHandler: TokenHandler = () => 'access-token';

const userHttpClient = new HttpClient(
  '/',
  checkFetchErrors,
  generalClientErrorHandler,
  accessTokenHandler,
);

export default userHttpClient;
