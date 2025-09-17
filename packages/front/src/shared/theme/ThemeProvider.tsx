import { useCallback, useEffect, useState, type ReactNode } from "react";
import { ThemeContext } from "./context";
import { getSystemTheme } from "./utils";
import type { Theme } from "./types";

export type ThemeProviderProps = {
  children: ReactNode;
};

const getInitialTheme = () => {
  const saved = localStorage.getItem("theme") as Theme;
  const systemTheme = getSystemTheme();

  return saved ? saved : systemTheme;
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
