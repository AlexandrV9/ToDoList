import { Box, type BoxProps } from "~/shared/ui";

export interface TopContainerProps extends BoxProps {}

export const TopContainer = ({ ...props }: TopContainerProps) => {
  return <Box flexShrink={0} height="70px" px="1rem" {...props} />;
};
