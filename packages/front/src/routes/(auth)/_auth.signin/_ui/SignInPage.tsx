import { Box } from "~/shared/ui";
import { SignInByLoginForm } from "~/widgets";

export function SignInPage() {
  return (
    <Box
      padding="1.5rem"
      bg="bg"
      borderRadius="xl"
      width="full"
      minWidth={320}
      maxWidth={380}
      shadow="0 2px 8px rgba(0, 0, 0, 0.2)"
      border="1px solid"
      borderColor="border.emphasized"
    >
      <SignInByLoginForm />
    </Box>
  );
}
