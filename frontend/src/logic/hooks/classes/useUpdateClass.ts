import repositoryContext from '@/logic/repositories/repositoryContext.ts';
import { useMutation, useQueryClient } from 'react-query';
import useErrorDispatcher from '@/logic/hooks/errors/ErrorDispatcher.ts';
import { AxiosError } from 'axios';

const useUpdateClass = () => {
  const classRepository = repositoryContext.classR;
  const dispathError = useErrorDispatcher();
  const queryClient = useQueryClient();
  const updateClass = useMutation({
    mutationFn: classRepository.updateClass,
    onSuccess: () => {
      queryClient.invalidateQueries('classes');
    },
    onError: error => {
      dispathError.dispatchError(error as AxiosError);
    },
  });

  return updateClass;
};

export default useUpdateClass;
