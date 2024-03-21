import type { DomainErrorCodes } from '@data/errors';
import errors from '@data/errors';
import type { ErrorChecker } from '@types';

const checkFetchErrors: ErrorChecker = async (
  response: Response,
  url: string,
  requestInit: RequestInit,
) => {
  const { status, ok } = response;

  if (ok) return;

  if (!(status in errors)) {
    throw { ...errors.ERR_UNKNOWN, url, requestInit };
  }

  const parsedResponse = await response.json();
  const errorCode = parsedResponse?.code as DomainErrorCodes;

  throw { ...errors[errorCode], url, requestInit, code: errorCode ?? status };
};

export default checkFetchErrors;
