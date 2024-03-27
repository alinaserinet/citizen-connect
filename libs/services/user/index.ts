// eslint-disable-next-line import/no-cycle
import { userHttpClient, userHttpServer } from '@libs/bridges';

import UserService from './UserService';

export const userClientService = new UserService('/user', userHttpClient);
export const userServerService = new UserService('/user', userHttpServer);
