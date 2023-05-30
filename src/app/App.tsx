import "./styles/index.scss";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "./providers/Router/ui/AppRouter";
import { NavBar } from "widgets/NavBar";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher/ui/ThemeSwitcher";

export const App = () => {
  const [theme] = useTheme()

  return (
    <div className= {`app ${theme}`}>
      <ThemeSwitcher/>
      sdaads
    <NavBar/>
      <AppRouter />
    </div>
  );
};
