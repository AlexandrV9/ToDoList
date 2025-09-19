import { type ReactNode } from "react";
import { List, Box, type IconProps } from "~/shared/ui";
import { navItems } from "./constants";
import { NavBarItem } from "./Item";
import { useLocation } from "@tanstack/react-router";

export type NavBarItemProps = {
  children: ReactNode;
  icon: (props: IconProps) => ReactNode;
};

export const NavBar = () => {
  const location = useLocation();

  return (
    <Box as="nav">
      <List.Root
        display="grid"
        gridTemplateColumns="repeat(5, minmax(40px, 200px))"
        listStyleType="none"
        justifyContent="center"
      >
        {navItems.map((item) => (
          <NavBarItem
            key={item.href}
            {...item}
            isActive={checkIsActive(item.href, location.pathname)}
          />
        ))}
      </List.Root>
    </Box>
  );
};

function checkIsActive(href: string, path: string) {
  return href === "/" ? path === "/" : path.startsWith(href);
}
