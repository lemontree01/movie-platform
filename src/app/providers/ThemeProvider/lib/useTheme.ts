import { useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme } from "../../../types/themeTypes";
import { ThemeContext } from "./ThemeContext";

export const useTheme = (): [Theme, () => void] => {
  const { theme, setTheme } = useContext(ThemeContext);
  
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  }
  return [theme, toggleTheme];
};
