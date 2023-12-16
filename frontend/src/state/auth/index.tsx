import { signal } from '@preact/signals-react';
import { getTokenData } from '@/utils/TokenDecoder.ts';
import {
  REFRESH_TOKEN_NAMESPACE,
  TOKEN_NAMESPACE,
} from '@/utils/HeaderGetter.ts';
import { Signal } from '@preact/signals';
import { createContext, JSX, useContext } from 'react';

const tokenInit = localStorage.getItem(TOKEN_NAMESPACE);
const refreshTokenInit = localStorage.getItem(REFRESH_TOKEN_NAMESPACE);

const token: Signal<string | null> = signal(null);
const refreshToken: Signal<string | null> = signal(null);
const isAuth = signal(false);
const exp: Signal<number | null> = signal(null);
const userId: Signal<number | null> = signal(null);
const schoolId: Signal<number | null> = signal(null);
const userName: Signal<string | null> = signal(null);
const role: Signal<string | null> = signal(null);

const setAuthData = (tokenNew: string, refreshTokenNew: string) => {
  const decodedToken = getTokenData(tokenNew, refreshTokenNew);
  if (decodedToken == null) {
    return;
  }

  if (decodedToken.exp && decodedToken.exp * 1000 < Date.now()) {
    setNullValues();
    return;
  }

  token.value = tokenNew;
  refreshToken.value = refreshTokenNew;
  isAuth.value = true;
  exp.value = decodedToken.exp;
  userId.value = decodedToken.userId;
  schoolId.value = decodedToken.schoolId;
  userName.value = decodedToken.userName;
  role.value = decodedToken.role;
  localStorage.setItem(TOKEN_NAMESPACE, tokenNew);
  localStorage.setItem(REFRESH_TOKEN_NAMESPACE, refreshTokenNew);
};

const logout = () => {
  setNullValues();
  localStorage.removeItem(TOKEN_NAMESPACE);
  localStorage.removeItem(REFRESH_TOKEN_NAMESPACE);
};

if (tokenInit && refreshTokenInit) {
  setAuthData(tokenInit, refreshTokenInit);
}

const authContext = createContext({
  token,
  refreshToken,
  isAuth,
  exp,
  userId,
  schoolId,
  userName,
  role,
  setAuthData,
  logout,
});

export const AuthProvider = ({ children }: { children: JSX.Element }) => (
  <authContext.Provider
    value={{
      token,
      refreshToken,
      isAuth,
      exp,
      userId,
      schoolId,
      userName,
      role,
      setAuthData,
      logout,
    }}
  >
    {children}
  </authContext.Provider>
);

export const useAuthContext = () => useContext(authContext);

const setNullValues = () => {
  token.value = '';
  refreshToken.value = '';
  isAuth.value = false;
  exp.value = null;
  userId.value = null;
  schoolId.value = null;
  userName.value = null;
  role.value = null;
};
