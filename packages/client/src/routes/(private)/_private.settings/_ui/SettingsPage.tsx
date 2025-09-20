import { Stack } from "~/shared/ui";
import { AccountSettings, AuthUserInfo } from "~/widgets";

export function SettingsPage() {
  return (
    <Stack.VStack alignItems="stretch">
      <AuthUserInfo />
      <AccountSettings />
    </Stack.VStack>
  );
}
