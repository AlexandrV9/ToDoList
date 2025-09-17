import { ACCESS_TOKEN_KEY } from "../constants";

export const tokenManager = {
  setAccessToken: (token: string) => {
    localStorage.setItem(ACCESS_TOKEN_KEY, token);
  },
  getAccessToken: () => {
    return localStorage.getItem(ACCESS_TOKEN_KEY);
  },
  removeTokens: () => {
    localStorage.remove(ACCESS_TOKEN_KEY);
  },
};
