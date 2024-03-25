import { checkFetchErrors, generalClientErrorHandler } from '@libs/utils';
import type { TokenHandler } from '@types';

import HttpClient from '../HttpClient';

const accessTokenHandler: TokenHandler = () => {
  return 'token';
};

const userHttpClient = new HttpClient(
  'http://localhost:8000',
  checkFetchErrors,
  generalClientErrorHandler,
  accessTokenHandler,
);

export default userHttpClient;
