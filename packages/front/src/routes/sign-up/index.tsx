import { createFileRoute } from "@tanstack/react-router";
import { SignUpPage } from "./_ui/SignUpPage";

export const Route = createFileRoute("/sign-up/")({
  component: SignUpPage,
});
