import repositoryContext from '@/logic/repositories/repositoryContext.ts';
import { useQuery } from 'react-query';
import useErrorDispatcher from '@/logic/hooks/errors/ErrorDispatcher.ts';
import { AxiosError } from 'axios';

const useGetCurrentSemester = () => {
  const semesterRepository = repositoryContext.semester;
  const dispathError = useErrorDispatcher();
  const current = useQuery(
    ['semester'],
    () => semesterRepository.getSemesterCurrent(),
    {
      enabled: false,
      onError: error => {
        dispathError.dispatchError(error as AxiosError);
      },
    },
  );

  return current;
};

export default useGetCurrentSemester;
