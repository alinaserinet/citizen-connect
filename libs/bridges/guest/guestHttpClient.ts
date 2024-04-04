'use client';
import { checkFetchErrors, generalClientErrorHandler } from '@libs/utils';

import HttpBridge from '../HttpBridge';

const guestHttpClient = new HttpBridge(
  process.env.NEXT_PUBLIC_BASE_API_URL,
  checkFetchErrors,
  generalClientErrorHandler,
  () => '',
);

export default guestHttpClient;
