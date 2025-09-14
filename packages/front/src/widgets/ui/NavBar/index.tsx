import type { ReactNode } from "react";
import {
  BookmarkIcon,
  List,
  CheckCircleIcon,
  SettingsIcon,
  Box,
  HomeIcon,
} from "~/shared/ui";

export type NavBarItemProps = {
  children: ReactNode;
};

export const NavBarItem = ({ children }: NavBarItemProps) => {
  return (
    <List.Item justifyItems="center" padding={3}>
      {children}
    </List.Item>
  );
};

export const NavBar = () => {
  return (
    <Box as="nav">
      <List.Root
        display="grid"
        gridTemplateColumns="repeat(4, minmax(40px, 200px))"
        listStyleType="none"
      >
        <NavBarItem>
          <HomeIcon size={30} />
        </NavBarItem>
        <NavBarItem>
          <CheckCircleIcon size={30} />
        </NavBarItem>
        <NavBarItem>
          <BookmarkIcon size={30} />
        </NavBarItem>
        <NavBarItem>
          <SettingsIcon size={30} />
        </NavBarItem>
      </List.Root>
    </Box>
  );
};
