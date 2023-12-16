import IAuthRepository from '@/logic/interfaces/repositoires/IAuthRepository.ts';
import { useMutation } from 'react-query';

const useRefreshToken = (authRepository: IAuthRepository) => {
  const {
    mutate: refreshToken,
    data,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useMutation({
    mutationFn: authRepository.refreshToken,
    mutationKey: 'refreshToken',
  });

  return {
    refreshToken,
    error,
    data,
    state: {
      isError,
      isLoading,
      isSuccess,
    },
  };
};

export default useRefreshToken;
