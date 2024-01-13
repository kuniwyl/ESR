import repositoryContext from '@/logic/repositories/repositoryContext.ts';
import useErrorDispatcher from '@/logic/hooks/errors/ErrorDispatcher.ts';
import { useQuery } from 'react-query';
import { AxiosError } from 'axios';

const useGetGradeByCss = (cssId: number) => {
  const graderRepository = repositoryContext.grade;
  const dispatchError = useErrorDispatcher();
  const getGrades = useQuery({
    queryKey: ['grades', cssId],
    queryFn: () => graderRepository.getGradeByCssId(cssId.toString()),
    onError: error => {
      dispatchError.dispatchError(error as AxiosError);
    },
  });

  return getGrades;
};

export default useGetGradeByCss;
