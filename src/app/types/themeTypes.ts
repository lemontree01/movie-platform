export type Theme = 'dark' | 'light'

export interface ThemeContextProps {
  theme?: Theme
  setTheme?: (theme: Theme) => void
}

export const LOCAL_STORAGE_THEME_KEY = 'LOCAL_STORAGE_THEME_KEY';
