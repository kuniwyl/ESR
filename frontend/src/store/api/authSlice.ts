import { api } from '@/store/api/api.ts';
import {
  LoginData,
  RegisterData,
  TokenResponse,
  UserResponse,
} from '@/model/AuthInterfaces.ts';
import { REFRESH_TOKEN_NAMESPACE } from '@/store/slices/authSlice.ts';

export const authApi = api.injectEndpoints({
  endpoints: builder => ({
    register: builder.mutation<UserResponse, RegisterData>({
      query: registerData => ({
        url: '/user/register',
        method: 'POST',
        body: registerData,
      }),
    }),
    login: builder.mutation<TokenResponse, LoginData>({
      query: loginData => ({
        url: '/user/login',
        method: 'POST',
        body: loginData,
      }),
    }),
    refreshToken: builder.mutation<TokenResponse, void>({
      query: () => ({
        url: '/user/refresh-token',
        method: 'POST',
        body: {
          refreshToken: localStorage.getItem(REFRESH_TOKEN_NAMESPACE),
        },
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useRefreshTokenMutation,
} = authApi;
