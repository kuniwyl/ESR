import repositoryContext from '@/logic/repositories/repositoryContext.ts';
import { useMutation, useQueryClient } from 'react-query';
import ParentDto from '@/domain/dtos/ParentDto.ts';
import useErrorDispatcher from '@/logic/hooks/errors/ErrorDispatcher.ts';
import { AxiosError } from 'axios';

const useEditParent = () => {
  const parentRepository = repositoryContext.parent;
  const dispathError = useErrorDispatcher();
  const queryClient = useQueryClient();
  const editParent = useMutation({
    mutationFn: (parent: ParentDto) => parentRepository.updateParent(parent),
    onSuccess: () => {
      queryClient.invalidateQueries('parents');
    },
    onError: error => {
      dispathError.dispatchError(error as AxiosError);
    },
  });

  return editParent;
};

export default useEditParent;
