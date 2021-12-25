import axios from "axios";
import * as constants from "../utils/constants";
import LocalStorage from "../utils/localStorageHelper";
import apiUrls from "./apiUrls";
import { getRefreshToken } from "./auth";

const axiosInstance = axios.create({
  baseURL: constants.baseApiUrl,
});

axiosInstance.interceptors.request.use(
  (config) => {
    document.cookie = "";
    const token = LocalStorage.getItem(constants.tokenKey);
    config.headers = {
      ...config.headers,
    };
    config.headers["Content-type"] = "application/json";
    if (config.url === "auth/login") {
      return config;
    }
    if (token && !config.headers["Authorization"]) {
      config.headers["Authorization"] = "Bearer " + token;
    }

    return config;
  },
  (err) => {
    Promise.reject(err);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (err) => {
    const req = err.config;
    if (err.response?.status === 403 || err.response?.status === 401) {
      if (req.url === apiUrls.auth.refreshToken) {
        return Promise.reject(err);
      }
      let refreshToken = LocalStorage.getItem(constants.refreshTokenKey);
      let payload = {
        refreshToken,
      };
      try {
        const res = await getRefreshToken(payload);
        if (res.status === 200) {
          let access = res.data.token;
          if (access) {
            LocalStorage.setItem(constants.tokenKey, access);
            req.headers["Authorization"] = "Bearer " + access;
            return axiosInstance(req);
          }
        }
      } catch {
        return { data: null };
      }
    } else if (err.response?.status === 400 || err.response?.status === 409) {
      return Promise.reject(err.response.data);
    }
    return Promise.reject(err);
  }
);

export default axiosInstance;
