import type { ErrorKey } from '@data/errors';
import errors from '@data/errors';
import type { ErrorChecker } from '@types';

const checkFetchErrors: ErrorChecker = async (
  response: Response,
  url: string,
  requestInit: RequestInit,
) => {
  const { status, ok } = response;
  if (ok) return;

  const parsedResponse = await response.json();

  const errorCode = (parsedResponse?.error_code ?? status) as ErrorKey | null;

  if (!errorCode || !(errorCode in errors)) {
    throw new Error('ERR_UNKNOWN', { cause: errors.ERR_UNKNOWN });
  }

  throw new Error(`${errorCode}`, {
    cause: {
      url,
      requestInit,
      code: errorCode,
      ...errors[errorCode],
      time: parsedResponse?.unix,
    },
  });
};

export default checkFetchErrors;
