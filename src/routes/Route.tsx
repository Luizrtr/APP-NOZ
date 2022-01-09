import React, { useEffect, useState } from 'react';
import {
  RouteProps as ReactDOMRouteProps,
  Route as ReactDOMRoute,
  Redirect,
  useLocation,
  useHistory,
} from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import jwtDecode from 'jwt-decode';
import { toast } from 'react-toastify';

import { useAuth } from '../hooks/auth';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  isRestricted?: boolean;
  component: React.ComponentType;
}

interface IToken {
  exp: number;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  isRestricted = true,
  component: Component,
  ...rest
}) => {
  const locationHref = useLocation().pathname;
  const history = useHistory();
  const [isAuth, setIsAuth] = useState<boolean>(true);
  const { user, signOut } = useAuth();

  useEffect(() => {
    const token = localStorage.getItem('@APPNOZ:token');

    if (token === null && isPrivate !== !!user) {
      history.push('/login');
    }

    if (token) {
      const decoded = jwtDecode<IToken>(token);

      if (decoded && decoded.exp * 1000 < Date.now()) {
        toast.info(
          <div>
            Seu acesso expirou.
            <br />
            Você está sendo deslogado.
          </div>,
          {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          },
        );

        setTimeout(() => {
          signOut();

          history.push('/login');
        }, 1000);
      }
    }

    setIsAuth(true);
  }, [signOut, locationHref]);

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user
          ? [
              isAuth || location.pathname.includes('/login', undefined) ? (
                <Component key={uuid()} />
              ) : (
                <div>Page not found</div>
              ),
            ]
          : [
              isRestricted ? (
                <Redirect
                  to={{
                    pathname: isPrivate ? '/login' : '/home',
                    state: { from: location },
                  }}
                />
              ) : (
                <Component key={uuid()} />
              ),
            ];
      }}
    />
  );
};

export default Route;
