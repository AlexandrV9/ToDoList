import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { PageLayout } from "~/shared/layouts";

const RootLayout = () => (
  <PageLayout>
    <Outlet />
    <TanStackRouterDevtools />
  </PageLayout>
);

export const Route = createRootRoute({ component: RootLayout });
