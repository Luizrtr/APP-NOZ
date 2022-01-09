import React, { createContext, useCallback, useContext, useState } from 'react';
import { toast } from 'react-toastify';

import api from '../services/api';

interface AuthState {
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
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState | null>(() => {
    const token = localStorage.getItem('@APPNOZ:token');
    const user = localStorage.getItem('@APPNOZ:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post(
      'http://books.appnoz.com.br/api/v1/auth/sign-in',
      {
        email,
        password,
      },
    );

    if (response.headers.authorization && response.data) {
      const { user } = response.data;
      const { token } = response.headers.authorization;

      localStorage.setItem('@APPNOZ:token', response.headers.authorization);
      localStorage.setItem('@APPNOZ:user', JSON.stringify(response.data));
      console.log(response);
      setData({ token, user });
    } else {
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
    }
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@APPNOZ:token');
    localStorage.removeItem('@APPNOZ:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data?.user, signIn, signOut }}>
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
