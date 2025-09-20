import { useCallback } from "react";
import { ArrowLeftIcon, IconButton, type IconButtonProps } from "../..";
import { useNavigate, useRouter } from "@tanstack/react-router";

export interface BackButtonProps extends Omit<IconButtonProps, "onClick"> {}

export const BackButton = ({ ...props }: BackButtonProps) => {
  const router = useRouter();
  const navigate = useNavigate();

  const handleGoBackPage = useCallback(() => {
    if (router.history.length > 1) {
      router.history.back();
      return;
    }

    navigate({
      to: "/",
      replace: true,
    });
  }, [navigate, router.history]);

  return (
    <IconButton
      variant="outline"
      width="40px"
      borderRadius={12}
      onClick={handleGoBackPage}
      {...props}
    >
      <ArrowLeftIcon />
    </IconButton>
  );
};
