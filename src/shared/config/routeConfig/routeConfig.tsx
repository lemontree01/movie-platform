import { RouteProps } from "react-router-dom";
import { MainPage } from "pages/MainPage";
import { AboutPage } from "pages/AboutPage";

export enum Routes {
  MAIN = "main",
  ABOUT = "about",
}

export const routePaths: Readonly<Record<Routes, string>> = {
  [Routes.MAIN]: "/",
  [Routes.ABOUT]: "/about",
} as const;

export type RouteConfiguration = { route: Routes; props: RouteProps };

export const routeConfiguration: RouteConfiguration[] = [
  {
    route: Routes.MAIN,
    props: {
      path: routePaths.main,
      element: <MainPage />,
    },
  },
  {
    route: Routes.ABOUT,
    props: {
      path: routePaths.about,
      element: <AboutPage />,
    },
  },
];
