import injectRepository from '@/configuration/context/repositoryContext.ts';
import useRegister from '@/logic/models/useAuthModel/useRegister.ts';
import IAuthRepository from '@/logic/interfaces/repositoires/IAuthRepository.ts';
import useLogin from '@/logic/models/useAuthModel/useLogin.ts';
import useRefreshToken from '@/logic/models/useAuthModel/useRefreshToken.ts';
import { useState } from 'react';

const TOKEN_KEY = 'ESR_TOKEN';
const REFRESH_TOKEN_KEY = 'ESR_REFRESH_TOKEN';

const useAuthModel = () => {
  const authRepository = injectRepository({ type: 'auth' }) as IAuthRepository;

  const register = useRegister(authRepository);
  const login = useLogin(authRepository);
  const refreshToken = useRefreshToken(authRepository);

  const [token, setToken] = useState<string | null>(
    localStorage.getItem(TOKEN_KEY),
  );
  const [refreshTokenValue, setRefreshTokenValue] = useState<string | null>(
    localStorage.getItem(REFRESH_TOKEN_KEY),
  );

  return {
    token,
    setToken,

    refreshTokenValue,
    setRefreshTokenValue,

    register,
    login,
    refreshToken,
  };
};

export default useAuthModel;
