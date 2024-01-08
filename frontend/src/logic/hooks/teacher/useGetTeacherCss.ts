import repositoryContext from '@/logic/repositories/repositoryContext.ts';
import { useQuery } from 'react-query';
import useErrorDispatcher from '@/logic/hooks/errors/ErrorDispatcher.ts';
import { AxiosError } from 'axios';

const useGetTeacherCss = (teacherId: number, semesterId: number) => {
  const cssRepository = repositoryContext.css;
  const dispathError = useErrorDispatcher();
  const getCss = useQuery(
    ['teacher'],
    () => cssRepository.getCssByTeacherAndSemesterId(teacherId, semesterId),
    {
      onError: error => {
        dispathError.dispatchError(error as AxiosError);
      },
    },
  );

  return getCss;
};

export default useGetTeacherCss;
