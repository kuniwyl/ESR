import repositoryContext from '@/logic/repositories/repositoryContext.ts';
import { useQuery } from 'react-query';
import useErrorDispatcher from '@/logic/hooks/errors/ErrorDispatcher.ts';
import { AxiosError } from 'axios';

const useGetSchool = (id: number) => {
  const schoolsRepository = repositoryContext.school;
  const dispathError = useErrorDispatcher();
  const useSchool = useQuery(
    ['school', id],
    () => schoolsRepository.getSchoolWithAdmins(id),
    {
      retry: false,
      enabled: false,
      onError: error => {
        dispathError.dispatchError(error as AxiosError);
      },
    },
  );

  return useSchool;
};

export default useGetSchool;
