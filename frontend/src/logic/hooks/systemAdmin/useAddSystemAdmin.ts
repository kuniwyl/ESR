import repositoryContext from '@/logic/repositories/repositoryContext.ts';
import { useMutation, useQueryClient } from 'react-query';
import useErrorDispatcher from '@/logic/hooks/errors/ErrorDispatcher.ts';
import { AxiosError } from 'axios';

const useAddSystemAdmin = () => {
  const systemAdminRepository = repositoryContext.systemAdmin;
  const dispathError = useErrorDispatcher();
  const queryClient = useQueryClient();
  const useAddSystemAdmin = useMutation({
    mutationFn: systemAdminRepository.createSystemAdmin,
    onSuccess: () => {
      queryClient.invalidateQueries(['systemAdmins']);
    },
    onError: error => {
      dispathError.dispatchError(error as AxiosError);
    },
  });

  return useAddSystemAdmin;
};

export default useAddSystemAdmin;
