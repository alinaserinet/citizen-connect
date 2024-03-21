import type { AppError } from './AppError';

type ErrorHandler<ErrorType = unknown> = (error: ErrorType) => AppError;
export default ErrorHandler;
