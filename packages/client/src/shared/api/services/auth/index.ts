import axios from "axios";
import type { AuthUserDTO } from "./types";
import type { RequestResponse } from "../types";

const apiEndpoint = import.meta.env.VITE_API_ENDPOINT;

class AuthService {
  signInByLogin(data: { login: string; password: string }) {
    return axios.post<RequestResponse<{ user: AuthUserDTO; accessToken: string }>>(
      `${apiEndpoint}/auth/sign-in`,
      data
    );
  }

  signUp(data: { login: string; name?: string; password: string }) {
    return axios.post<RequestResponse>(`${apiEndpoint}/auth/sign-up`, data);
  }

  checkIsAuth(accessToken: string) {
    return axios.get<RequestResponse<{ user: AuthUserDTO }>>(
      `${apiEndpoint}/auth`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
  }

  refresh() {
    return axios.get<RequestResponse<{ token: string }>>(
      `${apiEndpoint}/auth/refresh`
    );
  }

  signOut() {
    return axios.post<RequestResponse>(`${apiEndpoint}/auth/sign-out`);
  }
}

export const authService = new AuthService();

export * from "./types";
