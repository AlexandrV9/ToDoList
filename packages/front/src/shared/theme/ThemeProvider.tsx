import { useCallback, useEffect, useState, type ReactNode } from "react";
import type { Theme } from "./types";
import { ThemeContext } from "./context";
import { getSystemTheme } from "./utils";

export type ThemeProviderProps = {
  children: ReactNode;
};

const getInitialTheme = () => {
  const saved = localStorage.getItem("theme") as Theme;
  const systemTheme = getSystemTheme();

  if (!saved) return systemTheme;

  return saved === "system" ? systemTheme : saved;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme());

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const changeTheme = useCallback((theme: Theme) => {
    setTheme(theme);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);

    const _theme = theme === "system" ? getSystemTheme() : theme;

    document.documentElement.setAttribute("data-theme", _theme);
    document.documentElement.classList = _theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
