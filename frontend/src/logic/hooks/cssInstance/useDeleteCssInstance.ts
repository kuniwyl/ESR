import repositoryContext from '@/logic/repositories/repositoryContext.ts';
import { useMutation, useQueryClient } from 'react-query';
import useErrorDispatcher from '@/logic/hooks/errors/ErrorDispatcher.ts';
import { AxiosError } from 'axios';

const useDeleteCssInstance = () => {
  const cssRepo = repositoryContext.cssInstance;
  const dispathError = useErrorDispatcher();
  const quertClient = useQueryClient();
  const deleteCssInstance = useMutation({
    mutationFn: cssRepo.deleteCssInstance,
    onSuccess: () => {
      quertClient.invalidateQueries('cssInstance');
    },
    onError: error => {
      dispathError.dispatchError(error as AxiosError);
    },
  });

  return deleteCssInstance;
};

export default useDeleteCssInstance;
