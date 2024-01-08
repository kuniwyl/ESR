import repositoryContext from '@/logic/repositories/repositoryContext.ts';
import { useMutation } from 'react-query';
import useErrorDispatcher from '@/logic/hooks/errors/ErrorDispatcher.ts';
import { AxiosError } from 'axios';

const useRefreshToken = () => {
  const dispathError = useErrorDispatcher();
  const authRepository = repositoryContext.auth;
  const useRefreshToken = useMutation({
    mutationFn: authRepository.refreshToken,
    onError: error => {
      dispathError.dispatchError(error as AxiosError);
    },
  });

  return useRefreshToken;
};

export default useRefreshToken;
