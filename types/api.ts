export type ApiError = {
  status?: number;
  errorData: {
    code: number;
    message: string;
  };
  stack?: string;
  message: string;
};

export type ApiResponse<T> = {
  code: number;
  message: string;
  data?: T;
};
