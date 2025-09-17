import { createFileRoute } from "@tanstack/react-router";
import { SignUpPage } from "./_ui/SignUpPage";

export const Route = createFileRoute("/(auth)/_auth/signup/")({
  component: SignUpPage,
});
