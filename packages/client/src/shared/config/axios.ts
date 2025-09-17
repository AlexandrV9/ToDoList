import axios from "axios";

const apiEndpoint = import.meta.env.VITE_API_ENDPOINT;

const refreshTokenURL = `${apiEndpoint}/auth/refresh`;

export const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: import.meta.env.VITE_APP_URL,
});

axiosInstance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
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
      try {
        const resp = await axiosInstance.get(refreshTokenURL);

        localStorage.setItem("token", resp.data.accessToken);

        return axiosInstance.request(originalRequest);
      } catch (error) {
        console.log("AUTH ERROR", error);
      }
    }

    throw error;
  }
);
