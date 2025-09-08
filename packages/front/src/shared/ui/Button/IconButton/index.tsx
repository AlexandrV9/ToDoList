import {
  IconButton as BaseIconButton,
  type IconButtonProps as BaseIconButtonProps,
} from "@chakra-ui/react";

export interface IconButtonProps extends BaseIconButtonProps {}

export const IconButton = (props: IconButtonProps) => {
  return <BaseIconButton {...props} />;
};
