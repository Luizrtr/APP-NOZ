import React, { lazy } from 'react';

const Login = lazy(() => import('../../pages/Login'));

interface IRoutes {
  path: string[];
  component: React.FC;
  isPrivate?: boolean;
  exact?: boolean;
  isRestricted?: boolean;
}

const login: IRoutes[] = [
  {
    path: ['/'],
    component: Login,
    exact: true,
  },
];

export default login;
