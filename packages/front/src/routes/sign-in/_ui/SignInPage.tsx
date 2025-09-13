import { BackButton, Box, Flex, Stack } from "~/shared/ui";
import { LangSwitcher, ThemeSwitcher } from "~/features";
import { SignInByLoginForm } from "~/widgets";
import { useNavigate } from "~/shared/hooks";

export function SignInPage() {
  const navigate = useNavigate();

  const handleGoToWelcomePage = () => {
    navigate({
      to: "/welcome",
    });
  };

  return (
    <Flex direction="column" padding="1rem" gap="1rem" height="full">
      <Flex direction="column" gap="2rem" height="full">
        <Flex justify="space-between">
          <BackButton onClick={handleGoToWelcomePage} />
          <Flex justifyContent="end" gap={2}>
            <LangSwitcher />
            <ThemeSwitcher />
          </Flex>
        </Flex>

        <Stack.VStack flexGrow={1} align="center">
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
        </Stack.VStack>
      </Flex>
    </Flex>
  );
}
