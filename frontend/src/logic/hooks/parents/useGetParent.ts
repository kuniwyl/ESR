import repositoryContext from '@/logic/repositories/repositoryContext.ts';
import { useQuery } from 'react-query';
import useErrorDispatcher from '@/logic/hooks/errors/ErrorDispatcher.ts';
import { AxiosError } from 'axios';

const useGetParent = (parentId: number) => {
  const parentRepository = repositoryContext.parent;
  const dispathError = useErrorDispatcher();
  const getParent = useQuery(
    ['parent'],
    () => parentRepository.getParent(parentId),
    {
      onError: error => {
        dispathError.dispatchError(error as AxiosError);
      },
    },
  );

  return getParent;
};

export type TGetParent = ReturnType<typeof useGetParent>;
export default useGetParent;
