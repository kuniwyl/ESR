import { createSlice } from '@reduxjs/toolkit';
import { jwtDecode } from 'jwt-decode';
import {
  AuthSliceState,
  TokenDecoded,
  TokenDecodedDispatched,
} from '@/store/interfaces.ts';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

export const TOKEN_NAMESPACE = 'ESR-authenticationToken';
export const REFRESH_TOKEN_NAMESPACE = 'ESR-refreshToken';

const initialState: AuthSliceState = {
  token: null,
  isAuth: false,
  userId: null,
  userName: null,
  schoolId: null,
  role: null,
  exp: null,
};

const decodeToken = (token: string): TokenDecodedDispatched => {
  const decodedToken: TokenDecoded = jwtDecode(token);
  return {
    role: decodedToken[
      'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'
    ],
    name: decodedToken[
      'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'
    ],
    id: decodedToken[
      'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'
    ],
    exp: decodedToken.exp,
    schoolId: decodedToken.schoolId,
  };
};

const createInitialState = (): AuthSliceState => {
  const token = localStorage.getItem(TOKEN_NAMESPACE);
  if (token) {
    const decodedToken: TokenDecodedDispatched = decodeToken(token);
    if (decodedToken.exp * 1000 < Date.now()) {
      return initialState;
    }

    return {
      token: token,
      isAuth: true,
      exp: decodedToken.exp,
      userId: parseInt(decodedToken.id),
      schoolId: Number.parseInt(decodedToken.schoolId),
      userName: decodedToken.name,
      role: decodedToken.role,
    };
  }
  return initialState;
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: createInitialState(),
  reducers: {
    login: (state, action) => {
      state.token = action.payload.token;
      state.isAuth = true;
      const decodedToken = decodeToken(action.payload.token);
      state.exp = decodedToken.exp;
      state.userId = parseInt(decodedToken.id);
      state.schoolId = Number.parseInt(decodedToken.schoolId);
      state.userName = decodedToken.name;
      state.role = decodedToken.role;
      localStorage.setItem(TOKEN_NAMESPACE, action.payload.token);
      localStorage.setItem(
        REFRESH_TOKEN_NAMESPACE,
        action.payload.refreshToken,
      );
    },
    logout: state => {
      state.token = null;
      state.exp = null;
      state.isAuth = false;
      state.userId = null;
      state.schoolId = null;
      state.userName = null;
      state.role = null;
      localStorage.removeItem(TOKEN_NAMESPACE);
      localStorage.removeItem(REFRESH_TOKEN_NAMESPACE);
    },
  },
});

export const useAuth = () => {
  return useSelector<RootState>(state => state.auth) as AuthSliceState;
};
