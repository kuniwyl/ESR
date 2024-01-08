import repositoryContext from '@/logic/repositories/repositoryContext.ts';
import { useMutation, useQueryClient } from 'react-query';
import CreateParentDto from '@/domain/dtos/CreateParentDto.ts';
import useErrorDispatcher from '@/logic/hooks/errors/ErrorDispatcher.ts';
import { AxiosError } from 'axios';

const useCreateParent = () => {
  const parentRepository = repositoryContext.parent;
  const dispathError = useErrorDispatcher();
  const queryClient = useQueryClient();
  const createParent = useMutation({
    mutationFn: (parent: CreateParentDto) =>
      parentRepository.createParent(parent),
    onSuccess: () => {
      queryClient.invalidateQueries('parents');
    },
    onError: error => {
      dispathError.dispatchError(error as AxiosError);
    },
  });

  return createParent;
};

export default useCreateParent;
