import {
  Button as BaseButton,
  type ButtonProps as BaseButtonProps,
} from "@chakra-ui/react";

export interface ButtonProps extends BaseButtonProps {}

export const Button = (props: ButtonProps) => {
  return <BaseButton {...props} />;
};

export * from "./IconButton";
