import { type FC, type ReactNode, useMemo, useState } from 'react';
import { ThemeContext } from '../lib/ThemeContext';
import { LOCAL_STORAGE_THEME_KEY, type Theme } from '../../../types/themeTypes';

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const initialTheme: Theme =
    (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) ?? 'light';
  const [theme, setTheme] = useState(initialTheme);

  const themeValue = useMemo(() => ({
    theme, setTheme
  }), [theme]);

  return <ThemeContext.Provider value={themeValue}>{children}</ThemeContext.Provider>;
};
