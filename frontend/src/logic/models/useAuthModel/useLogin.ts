import authRepository from '@/logic/repositories/AuthRepository.ts';
import { useMutation } from 'react-query';

const useLogin = (authRepository: authRepository) => {
  const {
    mutate: login,
    data,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useMutation({
    mutationKey: 'login',
    mutationFn: authRepository.login,
  });

  return {
    login,
    error,
    data,

    state: {
      isError,
      isLoading,
      isSuccess,
    },
  };
};

export default useLogin;
