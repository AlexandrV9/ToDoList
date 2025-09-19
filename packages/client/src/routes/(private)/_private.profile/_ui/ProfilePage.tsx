import { Stack } from "~/shared/ui";
import { AccountSettings, AuthUserInfo } from "~/widgets";

export function ProfilePage() {
  return (
    <Stack.VStack
      h="full"
      display="flex"
      alignItems="stretch"
      flexGrow={1}
      p="1rem"
      overflow="auto"
    >
      <AuthUserInfo />
      <AccountSettings />
    </Stack.VStack>
  );
}
