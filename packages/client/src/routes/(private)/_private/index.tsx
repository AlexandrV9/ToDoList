import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "./_ui/HomePage";

export const Route = createFileRoute("/(private)/_private/")({
  component: HomePage,
});
