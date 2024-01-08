import repositoryContext from '@/logic/repositories/repositoryContext.ts';
import { queryClient } from '@/main.tsx';
import { useMutation } from 'react-query';
import useErrorDispatcher from '@/logic/hooks/errors/ErrorDispatcher.ts';
import { AxiosError } from 'axios';

const useUpdateSystemAdmin = () => {
  const systemAdminRepository = repositoryContext.systemAdmin;
  const dispathError = useErrorDispatcher();
  const useUpdateSystemAdmin = useMutation({
    mutationFn: systemAdminRepository.updateSystemAdmin,
    onSuccess: () => {
      queryClient.invalidateQueries(['systemAdmins']);
    },
    onError: error => {
      dispathError.dispatchError(error as AxiosError);
    },
  });

  return useUpdateSystemAdmin;
};

export default useUpdateSystemAdmin;
