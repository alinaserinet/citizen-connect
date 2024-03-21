import type { AppError } from '@types';

import clientErrors from './clientErrors';
import type { ClientErrorKey } from './clientErrors/keys';
import domainErrors from './domainErrors';
import type DomainErrorCodes from './domainErrors/codes';
import httpErrors from './httpErrors';
import type { HttpErrorKey } from './httpErrors/keys';

type ErrorKey = ClientErrorKey | DomainErrorCodes | HttpErrorKey;
const errors: Record<ErrorKey, AppError> = {
  ...clientErrors,
  ...httpErrors,
  ...domainErrors,
};

export default errors;
