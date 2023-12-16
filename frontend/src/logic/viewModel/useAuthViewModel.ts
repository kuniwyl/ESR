import { injectAuthModel } from '@/configuration/context/modelContext.ts';
import LoginDto from '@/domain/dtos/LoginDto.ts';
import { useEffect } from 'react';

const useAuthViewModel = () => {
  const authModel = injectAuthModel()();

  const login = (login: string, password: string) => {
    authModel.login.login({
      login,
      password,
    } as LoginDto);
  };

  const refreshToken = () => {
    authModel.refreshToken.refreshToken(authModel.refreshTokenValue ?? '');
  };

  useEffect(() => {
    if (authModel.login.data) {
      localStorage.setItem('ESR_TOKEN', authModel.login.data.token);
      localStorage.setItem(
        'ESR_REFRESH_TOKEN',
        authModel.login.data.refreshToken,
      );
      authModel.setToken(authModel.login.data.token);
      authModel.setRefreshTokenValue(authModel.login.data.refreshToken);
    }
  }, [authModel, authModel.login.data]);

  useEffect(() => {
    if (authModel.refreshToken.data) {
      localStorage.setItem('ESR_TOKEN', authModel.refreshToken.data.token);
      localStorage.setItem(
        'ESR_REFRESH_TOKEN',
        authModel.refreshToken.data.refreshToken,
      );
      authModel.setToken(authModel.refreshToken.data.token);
      authModel.setRefreshTokenValue(authModel.refreshToken.data.refreshToken);
    }
  }, [authModel, authModel.refreshToken.data]);

  return {
    token: authModel.token,
    refreshTokenValue: authModel.refreshToken,

    login,
    loginLoading: authModel.login.state,

    refreshToken,
    refreshTokenLoading: authModel.refreshToken.state,
  };
};

export default useAuthViewModel;
