import { authService } from "~/shared/api";
import { authActions, useAuthStore } from "./useAuthStore";
import { tokenManager } from "~/shared/utils";

class AuthManager {
  async checkAuth(): Promise<boolean> {
    try {
      authActions.setStatus("PENDING");

      let accessToken = tokenManager.getAccessToken();

      if (!accessToken) {
        const { data } = await authService.refresh();

        accessToken = data.data!.accessToken;
        tokenManager.setAccessToken(accessToken);
      }

      const response = await authService.checkIsAuth();
      const { data, success } = response.data;

      if (success && data) {
        authActions.setUser(data.user);
        authActions.setStatus("AUTHENTICATED");
        return true;
      }

      throw new Error("Authentication failed");
    } catch (error) {
      console.log(error);

      authActions.setStatus("UNAUTHENTICATED");
      return false;
    }
  }

  async signInByLogin(credentials: { login: string; password: string }) {
    try {
      authActions.setStatus("PENDING");

      const response = await authService.signInByLogin(credentials);
      const { data, message, success } = response.data;

      if (!success || !data) {
        throw new Error(message || "Request failed");
      }

      tokenManager.setAccessToken(data.accessToken);
      authActions.setStatus("AUTHENTICATED");

      return response;
    } catch (error) {
      console.log(error);
      authActions.setStatus("UNAUTHENTICATED");
      throw error;
    }
  }

  async signUp(value: { name?: string; login: string; password: string }) {
    try {
      const response = await authService.signUp(value);
      const { data, message, success } = response.data;

      if (!success || !data) {
        throw new Error(message || "request error");
      }

      return data;
    } catch (error) {
      console.log(error);
    }
  }

  signOut = async () => {
    const currentStatus = useAuthStore.getState().status;

    try {
      authActions.setStatus("PENDING");

      const response = await authService.signOut();
      const { data, message, success } = response.data;

      if (!success || !data) {
        throw new Error(message || "request error");
      }

      tokenManager.removeTokens();
      authActions.setStatus("UNAUTHENTICATED");
    } catch (error) {
      console.log(error);
      authActions.setStatus(currentStatus);
    }
  };
}

export const authManager = new AuthManager();
