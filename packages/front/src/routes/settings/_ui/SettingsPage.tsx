import { PageLayout } from "~/shared/layouts";
import { Box } from "~/shared/ui";
import { NavBar } from "~/widgets";

export function SettingsPage() {
  return (
    <Box display="flex" flexDirection="column" height="full">
      <PageLayout.TopContainer
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        Header
      </PageLayout.TopContainer>
      <Box width="full" h="1px" background="bg.muted" />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexGrow={1}
      >
        SettingsPage
      </Box>
      <Box width="full" h="1px" background="bg.muted" />
      <PageLayout.BottomContainer alignContent="center">
        <NavBar />
      </PageLayout.BottomContainer>
    </Box>
  );
}
