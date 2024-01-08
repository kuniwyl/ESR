import repositoryContext from '@/logic/repositories/repositoryContext.ts';
import { useQuery } from 'react-query';
import useErrorDispatcher from '@/logic/hooks/errors/ErrorDispatcher.ts';
import { AxiosError } from 'axios';

const useGetUser = (id: number) => {
  const dispathError = useErrorDispatcher();
  const authRepository = repositoryContext.auth;
  const getUser = useQuery('getUser', () => authRepository.getUser(id), {
    onError: err => {
      dispathError.dispatchError(err as AxiosError);
    },
  });

  return getUser;
};

export default useGetUser;
