import repositoryContext from '@/logic/repositories/repositoryContext.ts';
import { useMutation, useQueryClient } from 'react-query';
import useErrorDispatcher from '@/logic/hooks/errors/ErrorDispatcher.ts';
import { AxiosError } from 'axios';

const useEditPresence = () => {
  const presenceRepository = repositoryContext.presence;
  const queryClient = useQueryClient();
  const errorDispatcher = useErrorDispatcher();
  const editPresence = useMutation({
    mutationFn: presenceRepository.updatePresence,
    onError: e => errorDispatcher.dispatchError(e as AxiosError),
    onSuccess: () => {
      queryClient.invalidateQueries('lessons');
    },
  });

  return editPresence;
};

export default useEditPresence;
