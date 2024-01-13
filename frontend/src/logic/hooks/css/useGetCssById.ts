import repositoryContext from '@/logic/repositories/repositoryContext.ts';
import useErrorDispatcher from '@/logic/hooks/errors/ErrorDispatcher.ts';
import { AxiosError } from 'axios';
import { useQuery } from 'react-query';

const useGetCssById = (id: number) => {
  const cssRepo = repositoryContext.css;
  const dispatchError = useErrorDispatcher();
  const getCssById = useQuery(['css', id], () => cssRepo.getCssById(id), {
    onError: error => {
      dispatchError.dispatchError(error as AxiosError);
    },
  });

  return getCssById;
};

export type TGetCssById = ReturnType<typeof useGetCssById>;
export default useGetCssById;
