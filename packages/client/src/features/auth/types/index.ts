import type { AuthUser as BaseAuthUser } from "~/shared/api";

export type AuthStatutus = "IDLE" | "AUTHENTICATED" | "UNAUTHENTICATED";

export type AuthUser = BaseAuthUser;

export type AuthData = {
  user: AuthUser | null;
};
