import {
  Text as BaseText,
  type TextProps as BaseTextProps,
} from "@chakra-ui/react";

export interface TextProps extends BaseTextProps {}

export const Text = (props: TextProps) => {
  return <BaseText {...props} />;
};
