import { LangSwitcher, ThemeSwitcher } from "~/features";
import { Avatar, Box, Flex } from "~/shared/ui";

export const Header = () => {
  return (
    <Box
      as="header"
      width="full"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Avatar.Root />
      <Flex justifyContent="end" gap={2}>
        <LangSwitcher />
        <ThemeSwitcher />
      </Flex>
    </Box>
  );
};
