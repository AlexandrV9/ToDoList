import { devtools } from "zustand/middleware";
import { create } from "zustand";
import type { AuthStatutus, AuthUser } from "../types";

type AuthStore = {
  authUser: AuthUser | null;
  authStatus: AuthStatutus;
  actions: {
    setAuthStatus: (value: AuthStatutus) => void;
    setAuthUser: (value: AuthUser) => void;
  };
};

export const useAuthStore = create<AuthStore>()(
  devtools((set) => ({
    authStatus: "IDLE",
    authUser: null,
    actions: {
      setAuthStatus: (value) => {
        set({ authStatus: value });
      },
      setAuthUser: (value) => {
        set({ authUser: value });
      },
    },
  }))
);
