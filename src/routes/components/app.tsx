import React, { lazy } from 'react';

const App = lazy(() => import('../../pages/Home'));

interface IRoutes {
  path: string[];
  component: React.FC;
  isPrivate?: boolean;
  exact?: boolean;
  isRestricted?: boolean;
}

const app: IRoutes[] = [
  {
    path: ['/home'],
    component: App,
    isPrivate: true,
    exact: true,
  },
];

export default app;
