import repositoryContext from '@/logic/repositories/repositoryContext.ts';
import { useMutation, useQueryClient } from 'react-query';
import useErrorDispatcher from '@/logic/hooks/errors/ErrorDispatcher.ts';
import { AxiosError } from 'axios';

const useCreateCssInstance = () => {
  const cssInstanceRepository = repositoryContext.cssInstance;
  const dispathError = useErrorDispatcher();
  const queryClient = useQueryClient();
  const createCssInstance = useMutation({
    mutationFn: cssInstanceRepository.createCssInstance,
    onSuccess: () => {
      queryClient.invalidateQueries('cssInstance');
    },
    onError: error => {
      dispathError.dispatchError(error as AxiosError);
    },
  });

  return createCssInstance;
};

export default useCreateCssInstance;
