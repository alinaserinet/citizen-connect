import type { AppError } from './AppError';

type ErrorMiddleware = (error: AppError) => Promise<any>;

export default ErrorMiddleware;
