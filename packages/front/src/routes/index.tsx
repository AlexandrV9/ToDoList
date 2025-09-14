import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "~/shared/layouts";
import { Box } from "~/shared/ui";
import { NavBar } from "~/widgets";

export const Route = createFileRoute("/")({
  component: IndexPage,
});

function IndexPage() {
  return (
    <Box display="flex" flexDirection="column" height="full">
      <PageLayout.TopContainer
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        Header
      </PageLayout.TopContainer>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexGrow={1}
      >
        MainContent
      </Box>
      <Box width="full" h="1px" background="bg.muted" />
      <PageLayout.BottomContainer alignContent="center">
        <NavBar />
      </PageLayout.BottomContainer>
    </Box>
  );
}
