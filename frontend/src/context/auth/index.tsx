import { getInitialState, getTokenData } from '@/utils/TokenDecoder.ts';
import {
  REFRESH_TOKEN_NAMESPACE,
  TOKEN_NAMESPACE,
} from '@/utils/HeaderGetter.ts';
import { createContext, JSX, useEffect, useState } from 'react';

const useAuthState = () => {
  const [authState, setAuthState] = useState(getInitialState());

  useEffect(() => {
    const token = localStorage.getItem(TOKEN_NAMESPACE);
    const refreshToken = localStorage.getItem(REFRESH_TOKEN_NAMESPACE);
    if (token && refreshToken) {
      setAuthData(token, refreshToken);
    }
  }, []);

  const setAuthData = (tokenNew: string, refreshTokenNew: string) => {
    const decodedToken = getTokenData(tokenNew, refreshTokenNew);
    console.log(decodedToken);
    if (decodedToken == null) {
      return;
    }

    if (decodedToken.exp && decodedToken.exp * 1000 < Date.now()) {
      setAuthState(getInitialState());
      localStorage.removeItem(TOKEN_NAMESPACE);
      localStorage.removeItem(REFRESH_TOKEN_NAMESPACE);
      return;
    }

    localStorage.setItem(TOKEN_NAMESPACE, tokenNew);
    localStorage.setItem(REFRESH_TOKEN_NAMESPACE, refreshTokenNew);
    setAuthState(decodedToken);
  };

  const logout = () => {
    localStorage.removeItem(TOKEN_NAMESPACE);
    localStorage.removeItem(REFRESH_TOKEN_NAMESPACE);
    setAuthState(getInitialState());
  };

  return {
    authState,
    setAuthData,
    logout,
  };
};

type AuthContextType = ReturnType<typeof useAuthState>;

export const authContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const auth = useAuthState();

  return (
    <authContext.Provider
      value={{
        authState: auth.authState,
        setAuthData: auth.setAuthData,
        logout: auth.logout,
      }}
    >
      {children}
    </authContext.Provider>
  );
};
