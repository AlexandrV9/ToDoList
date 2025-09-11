import { useCallback, useEffect, useState, type ReactNode } from "react";
import type { Theme } from "./types";
import { ThemeContext } from "./context";

export type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem("theme") as Theme;
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    return saved || (systemPrefersDark ? "dark" : "light");
  });

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const changeTheme = useCallback((theme: Theme) => {
    if (theme !== "system") {
      setTheme(theme);
      return;
    }

    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    setTheme(systemPrefersDark ? "dark" : "light");
  }, []);

  useEffect(() => {
    // Сохраняем в localStorage
    localStorage.setItem("theme", theme);

    // Устанавливаем data-theme атрибут
    document.documentElement.setAttribute("data-theme", theme);

    // Также устанавливаем class для совместимости
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
