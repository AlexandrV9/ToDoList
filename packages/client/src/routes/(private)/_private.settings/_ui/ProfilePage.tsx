import { BackButton, Box, Input, Stack } from "~/shared/ui";
import { AuthUserInfo, useHeaderLeftContent } from "~/widgets";

export function ProfilePage() {
  useHeaderLeftContent(<BackButton />);

  return (
    <Stack.VStack alignItems="stretch" gap="2rem">
      <AuthUserInfo />
      <Stack.VStack>
        <Box
          as="form"
          width="full"
          display="flex"
          flexDirection="column"
          gap="1rem"
        >
          <Input placeholder="Имя" />
          <Input placeholder="Почта" />
          <Input placeholder="Дата рождения" />
        </Box>
      </Stack.VStack>
    </Stack.VStack>
  );
}
