import errors, { errorKeywords } from '@data/errors';
import type { AppError, ErrorHandler } from '@types';
import { isInstanceOfAppError } from '@types';

const keywordsErrorHandler: ErrorHandler<Error> = error => {
  const errorMessage = error.message.toLowerCase();
  const [, foundError] = Object.entries(errorKeywords).find(([keyword]) => {
    return errorMessage.includes(keyword);
  }) ?? [null, null];

  if (foundError) {
    return { ...foundError, time: Date.now() };
  }

  return {
    ...errors.ERR_UNKNOWN,
    description: error.message,
    time: Date.now(),
  };
};

const generalClientErrorHandler: ErrorHandler = (error: unknown) => {
  if (!(error instanceof Error) || !error.message) {
    return {
      ...errors.ERR_UNKNOWN,
      time: Date.now(),
    };
  }

  if (isNaN(+error.message)) {
    return keywordsErrorHandler(error);
  }

  const { cause } = error;

  if (typeof cause === 'object' && isInstanceOfAppError(cause)) {
    const foundError = cause as AppError;
    const time = foundError.time ?? Date.now();
    return {
      ...foundError,
      time,
    };
  }

  return {
    ...errors.ERR_UNKNOWN,
    description: error.message,
    time: Date.now(),
  };
};

export default generalClientErrorHandler;
