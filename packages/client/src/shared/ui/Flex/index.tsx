import {
  Flex as BaseFlex,
  type FlexProps as BaseFlexProps,
} from "@chakra-ui/react";

export interface FlexProps extends BaseFlexProps {}

export const Flex = (props: FlexProps) => {
  return <BaseFlex {...props} />;
};
