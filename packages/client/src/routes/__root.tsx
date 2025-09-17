import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";

import type { RouterContext } from "~/app/providers/RouterProvider/types"; // TODO: подумать над другим местом размещения
// import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

const RootLayout = () => (
  <>
    <Outlet />
    {/* <TanStackRouterDevtools position="bottom-right" /> */}
  </>
);

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootLayout,
});
