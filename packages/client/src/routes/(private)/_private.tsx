import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { authManager } from "~/features/auth";
import { PageLayout } from "~/shared/ui";
import { Header, NavBar } from "~/widgets";

export const Route = createFileRoute("/(private)/_private")({
  beforeLoad: async ({ context, location }) => {
    const authStatus = context.auth.status;

    if (authStatus === "IDLE") {
      try {
        const isAuthenticated = await authManager.checkAuth();

        if (!isAuthenticated) {
          throw new Error();
        }

        return;
      } catch {
        throw redirect({
          to: "/signin",
          search: { redirect: location.href },
        });
      }
    }

    if (authStatus === "UNAUTHENTICATED") {
      throw redirect({
        to: "/signin",
        search: { redirect: location.href },
      });
    }

    if (authStatus === "PENDING") {
      console.log("Auth check in progress...");
    }
  },
  component: PrivateLayout,
});

export function PrivateLayout() {
  return (
    <PageLayout>
      <PageLayout.TopContainer
        px="1rem"
        display="flex"
        justifyContent="center"
        alignItems="center"
        borderBottom="1px solid"
        borderColor="border.emphasized"
      >
        <Header />
      </PageLayout.TopContainer>
      <PageLayout.MainContainer p="1rem">
        <Outlet />
      </PageLayout.MainContainer>
      <PageLayout.BottomContainer
        borderTop="1px solid"
        borderColor="border.emphasized"
      >
        <NavBar />
      </PageLayout.BottomContainer>
    </PageLayout>
  );
}
