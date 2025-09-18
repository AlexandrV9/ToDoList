import type { AuthUserDTO } from "./types";
import type { RequestResponse } from "../types";
import axios from "axios";
import { axiosInstance } from "../../../config/axios";

const apiEndpoint = import.meta.env.VITE_API_ENDPOINT;

class AuthService {
  signInByLogin(data: { login: string; password: string }) {
    return axiosInstance.post<
      RequestResponse<{ user: AuthUserDTO; accessToken: string }>
    >(`${apiEndpoint}/auth/sign-in`, data);
  }

  signUp(data: { login: string; name?: string; password: string }) {
    return axiosInstance.post<RequestResponse>(
      `${apiEndpoint}/auth/sign-up`,
      data
    );
  }

  checkIsAuth() {
    return axios.get<
      RequestResponse<{ user: AuthUserDTO; accessToken?: string }>
    >(`${apiEndpoint}/auth`, {
      withCredentials: true,
    });
  }

  signOut() {
    return axiosInstance.post<RequestResponse>(`${apiEndpoint}/auth/sign-out`);
  }

  // checkRefresh() {
  //   return axios.get<RequestResponse<{ hasRefreshToken: boolean }>>(
  //     `${apiEndpoint}/auth/check-refresh`,
  //     {
  //       withCredentials: true,
  //     }
  //   );
  // }

  refresh() {
    return axios.get<RequestResponse<{ accessToken: string }>>(
      `${apiEndpoint}/auth/refresh`,
      {
        withCredentials: true,
      }
    );
  }
}

export const authService = new AuthService();

export * from "./types";
