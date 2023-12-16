import IAuthRepository from '@/logic/interfaces/repositoires/IAuthRepository.ts';
import { useMutation } from 'react-query';

const useRegister = (authRepository: IAuthRepository) => {
  const {
    mutate: register,
    data,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useMutation({
    mutationKey: 'register',
    mutationFn: authRepository.register,
  });

  return {
    register,
    error,
    data,

    state: {
      isError,
      isLoading,
      isSuccess,
    },
  };
};

export default useRegister;
