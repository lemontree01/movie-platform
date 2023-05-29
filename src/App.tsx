import { Route, Routes } from "react-router-dom";
import { Counter } from "./components/Counter";
import "./styles/index.scss";
import { Link } from "react-router-dom";
import { Suspense } from "react";
import { AboutAsync } from "./pages/AboutAsync";
import { MainAsync } from "./pages/MainAsync";
import { useTheme } from "./theme/useTheme";

export const App = () => {
  const [theme, toggleTheme] = useTheme()

  return (
    <div className= {`app ${theme}`}>
      <button onClick={toggleTheme}>click</button>
      <Counter />
      sdaads
      <Link to="/about">About</Link>
      <Link to="/main">Home</Link>
      <Suspense fallback={<div>sdaas</div>}>
      <Routes>
        <Route path="/about" element={<AboutAsync/>}/>
        <Route path="/main" element={<MainAsync />}/>
      </Routes>
      </Suspense>
    </div>
  );
};
