export interface AuthSliceState {
  token: string | null;
  isAuth: boolean;
  exp: number | null;
  userId: number | null;
  schoolId: number | null;
  userName: string | null;
  role: string | null;
}

export interface TokenDecoded {
  exp: number;
  'http://schemas.microsoft.com/ws/2008/06/identity/claims/role': string;
  'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier': string;
  'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name': string;
  schoolId: string;
}

export interface TokenDecodedDispatched {
  exp: number;
  role: string;
  schoolId: string;
  id: string;
  name: string;
}
