import repositoryContext from '@/logic/repositories/repositoryContext.ts';
import { useQuery } from 'react-query';
import useErrorDispatcher from '@/logic/hooks/errors/ErrorDispatcher.ts';
import { AxiosError } from 'axios';

const useGetClasses = () => {
  const classRepository = repositoryContext.classR;
  const dispathError = useErrorDispatcher();
  const getClass = useQuery(
    'classes',
    () => classRepository.getClassesFromSchool(),
    {
      onError: error => {
        dispathError.dispatchError(error as AxiosError);
      },
    },
  );

  return getClass;
};

export default useGetClasses;
