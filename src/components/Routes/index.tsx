import React, { FC, Suspense } from 'react';
import { createBrowserHistory } from 'history';
import { Route, Routes as ReactRoutes } from 'react-router-dom';
import Loader, { LoaderColors } from '../Loader';

const Home = React.lazy(() => import('../../pages/Home'));
const NotFound = React.lazy(() => import('../../pages/NotFound'));

// eslint-disable-next-line
export enum RouterLinks {
  home = '/',
}

export const history = createBrowserHistory({ window });

const Routes: FC = () => (
  <Suspense fallback={<Loader color={LoaderColors.primary} />}>
    <ReactRoutes>
      <Route element={<Home />} path={RouterLinks.home} />
      <Route element={<NotFound />} path="*" />
    </ReactRoutes>
  </Suspense>
);

export default Routes;
