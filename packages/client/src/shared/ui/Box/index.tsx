import {
  Box as BaseBox,
  type BoxProps as BaseBoxProps,
} from "@chakra-ui/react";

export interface BoxProps extends BaseBoxProps {}

export const Box = (props: BaseBoxProps) => {
  return <BaseBox {...props} />;
};
