import repositoryContext from '@/logic/repositories/repositoryContext.ts';
import { useQuery } from 'react-query';
import useErrorDispatcher from '@/logic/hooks/errors/ErrorDispatcher.ts';
import { AxiosError } from 'axios';

const useGetClass = (id: number) => {
  const classReposiory = repositoryContext.classR;
  const dispathError = useErrorDispatcher();
  const getClass = useQuery(
    ['class', id],
    () => classReposiory.getClassById(id),
    {
      enabled: id !== 0,
      onError: error => {
        dispathError.dispatchError(error as AxiosError);
      },
    },
  );

  return getClass;
};

export default useGetClass;
