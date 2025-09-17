import clsx from "clsx";

import styles from "./PageLayout.module.css";
import { Box, type BoxProps } from "~/shared/ui";
import { BottomContainer, MainContainer, TopContainer } from "./components";

export interface PageLayoutProps extends BoxProps {
  className?: string;
}

export const PageLayout = ({ className, ...props }: PageLayoutProps) => {
  return (
    <Box className={clsx(styles.container, className)} bg="bg" {...props} />
  );
};

PageLayout.BottomContainer = BottomContainer;
PageLayout.TopContainer = TopContainer;
PageLayout.MainContainer = MainContainer;
