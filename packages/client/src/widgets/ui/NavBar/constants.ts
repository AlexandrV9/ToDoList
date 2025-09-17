import {
  BookmarkIcon,
  CheckCircleIcon,
  HomeIcon,
  SettingsIcon,
} from "~/shared/ui";
import type { NavItemProps } from "./types";

export const navItems: NavItemProps[] = [
  {
    id: "nav_item_setting",
    name: "Home",
    href: "/",
    icon: HomeIcon,
  },
  {
    id: "nav_item_tasks",
    name: "Tasks",
    href: "/tasks",
    icon: CheckCircleIcon,
  },
  {
    id: "nav_item_notes",
    name: "Tasks",
    href: "/notes",
    icon: BookmarkIcon,
  },
  {
    id: "nav_item_settings",
    name: "Settings",
    href: "/settings",
    icon: SettingsIcon,
  },
];
