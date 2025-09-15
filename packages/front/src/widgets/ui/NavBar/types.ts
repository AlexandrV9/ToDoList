import type { ReactNode } from "react";
import type { IconProps } from "~/shared/ui";

export type NavItemProps = {
  id: string;
  name: string;
  href: string;
  icon: (props: IconProps) => ReactNode;
};
