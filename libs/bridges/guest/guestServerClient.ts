import { checkFetchErrors, generalClientErrorHandler } from '@libs/utils';

import HttpBridge from '../HttpBridge';

const guestHttpServer = new HttpBridge(
  '/',
  checkFetchErrors,
  generalClientErrorHandler,
  () => '',
);

export default guestHttpServer;
