import { createFileRoute, Outlet } from "@tanstack/react-router";
import { PageLayout } from "~/shared/ui";
import { Header, NavBar } from "~/widgets";

export const Route = createFileRoute("/(private)/_private")({
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
      >
        <Header />
      </PageLayout.TopContainer>
      <PageLayout.MainContainer px="1rem">
        <Outlet />
      </PageLayout.MainContainer>
      <PageLayout.BottomContainer>
        <NavBar />
      </PageLayout.BottomContainer>
    </PageLayout>
  );
}
