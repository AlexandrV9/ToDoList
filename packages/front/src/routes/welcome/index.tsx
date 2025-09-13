import { createFileRoute } from "@tanstack/react-router";
import { WelcomePage } from "./_ui/WelcomePage";

export const Route = createFileRoute("/welcome/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <WelcomePage />;
}
