import apiUrls from "./apiUrls";
import axiosInstance from "./axios";

type LoginRequestPayload = { email: string; password: string };
type LoginResponseData = {
  token: string;
  refreshToken: string;
};
type RegisterRequestPayload = {
  email: string;
  password: string;
  name: string;
  username: string;
};
type RegisterResponseData = {
  token: string;
  refreshToken: string;
};
type RefreshTokenRequestPayload = { refreshToken: string };
type RefreshTokenResponseData = {
  token: string;
};

function login(payload: LoginRequestPayload) {
  return axiosInstance.post<LoginResponseData>(apiUrls.auth.login, payload);
}
function register(payload: RegisterRequestPayload) {
  return axiosInstance.post<RegisterResponseData>(
    apiUrls.auth.register,
    payload
  );
}
function getRefreshToken(payload: RefreshTokenRequestPayload) {
  return axiosInstance.post<RefreshTokenResponseData>(
    apiUrls.auth.refreshToken,
    payload
  );
}

export { login, register, getRefreshToken };
