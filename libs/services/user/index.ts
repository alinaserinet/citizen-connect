import { userHttpClient } from '@libs/clients';

import UserService from './UserService';

export const userService = new UserService('/user', userHttpClient);
