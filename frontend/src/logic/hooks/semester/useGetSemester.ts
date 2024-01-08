import repositoryContext from '@/logic/repositories/repositoryContext.ts';
import { useQuery } from 'react-query';
import useErrorDispatcher from '@/logic/hooks/errors/ErrorDispatcher.ts';
import { AxiosError } from 'axios';

const useGetSemester = (semesterId: number) => {
  const semesterRepositoy = repositoryContext.semester;
  const dispathError = useErrorDispatcher();
  const getSemester = useQuery(
    'getSemester',
    () => semesterRepositoy.getSemester(semesterId),
    {
      enabled: semesterId !== 0,
      onError: error => {
        dispathError.dispatchError(error as AxiosError);
      },
    },
  );

  return getSemester;
};

export default useGetSemester;
