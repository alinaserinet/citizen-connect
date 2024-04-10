import { userHttpClient, userHttpServer } from '@libs/bridges';

import LocationService from './LocationService';

export const locationService = {
  server: new LocationService('/location', userHttpServer),
  client: new LocationService('/location', userHttpClient),
};
