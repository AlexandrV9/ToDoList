import type { QueryClient } from "@tanstack/react-query";
import type { AuthData } from "~/features/auth";

export type RouterContext = {
  auth: AuthData;
  queryClient: QueryClient;
};
