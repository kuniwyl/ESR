import repositoryContext from '@/logic/repositories/repositoryContext.ts';
import { useMutation } from 'react-query';
import useErrorDispatcher from '@/logic/hooks/errors/ErrorDispatcher.ts';
import { AxiosError } from 'axios';

const useResetPassword = () => {
  const authRepository = repositoryContext.auth;

  const dispathError = useErrorDispatcher();
  const resetPassword = useMutation({
    mutationFn: authRepository.resetPassword,
    onError: error => {
      dispathError.dispatchError(error as AxiosError);
    },
  });

  return { resetPassword };
};

export default useResetPassword;
