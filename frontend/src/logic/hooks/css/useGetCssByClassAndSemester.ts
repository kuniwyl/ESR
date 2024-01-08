import repositoryContext from '@/logic/repositories/repositoryContext.ts';
import { useQuery } from 'react-query';
import useErrorDispatcher from '@/logic/hooks/errors/ErrorDispatcher.ts';
import { AxiosError } from 'axios';

const useGetCssByClassAndSemester = (classId: number, semesterId: number) => {
  const cssRepository = repositoryContext.css;
  const dispathError = useErrorDispatcher();
  const getCss = useQuery(
    ['css'],
    () => cssRepository.getCssByClassAndSemesterId(classId, semesterId),
    {
      enabled: classId !== 0 && semesterId !== 0,
      onError: error => {
        dispathError.dispatchError(error as AxiosError);
      },
    },
  );

  return getCss;
};

export default useGetCssByClassAndSemester;
