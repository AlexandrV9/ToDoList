import {
  RadioGroupItem as BaseRadioItem,
  type RadioGroupItemProps as BaseRadioItemProps,
} from "@chakra-ui/react";

export interface RadioItemProps extends BaseRadioItemProps {}

export const Item = (props: RadioItemProps) => (
  <BaseRadioItem {...props} />
);
