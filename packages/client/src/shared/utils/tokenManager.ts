import { ACCESS_TOKEN_KEY } from "../constants";

export const tokenManager = {
  setAccessToken: (token: string) => {
    localStorage.setItem(ACCESS_TOKEN_KEY, token);
  },
  getAccessToken: () => {
    return localStorage.getItem(ACCESS_TOKEN_KEY);
  },
  removeAccessToken: () => {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
  },
};
