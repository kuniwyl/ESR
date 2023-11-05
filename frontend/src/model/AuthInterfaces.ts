export interface LoginData {
  login: string;
  password: string;
}

export interface RegisterData {
  login: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface UserResponse {
  id: string;
  login: string;
  firstName: string;
  lastName: string;
  role: number;
  schoolId: number;
}

export interface TokenResponse {
  token: string;
  refreshToken: string;
}
