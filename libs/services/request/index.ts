import { userHttpClient, userHttpServer } from '@libs/bridges';

import RequestService from './RequestService';

export const requestService = {
  server: new RequestService('/request', userHttpServer),
  client: new RequestService('/request', userHttpClient),
};
