import repositoryContext from '@/logic/repositories/repositoryContext.ts';
import { useMutation } from 'react-query';
import useErrorDispatcher from '@/logic/hooks/errors/ErrorDispatcher.ts';
import { AxiosError } from 'axios';

const useLogin = () => {
  const dispathError = useErrorDispatcher();
  const authRepository = repositoryContext.auth;
  const useLogin = useMutation({
    mutationFn: authRepository.login,
    onError: error => {
      dispathError.dispatchError(error as AxiosError);
    },
  });

  return { useLogin };
};

export default useLogin;
