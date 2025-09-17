import { createFileRoute, Outlet } from "@tanstack/react-router";
import { LangSwitcher, ThemeSwitcher } from "~/features";
import { Box, PageLayout } from "~/shared/ui";

export const Route = createFileRoute("/(public)/_public")({
  component: PublicLayout,
});

export function PublicLayout() {
  return (
    <PageLayout px="1rem">
      <PageLayout.TopContainer
        as="header"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box width="full" display="flex" justifyContent="end" gap={2}>
          <LangSwitcher />
          <ThemeSwitcher />
        </Box>
      </PageLayout.TopContainer>
      <PageLayout.MainContainer as="main">
        <Outlet />
      </PageLayout.MainContainer>
    </PageLayout>
  );
}
