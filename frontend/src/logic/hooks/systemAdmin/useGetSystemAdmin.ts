import repositoryContext from '@/logic/repositories/repositoryContext.ts';
import { useQuery } from 'react-query';
import useErrorDispatcher from '@/logic/hooks/errors/ErrorDispatcher.ts';
import { AxiosError } from 'axios';

const useGetSystemAdmin = (id: number) => {
  const systemAdminRepository = repositoryContext.systemAdmin;
  const dispathError = useErrorDispatcher();
  const useGetSystemAdmin = useQuery(
    ['systemAdmin', id],
    () => systemAdminRepository.getSystemAdmin(id),
    {
      enabled: false,
      onError: error => {
        dispathError.dispatchError(error as AxiosError);
      },
    },
  );

  return useGetSystemAdmin;
};

export default useGetSystemAdmin;
