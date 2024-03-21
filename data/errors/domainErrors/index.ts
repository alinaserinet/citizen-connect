import type { AppError } from '@types';

import DomainErrorCodes from './codes';

const domainErrors: Record<DomainErrorCodes, AppError> = {
  [DomainErrorCodes.DuplicateOtpRequest]: {
    type: 'domain',
    message: 'درخواست تکراری برای کد احراز هویت',
  },
  [DomainErrorCodes.InvalidOtpCode]: {
    type: 'domain',
    message: 'کد احراز هویت اشتباه است',
  },
  [DomainErrorCodes.UserNotFound]: {
    type: 'domain',
    message: 'کاربر یافت نشد',
  },
};

export default domainErrors;
