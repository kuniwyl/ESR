import repositoryContext from '@/logic/repositories/repositoryContext.ts';
import { useQuery } from 'react-query';
import useErrorDispatcher from '@/logic/hooks/errors/ErrorDispatcher.ts';
import { AxiosError } from 'axios';

const useGetSchoolAdmin = (id: number) => {
  const schoolAdminRepository = repositoryContext.schoolAdmin;
  const dispathError = useErrorDispatcher();
  const getSchoolAdmin = useQuery({
    queryFn: () => schoolAdminRepository.getSchoolAdmin(id),
    enabled: false,
    onError: error => {
      dispathError.dispatchError(error as AxiosError);
    },
  });

  return getSchoolAdmin;
};

export default useGetSchoolAdmin;
