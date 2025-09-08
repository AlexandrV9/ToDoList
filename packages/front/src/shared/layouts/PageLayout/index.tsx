import clsx from "clsx";
import type { ReactNode } from "react";

import styles from "./PageLayout.module.css";

export type PageLayoutProps = {
  className?: string;
  children: ReactNode;
};

export const PageLayout = ({ children, className }: PageLayoutProps) => {
  return <div className={clsx(styles.container, className)}>{children}</div>;
};
