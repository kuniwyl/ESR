import repositoryContext from '@/logic/repositories/repositoryContext.ts';
import { useMutation, useQueryClient } from 'react-query';
import useErrorDispatcher from '@/logic/hooks/errors/ErrorDispatcher.ts';
import { AxiosError } from 'axios';

const useDeleteClass = () => {
  const classRepository = repositoryContext.classR;
  const queryClient = useQueryClient();
  const dispathError = useErrorDispatcher();
  const deleteClass = useMutation({
    mutationFn: classRepository.deleteClass,
    onSuccess: () => {
      queryClient.invalidateQueries('classes');
    },
    onError: error => {
      dispathError.dispatchError(error as AxiosError);
    },
  });

  return deleteClass;
};

export default useDeleteClass;
