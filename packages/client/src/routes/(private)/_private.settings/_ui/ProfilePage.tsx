import { BackButton, Stack } from "~/shared/ui";
import { AuthUserInfo, useHeaderLeftContent } from "~/widgets";

export function ProfilePage() {
  useHeaderLeftContent(<BackButton />);

  return (
    <Stack.VStack alignItems="stretch">
      <AuthUserInfo />
      ProfilePage
    </Stack.VStack>
  );
}
