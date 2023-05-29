import { Route, Routes } from "react-router-dom";
import "./styles/index.scss";
import { Link } from "react-router-dom";
import { Suspense } from "react";
import { About } from "pages/AboutPage";
import { Main } from "pages/MainPage";
import { useTheme } from "app/providers/ThemeProvider";

export const App = () => {
  const [theme, toggleTheme] = useTheme()

  return (
    <div className= {`app ${theme}`}>
      <button onClick={toggleTheme}>click</button>
      sdaads
      <Link to="/about">About</Link>
      <Link to="/main">Home</Link>
      <Suspense fallback={<div>sdaas</div>}>
      <Routes>
        <Route path="/about" element={<About/>}/>
        <Route path="/main" element={<Main />}/>
      </Routes>
      </Suspense>
    </div>
  );
};
