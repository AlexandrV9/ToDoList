import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

const RootLayout = () => (
  <>
    <div className="p-2 flex gap-2">
      <Link to="/" className="[&.active]:font-bold">
        index |
      </Link>{" "}
      <Link to="/sign-in" className="[&.active]:font-bold">
        sign-in |
      </Link>{" "}
      <Link to="/sign-up" className="[&.active]:font-bold">
        sign-up
      </Link>
    </div>
    <hr />
    <Outlet />
    <TanStackRouterDevtools />
  </>
);

export const Route = createRootRoute({ component: RootLayout });
