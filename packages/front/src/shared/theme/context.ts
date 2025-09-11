import { createContext } from "react";
import type { Theme } from "./types";

export type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
  changeTheme: (theme: Theme) => void;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);
