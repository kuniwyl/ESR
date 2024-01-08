import repositoryContext from '@/logic/repositories/repositoryContext.ts';
import { useQuery } from 'react-query';
import useErrorDispatcher from '@/logic/hooks/errors/ErrorDispatcher.ts';
import { AxiosError } from 'axios';

const useGetParents = (classId: number) => {
  const parentRepository = repositoryContext.parent;
  const dispathError = useErrorDispatcher();
  const getParents = useQuery(
    ['parents'],
    () => parentRepository.getParentsFromClass(classId),
    {
      onError: error => {
        dispathError.dispatchError(error as AxiosError);
      },
    },
  );

  return getParents;
};

export type TGetParents = ReturnType<typeof useGetParents>;
export default useGetParents;
