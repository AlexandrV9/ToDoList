import clsx from "clsx";
import type { ReactNode } from "react";

import styles from "./PageLayout.module.css";
import { Box } from "~/shared/ui";
import { BottomContainer, TopContainer } from "./components";

export type PageLayoutProps = {
  className?: string;
  children: ReactNode;
};

export const PageLayout = ({ children, className }: PageLayoutProps) => {
  return (
    <Box className={clsx(styles.container, className)} bg="bg">
      {children}
    </Box>
  );
};

PageLayout.BottomContainer = BottomContainer;
PageLayout.TopContainer = TopContainer;
