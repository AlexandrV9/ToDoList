import { Box, type BoxProps } from "~/shared/ui";

export interface TopContainerProps extends BoxProps {}

export const TopContainer = ({ ...props }: TopContainerProps) => {
  return <Box height="70px" {...props} />;
};
