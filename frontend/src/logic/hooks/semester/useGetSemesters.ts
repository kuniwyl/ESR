import repositoryContext from '@/logic/repositories/repositoryContext.ts';
import { useQuery } from 'react-query';
import useErrorDispatcher from '@/logic/hooks/errors/ErrorDispatcher.ts';
import { AxiosError } from 'axios';

const useGetSemesters = () => {
  const semestersRepository = repositoryContext.semester;
  const dispathError = useErrorDispatcher();
  const getSemesters = useQuery(
    'semesters',
    () => semestersRepository.getSemesters(),
    {
      onError: error => {
        dispathError.dispatchError(error as AxiosError);
      },
    },
  );

  return getSemesters;
};

export default useGetSemesters;
