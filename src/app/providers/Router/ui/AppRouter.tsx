import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfiguration } from 'shared/config/routeConfig/routeConfig';
import { LoaderPage } from 'widgets/LoaderPage';

export const AppRouter = () => {
  return (
    <Suspense fallback={<LoaderPage />}>
    <Routes>
      {routeConfiguration.map(({ props: { path, element } }) => <Route key={path} {...{ path, element }}/>)}
    </Routes>
    </Suspense>
  );
};
