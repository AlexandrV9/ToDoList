import type { ReactNode } from "react";
import { Box, Button, Link, List, type IconProps } from "~/shared/ui";

export type NavBarItemProps = {
  id: string;
  name: string;
  href: string;
  icon: (props: IconProps) => ReactNode;
};

export const NavBarItem = ({ href, icon: Icon }: NavBarItemProps) => {
  return (
    <List.Item
      alignContent="center"
      justifyContent="center"
      alignItems="center"
      padding={3}
    >
      <Box display="flex" justifyContent="center" alignItems="center">
        <Button variant="ghost" padding={0}>
          <Link to={href}>
            <Icon size={30} />
          </Link>
        </Button>
      </Box>
    </List.Item>
  );
};
