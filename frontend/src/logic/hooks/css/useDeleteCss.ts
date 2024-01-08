import repositoryContext from '@/logic/repositories/repositoryContext.ts';
import { useMutation, useQueryClient } from 'react-query';
import useErrorDispatcher from '@/logic/hooks/errors/ErrorDispatcher.ts';
import { AxiosError } from 'axios';

const useDeleteCss = () => {
  const cssRepository = repositoryContext.css;
  const dispathError = useErrorDispatcher();
  const queryClient = useQueryClient();
  const deleteCss = useMutation({
    mutationFn: (cssId: number) => cssRepository.deleteCss(cssId),
    onSuccess: () => {
      queryClient.invalidateQueries('css');
    },
    onError: error => {
      dispathError.dispatchError(error as AxiosError);
    },
  });

  return deleteCss;
};

export default useDeleteCss;
