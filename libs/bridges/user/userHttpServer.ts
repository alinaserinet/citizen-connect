import { checkFetchErrors, generalClientErrorHandler } from '@libs/utils';
import type { TokenHandler } from '@types';

import HttpBridge from '../HttpBridge';

const accessTokenHandler: TokenHandler = () => {
  return '$';
};

const userHttpServer = new HttpBridge(
  'http://localhost:8000',
  checkFetchErrors,
  generalClientErrorHandler,
  accessTokenHandler,
);

export default userHttpServer;
