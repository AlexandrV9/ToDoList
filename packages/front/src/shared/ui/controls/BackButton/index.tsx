import { ArrowLeftIcon, IconButton, type IconButtonProps } from "../..";

export interface BackButtonProps extends IconButtonProps {}

export const BackButton = ({ ...props }: BackButtonProps) => {
  return (
    <IconButton variant="outline" width="40px" borderRadius={12} {...props}>
      <ArrowLeftIcon />
    </IconButton>
  );
};
