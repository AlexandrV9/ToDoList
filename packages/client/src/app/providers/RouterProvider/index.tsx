import {
  RouterProvider as BaseRouterProvider,
  createRouter,
} from "@tanstack/react-router";
import { useShallow } from "zustand/shallow";

import { useAuthStore } from "~/features/auth";

import { routeTree } from "~/routeTree.gen";

import { queryClient } from "~/shared/libs";
import type { RouterContext } from "./types";

const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  context: {
    auth: null,
    queryClient,
  } as unknown as RouterContext,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export const RouterProvider = () => {
  const auth = useAuthStore(
    useShallow((state) => ({
      status: state.status,
      user: state.user,
      isAuthenticated: state.status === "AUTHENTICATED",
      isPending: state.status === "PENDING",
      isIdle: state.status === "IDLE",
    }))
  );

  return <BaseRouterProvider router={router} context={{ auth }} />;
};
