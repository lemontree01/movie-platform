import './styles/index.scss'
import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from './providers/Router/ui/AppRouter'
import { NavBar } from 'widgets/NavBar'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { Suspense } from 'react'
import { LanguageSwitcher } from 'widgets/LanguageSwitcher'

export const App = () => {
  const [theme] = useTheme()

  return (
    <div className={`app ${theme}`}>
      <Suspense fallback={<div>loading...</div>}>
        <LanguageSwitcher/>
        <ThemeSwitcher />
        <NavBar />
        <AppRouter />
      </Suspense>
    </div>
  )
}
