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
