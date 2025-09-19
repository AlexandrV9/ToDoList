import { Box } from "@chakra-ui/react";
import {
  createRootRouteWithContext,
  Outlet,
  useNavigate,
  useRouter,
} from "@tanstack/react-router";

import type { RouterContext } from "~/app/providers/RouterProvider/types"; // TODO: подумать над другим местом размещения
import { LangSwitcher, ThemeSwitcher } from "~/features";
import { BackButton, Flex, PageLayout } from "~/shared/ui";
// import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

const RootLayout = () => (
  <>
    <Outlet />
    {/* <TanStackRouterDevtools position="bottom-right" initialIsOpen={false} /> */}
  </>
);

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootLayout,
  notFoundComponent: NofFoundPage,
});

function NofFoundPage() {
  const router = useRouter();
  const navigate = useNavigate();

  const handleGoBackPage = () => {
    if (router.history.length > 1) {
      router.history.back();
      return;
    }

    navigate({
      to: "/",
      replace: true,
    });
  };

  return (
    <PageLayout>
      <PageLayout.TopContainer
        as="header"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        borderBottom="1px solid"
        borderColor="border.emphasized"
        px="1rem"
      >
        <Box
          width="full"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <BackButton onClick={handleGoBackPage} />
          <Flex justifyContent="end" gap={2}>
            <LangSwitcher />
            <ThemeSwitcher />
          </Flex>
        </Box>
      </PageLayout.TopContainer>
      <PageLayout.MainContainer as="main" p="1rem">
        NotFound
      </PageLayout.MainContainer>
    </PageLayout>
  );
}
