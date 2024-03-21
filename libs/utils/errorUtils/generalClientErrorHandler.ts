import errors, { errorKeywords } from '@data/errors';
import type { AppError, ErrorHandler } from '@types';
import { isInstanceOfAppError } from '@types';

const generalClientErrorHandler: ErrorHandler = (error: unknown) => {
  if (isInstanceOfAppError(error)) {
    return error as AppError;
  }

  if (!(error instanceof TypeError)) {
    return {
      ...errors.ERR_UNKNOWN,
      description: String(error),
      time: Date.now(),
    };
  }

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

export default generalClientErrorHandler;
