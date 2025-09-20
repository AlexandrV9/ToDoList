import { Box } from "~/shared/ui";
import { useHeaderStore } from "./useHeaderStore";

export type HeaderProps = {};

export const Header = () => {
  const { leftContent, centerContent, rightContent } = useHeaderStore();

  return (
    <Box
      as="header"
      width="full"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      {leftContent}
      {centerContent}
      {rightContent}
    </Box>
  );
};
