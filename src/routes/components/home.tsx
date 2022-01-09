import React, { lazy } from 'react';

const Home = lazy(() => import('../../pages/Home'));
const Login = lazy(() => import('../../pages/Login'));

interface IRoutes {
  path: string[];
  component: React.FC;
  isPrivate?: boolean;
  exact?: boolean;
  isRestricted?: boolean;
}

const home: IRoutes[] = [
  {
    path: ['/home'],
    component: Home,
    isPrivate: true,
    exact: true,
  },
  {
    path: ['/'],
    component: Login,
    exact: true,
  },
];

export default home;
