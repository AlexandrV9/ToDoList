import { createFileRoute } from "@tanstack/react-router";
import { Box } from "~/shared/ui";

export const Route = createFileRoute("/")({
  component: IndexPage,
});

function IndexPage() {
  return (
    <Box>
      <h3>Welcome to App</h3>
    </Box>
  );
}
