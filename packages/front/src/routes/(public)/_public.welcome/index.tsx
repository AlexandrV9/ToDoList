import { createFileRoute } from "@tanstack/react-router";
import { WelcomePage } from "./_ui/WelcomePage";

export const Route = createFileRoute("/(public)/_public/welcome/")({
  component: WelcomePage,
});
