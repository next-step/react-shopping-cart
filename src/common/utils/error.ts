import { AxiosError } from 'axios';

export class CustomError extends Error {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(message: string) {
    super(message);
  }
}
export const reportError = (error: unknown) => {
  if (error instanceof CustomError) {
    return error.message;
  } else if (error instanceof AxiosError) {
    return error.response?.data.message;
  }
  return 'error!';
};

export type ErrorMessageType = {
  errorMessage: string;
};
