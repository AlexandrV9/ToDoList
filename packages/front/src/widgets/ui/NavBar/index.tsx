import type { ReactNode } from "react";
import { List, Box, type IconProps } from "~/shared/ui";
import { navItems } from "./constants";
import { NavBarItem } from "./Item";

export type NavBarItemProps = {
  children: ReactNode;
  icon: (props: IconProps) => ReactNode;
};

export const NavBar = () => {
  return (
    <Box as="nav">
      <List.Root
        display="grid"
        gridTemplateColumns="repeat(4, minmax(40px, 200px))"
        listStyleType="none"
        justifyContent="center"
      >
        {navItems.map((item) => (
          <NavBarItem {...item} />
        ))}
      </List.Root>
    </Box>
  );
};
