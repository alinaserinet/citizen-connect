'use client';
import { checkFetchErrors, generalClientErrorHandler } from '@libs/utils';

import HttpBridge from '../HttpBridge';

const guestHttpClient = new HttpBridge(
  '/',
  checkFetchErrors,
  generalClientErrorHandler,
  () => '',
);

export default guestHttpClient;
