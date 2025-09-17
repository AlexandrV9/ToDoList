import { createFileRoute, Outlet, useNavigate } from "@tanstack/react-router";
import { LangSwitcher, ThemeSwitcher } from "~/features";
import { BackButton, Box, Flex, PageLayout } from "~/shared/ui";

export const Route = createFileRoute("/(auth)/_auth")({
  component: AuthLayout,
});

export function AuthLayout() {
  const navigate = useNavigate();

  const handleGoToWelcomePage = () => {
    navigate({
      to: "/welcome",
    });
  };

  return (
    <PageLayout px="1rem">
      <PageLayout.TopContainer
        as="header"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box
          width="full"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <BackButton onClick={handleGoToWelcomePage} />
          <Flex justifyContent="end" gap={2}>
            <LangSwitcher />
            <ThemeSwitcher />
          </Flex>
        </Box>
      </PageLayout.TopContainer>
      <PageLayout.MainContainer as="main">
        <Box mt="3rem" width="full" display="flex" justifyContent="center">
          <Outlet />
        </Box>
      </PageLayout.MainContainer>
    </PageLayout>
  );
}
