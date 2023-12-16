import { jwtDecode } from 'jwt-decode';

interface IAuthState {
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
  'http://schemas.microsoft.com/ws/2008/06/identity/claims/role': string;
  'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name': string;
  'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier': string;
  exp: number;
  schoolId: string;
}

interface TokenDecodedDispatched {
  role: string;
  name: string;
  id: string;
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

const getTokenData = (token: string, refreshToken: string): IAuthState => {
  const decodedToken: TokenDecodedDispatched = decodeToken(token);
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
    userName: decodedToken.name,
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
