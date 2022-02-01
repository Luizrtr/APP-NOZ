import axios from 'axios';
import React, { createContext, useCallback, useContext, useState } from 'react';
import { toast } from 'react-toastify';

import api from '../services/api';

interface AuthState {
  refreshToken?: string;
  token: string;
  user: IUserData | undefined;
}

export interface SignInCredentials {
  email: string;
  password: string;
}

export interface IUserData {
  id: string;
  name: string;
  email: string;
  birthdate: string;
  gender: string;
}

interface AuthContextData {
  user: IUserData | undefined;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  error: boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [error, setError] = useState(false);
  const [data, setData] = useState<AuthState | null>(() => {
    const token = localStorage.getItem('@APPNOZ:token');
    const refreshToken = localStorage.getItem('@APPNOZ:refreshToken');
    const user = localStorage.getItem('@APPNOZ:user');

    if (token && user && refreshToken) {
      return { token, user: JSON.parse(user), refreshToken };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    await api
      .post('/auth/sign-in', {
        email,
        password,
      })
      .then(response => {
        const { user } = response.data;
        const token = response.headers.authorization;
        const refreshToken = response.headers['refresh-token'];
        localStorage.setItem('@APPNOZ:user', JSON.stringify(response.data));

        axios({
          method: 'post',
          headers: {
            authorization: 'Bearer ' + token,
          },
          data: { refreshToken },
          baseURL: 'http://books.appnoz.com.br/api/v1',
          url: '/auth/refresh-token',
        }).then(responseToken => {
          localStorage.setItem(
            '@APPNOZ:refreshToken',
            responseToken.headers['refresh-token'],
          );
          localStorage.setItem(
            '@APPNOZ:token',
            responseToken.headers.authorization,
          );
          setData({
            token: responseToken.headers.authorization,
            user,
            refreshToken,
          });
          document.location.reload();
        });
      })
      .catch(() => {
        setError(true);
        toast.error(
          <div>
            Acesso negado.
            <br /> Verifique seus dados e tente novamente.
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
      });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@APPNOZ:token');
    localStorage.removeItem('@APPNOZ:user');
    localStorage.removeItem('@APPNOZ:refreshToken');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data?.user, signIn, signOut, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
