import repositoryContext from '@/logic/repositories/repositoryContext.ts';
import { useQuery } from 'react-query';
import useErrorDispatcher from '@/logic/hooks/errors/ErrorDispatcher.ts';
import { AxiosError } from 'axios';

const useGetSchools = () => {
  const schoolsRepository = repositoryContext.school;
  const dispathError = useErrorDispatcher();
  const useSchools = useQuery('schools', schoolsRepository.getSchools, {
    onError: error => {
      dispathError.dispatchError(error as AxiosError);
    },
  });

  return useSchools;
};

export default useGetSchools;
