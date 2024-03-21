import { checkFetchErrors, generalClientErrorHandler } from '@libs/utils';

import HttpClient from '../HttpClient';

const guestHttpClient = new HttpClient(
  '/',
  checkFetchErrors,
  generalClientErrorHandler,
  () => '',
);

export default guestHttpClient;
