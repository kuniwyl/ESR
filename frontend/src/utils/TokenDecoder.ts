import { jwtDecode } from 'jwt-decode';

export interface IAuthState {
  token: string | null;
  refreshToken: string | null;
  isAuth: boolean;
  exp: number | null;
  userId: number | null;
  schoolId: number | null;
  userName: string | null;
  role: string | null;
}

interface TokenDecoded {
  id: string;
  login: string;
  role: string;
  exp: number;
  schoolId: string;
}

const initialState: IAuthState = {
  token: null,
  refreshToken: null,
  isAuth: false,
  exp: null,
  userId: null,
  schoolId: null,
  userName: null,
  role: null,
};

const decodeToken = (token: string): TokenDecoded => {
  const decodedToken: TokenDecoded = jwtDecode(token);
  return {
    id: decodedToken.id,
    login: decodedToken.login,
    role: decodedToken.role,
    exp: decodedToken.exp,
    schoolId: decodedToken.schoolId,
  };
};

const getTokenData = (token: string, refreshToken: string): IAuthState => {
  const decodedToken: TokenDecoded = decodeToken(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    return initialState;
  }

  return {
    token: token,
    refreshToken: refreshToken,
    isAuth: true,
    exp: decodedToken.exp,
    userId: parseInt(decodedToken.id),
    schoolId: Number.parseInt(decodedToken.schoolId),
    userName: decodedToken.login,
    role: decodedToken.role,
  };
};

const getInitialState = (): IAuthState => {
  const token = localStorage.getItem('ESR-authenticationToken');
  const refreshToken = localStorage.getItem('ESR-refreshToken');
  if (token && refreshToken) {
    return getTokenData(token, refreshToken);
  }
  return initialState;
};

export { getTokenData, getInitialState };
