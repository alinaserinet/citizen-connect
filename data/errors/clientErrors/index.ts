import { Question } from '@phosphor-icons/react/dist/ssr/Question';
import type { AppError } from '@types';

import type { ClientErrorKey } from './keys';

const clientErrors: Record<ClientErrorKey, AppError> = {
  ERR_UNKNOWN: {
    message: 'خطای ناشناخته‌ای رخ داد',
    type: 'client',
    icon: Question,
  },
};

export default clientErrors;
