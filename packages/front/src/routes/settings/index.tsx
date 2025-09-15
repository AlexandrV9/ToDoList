import { createFileRoute } from "@tanstack/react-router";
import { SettingsPage } from "./_ui/SettingsPage";

export const Route = createFileRoute("/settings/")({
  component: SettingsPage,
});
