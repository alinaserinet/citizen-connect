import { checkFetchErrors, generalClientErrorHandler } from '@libs/utils';

import HttpBridge from '../HttpBridge';

const guestHttpServer = new HttpBridge(
  process.env.MAIN_BASE_API_URL,
  checkFetchErrors,
  generalClientErrorHandler,
  () => '',
);

export default guestHttpServer;
