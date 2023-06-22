import { type RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';

export enum Routes {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'notFound'
}

export const routePaths: Readonly<Record<Routes, string>> = {
  [Routes.MAIN]: '/',
  [Routes.ABOUT]: '/about',
  [Routes.NOT_FOUND]: '*'
} as const;

export interface RouteConfiguration { route: Routes; props: RouteProps }

export const routeConfiguration: RouteConfiguration[] = [
  {
    route: Routes.MAIN,
    props: {
      path: routePaths.main,
      element: <MainPage />
    }
  },
  {
    route: Routes.ABOUT,
    props: {
      path: routePaths.about,
      element: <AboutPage />
    }
  },
  {
    route: Routes.NOT_FOUND,
    props: {
      path: routePaths.notFound,
      element: <NotFoundPage />
    }
  }
];
