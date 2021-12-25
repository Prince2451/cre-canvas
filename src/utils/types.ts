import { AxiosError } from "axios";

export type ApiError = Partial<{
  message: string;
  status: number;
}>;
export type RequestError = ApiError | AxiosError;