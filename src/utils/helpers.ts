export function createErrorMessage(err: any) {
  let message = "Something went wrong";
  if (err.response?.data?.message) {
    message = err.response?.data?.message;
  } else if (err.message) {
    message = err.message;
  }
  return message;
}

export function redirectPath(isAuthenticated: boolean) {
  return isAuthenticated ? "/" : "/auth/login";
}
