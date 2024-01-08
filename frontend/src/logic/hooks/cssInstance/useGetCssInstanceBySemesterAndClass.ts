import repositoryContext from '@/logic/repositories/repositoryContext.ts';
import { useQuery } from 'react-query';
import useErrorDispatcher from '@/logic/hooks/errors/ErrorDispatcher.ts';
import { AxiosError } from 'axios';

const useGetCssInstanceBySemesterAndClass = (
  semester: string,
  classId: string,
) => {
  const cssInstanceRepository = repositoryContext.cssInstance;
  const dispathError = useErrorDispatcher();
  const getInstances = useQuery(
    ['cssInstance', semester, classId],
    () =>
      cssInstanceRepository.getCssInstanceBySemesterAndClass(semester, classId),
    {
      onError: error => {
        dispathError.dispatchError(error as AxiosError);
      },
    },
  );

  return getInstances;
};

export default useGetCssInstanceBySemesterAndClass;
