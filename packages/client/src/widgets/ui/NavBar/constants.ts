import {
  BookmarkIcon,
  CheckCircleIcon,
  HomeIcon,
  MoreIcon,
  UserIcon,
} from "~/shared/ui";
import type { NavItemProps } from "./types";

export const navItems: NavItemProps[] = [
  {
    id: "nav_item_setting",
    title: "Home",
    href: "/",
    icon: HomeIcon,
  },
  {
    id: "nav_item_tasks",
    title: "Tasks",
    href: "/tasks",
    icon: CheckCircleIcon,
  },
  {
    id: "nav_item_notes",
    title: "Notes",
    href: "/notes",
    icon: BookmarkIcon,
  },
  {
    id: "nav_item_account",
    title: "Profile",
    href: "/profile",
    icon: UserIcon,
  },
  {
    id: "nav_item_more",
    title: "More",
    href: "/more",
    icon: MoreIcon,
  },
];
