import repositoryContext from '@/logic/repositories/repositoryContext.ts';
import { useQuery } from 'react-query';
import useErrorDispatcher from '@/logic/hooks/errors/ErrorDispatcher.ts';
import { AxiosError } from 'axios';

const useGetCssInstancesBySemesterAndTeacher = (
  semesterId: string,
  teacherId: string,
) => {
  const cssInstanceRepo = repositoryContext.cssInstance;
  const dispatchError = useErrorDispatcher();
  const getInstances = useQuery(
    ['cssInstances', semesterId, teacherId],
    () =>
      cssInstanceRepo.getCssInstanceBySemesterAndTeacher(semesterId, teacherId),
    {
      enabled: !!semesterId && !!teacherId,
      onError: e => {
        dispatchError.dispatchError(e as AxiosError);
      },
    },
  );

  return getInstances;
};

export default useGetCssInstancesBySemesterAndTeacher;
