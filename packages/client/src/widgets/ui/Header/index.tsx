import { LangSwitcher, ThemeSwitcher } from "~/features";
import { AuthUserAvatar } from "~/features/auth";
import { Box, Flex } from "~/shared/ui";

export type HeaderProps = {};

export const Header = () => {
  return (
    <Box
      as="header"
      width="full"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <AuthUserAvatar />
      <Flex justifyContent="end" gap={2}>
        <LangSwitcher />
        <ThemeSwitcher />
      </Flex>
    </Box>
  );
};
