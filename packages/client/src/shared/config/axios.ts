import axios from "axios";
import { ACCESS_TOKEN_KEY } from "../constants";

const apiEndpoint = import.meta.env.VITE_API_ENDPOINT;

const refreshTokenURL = `${apiEndpoint}/auth/refresh`;

export const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: import.meta.env.VITE_APP_URL,
});

axiosInstance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem(
    ACCESS_TOKEN_KEY
  )}`;
  return config;
});

axiosInstance.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = { ...error.config, _isRetry: false };

    if (
      error.response.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;

      try {
        const response = await axios.get(refreshTokenURL, {
          withCredentials: true,
        });

        const newAccessToken = response.data.accessToken;

        if (newAccessToken) {
          localStorage.setItem(ACCESS_TOKEN_KEY, newAccessToken);

          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

          return axiosInstance(originalRequest);
        }
      } catch (refreshError) {
        console.log("Refresh token failed:", refreshError);

        localStorage.removeItem(ACCESS_TOKEN_KEY);

        window.location.href = "/signin";
        return Promise.reject(refreshError);
      }
    }

    throw error;
  }
);
