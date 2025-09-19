import { createFileRoute } from "@tanstack/react-router";
import { MorePage } from "./_ui/MorePage";

export const Route = createFileRoute("/(private)/_private/more/")({
  component: MorePage,
});
