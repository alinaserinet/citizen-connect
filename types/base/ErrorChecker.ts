type ErrorChecker = (
  response: Response,
  url: string,
  requestInit: RequestInit,
) => Promise<void>;

export default ErrorChecker;
