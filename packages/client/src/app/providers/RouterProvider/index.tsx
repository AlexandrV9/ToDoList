import {
  RouterProvider as BaseRouterProvider,
  createRouter,
} from "@tanstack/react-router";

import { routeTree } from "~/routeTree.gen";

import { queryClient } from "~/shared/libs";
import type { RouterContext } from "./types";

const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  context: {
    queryClient,
  } as unknown as RouterContext,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export const RouterProvider = () => {
  return <BaseRouterProvider router={router} context={{ queryClient }} />;
};
