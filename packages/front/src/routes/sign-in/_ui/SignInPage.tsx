import { Box, Flex, Stack } from "~/shared";
import { LangSwitcher, ThemeSwitcher } from "~/features";
import { SignInByLoginForm } from "~/widgets";

export function SignInPage() {
  return (
    <Flex direction="column" padding="1rem" gap="1rem" height="full">
      <Flex direction="column" gap="0.5rem" height="full">
        <Flex justifyContent="end">
          <ThemeSwitcher />
        </Flex>
        <Stack.VStack flexGrow={1} align="center" justify="center">
          <Box
            padding="2rem"
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
          <Flex justify="center">
            <LangSwitcher />
          </Flex>
        </Stack.VStack>
      </Flex>
    </Flex>
  );
}
