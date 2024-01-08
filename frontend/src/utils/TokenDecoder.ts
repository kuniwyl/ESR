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
  'http://schemas.microsoft.com/ws/2008/06/identity/claims/role': string;
  Login: string;
  Id: string;
  exp: number;
  SchoolId: string;
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

const getTokenData = (token: string, refreshToken: string): IAuthState => {
  const decodedToken: TokenDecoded = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    return initialState;
  }

  return {
    token: token,
    refreshToken: refreshToken,
    isAuth: true,
    exp: decodedToken.exp,
    userId: parseInt(decodedToken.Id),
    schoolId: Number.parseInt(decodedToken.SchoolId),
    userName: decodedToken.Login,
    role: decodedToken[
      'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'
    ],
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
