import repositoryContext from '@/logic/repositories/repositoryContext.ts';
import { useMutation, useQueryClient } from 'react-query';
import useErrorDispatcher from '@/logic/hooks/errors/ErrorDispatcher.ts';
import { AxiosError } from 'axios';

const useDeleteParent = () => {
  const praentRepository = repositoryContext.parent;
  const dispathError = useErrorDispatcher();
  const queryClient = useQueryClient();
  const deleteParent = useMutation({
    mutationFn: (parentId: number) => praentRepository.deleteParent(parentId),
    onSuccess: () => {
      queryClient.invalidateQueries('parents');
    },
    onError: error => {
      dispathError.dispatchError(error as AxiosError);
    },
  });

  return deleteParent;
};

export default useDeleteParent;
