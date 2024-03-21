import type { AppError } from './AppError';

type ErrorHandler = (error: unknown) => AppError;
export default ErrorHandler;
