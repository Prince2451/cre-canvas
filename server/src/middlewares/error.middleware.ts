import { ErrorRequestHandler } from "express";

const errorMiddleware: ErrorRequestHandler = (
  error,
  request,
  response,
  next
) => {
  const status = error.status || 500;
  const message = error.message || "Something went wrong";
  response.status(status).json({
    status,
    message,
  });
};

export default errorMiddleware;
