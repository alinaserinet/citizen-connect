// eslint-disable-next-line import/no-cycle
import { userHttpClient, userHttpServer } from '@libs/bridges';

import UserService from './UserService';

export const userService = {
  server: new UserService('/user', userHttpServer),
  client: new UserService('/user', userHttpClient),
};
