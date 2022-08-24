import React, { FC, Suspense } from 'react';
import { createBrowserHistory } from 'history';
import { Route, Routes as ReactRoutes } from 'react-router-dom';

import { StyledIcon } from 'containers/StyledIcon';
import Loader from 'icons/Loader';

const Home = React.lazy(() => import('pages/Home'));
const WeatherForecast = React.lazy(() => import('pages/WeatherForecast'));
const NotFound = React.lazy(() => import('pages/NotFound'));

// Error: 'RouterLinks' is already declared in the upper scope on line 13 column 13
// eslint-disable-next-line
export enum RouterLinks {
  home = '/',
  forecast = '/forecast',
}

export const history = createBrowserHistory({ window });

const Routes: FC = () => {
  const SLoader = StyledIcon(Loader);

  return (
    <Suspense fallback={<SLoader absolute spin />}>
      <ReactRoutes>
        <Route element={<Home />} path={RouterLinks.home} />
        <Route element={<WeatherForecast />} path={RouterLinks.forecast} />
        <Route element={<NotFound />} path="*" />
      </ReactRoutes>
    </Suspense>
  );
};

export default Routes;
