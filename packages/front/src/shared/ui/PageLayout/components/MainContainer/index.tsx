import { Box, type BoxProps } from "~/shared/ui";

export interface MainContainerProps extends BoxProps {}

export const MainContainer = ({ ...props }: MainContainerProps) => {
  return (
    <Box
      as="main"
      display="flex"
      justifyContent="center"
      alignItems="start"
      flexGrow={1}
      {...props}
    />
  );
};
