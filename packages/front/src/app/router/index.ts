import { createRouter } from "@tanstack/react-router";
import type { AuthData } from "~/features/auth";
import { routeTree } from "~/routeTree.gen";
import { queryClient } from "~/shared/libs";

const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  context: {
    auth: null as unknown as AuthData,
    queryClient,
  },
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export { router };
