import repositoryContext from '@/logic/repositories/repositoryContext.ts';
import { useQuery } from 'react-query';
import useErrorDispatcher from '@/logic/hooks/errors/ErrorDispatcher.ts';
import { AxiosError } from 'axios';

const useGetSystemAdmins = () => {
  const systemAdminsRepository = repositoryContext.systemAdmin;
  const dispathError = useErrorDispatcher();
  const useGetSystemAdmins = useQuery({
    queryKey: 'systemAdmins',
    queryFn: systemAdminsRepository.getSystemAdmins,
    onError: error => {
      dispathError.dispatchError(error as AxiosError);
    },
  });

  return useGetSystemAdmins;
};

export default useGetSystemAdmins;
