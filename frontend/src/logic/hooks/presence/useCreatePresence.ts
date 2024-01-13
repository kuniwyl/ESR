import repositoryContext from '@/logic/repositories/repositoryContext.ts';
import { useMutation, useQueryClient } from 'react-query';
import useErrorDispatcher from '@/logic/hooks/errors/ErrorDispatcher.ts';
import { AxiosError } from 'axios';

const useCreatePresence = () => {
  const presenceRepository = repositoryContext.presence;
  const queryClient = useQueryClient();
  const errorDispatcher = useErrorDispatcher();
  const createPresence = useMutation({
    mutationFn: presenceRepository.createPresence,
    onError: e => errorDispatcher.dispatchError(e as AxiosError),
    onSuccess: () => {
      queryClient.invalidateQueries('lessons');
    },
  });

  return createPresence;
};

export default useCreatePresence;
