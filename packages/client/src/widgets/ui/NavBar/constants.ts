import {
  BookmarkIcon,
  CheckCircleIcon,
  HomeIcon,
  MoreIcon,
  SettingsIcon,
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
    id: "nav_item_settings",
    title: "Settings",
    href: "/settings",
    icon: SettingsIcon,
  },
  {
    id: "nav_item_more",
    title: "More",
    href: "/more",
    icon: MoreIcon,
  },
];
