import { useContext } from 'react'
import { LOCAL_STORAGE_THEME_KEY, type Theme } from '../../../types/themeTypes'
import { ThemeContext } from './ThemeContext'

export const useTheme = (): [Theme, () => void] => {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = (): void => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  }
  return [theme, toggleTheme]
}
