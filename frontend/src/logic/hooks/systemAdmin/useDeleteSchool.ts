import repositoryContext from '@/logic/repositories/repositoryContext.ts';
import { useMutation, useQueryClient } from 'react-query';
import useErrorDispatcher from '@/logic/hooks/errors/ErrorDispatcher.ts';
import { AxiosError } from 'axios';

const useDeleteSchool = () => {
  const queryClient = useQueryClient();
  const dispathError = useErrorDispatcher();
  const schoolsRepository = repositoryContext.school;
  const useDeleteSchool = useMutation({
    mutationFn: schoolsRepository.deleteSchool,
    onSuccess: () => {
      queryClient.invalidateQueries('schools');
    },
    onError: error => {
      dispathError.dispatchError(error as AxiosError);
    },
  });

  return useDeleteSchool;
};

export default useDeleteSchool;
