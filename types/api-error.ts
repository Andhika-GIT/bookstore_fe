export type ApiError = {
  status?: number;
  errorData: {
    code: number;
    message: string;
  };
  stack?: string;
  message: string;
};
