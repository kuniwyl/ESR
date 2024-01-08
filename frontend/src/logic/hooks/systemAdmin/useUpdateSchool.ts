import repositoryContext from '@/logic/repositories/repositoryContext.ts';
import { useMutation, useQueryClient } from 'react-query';
import useErrorDispatcher from '@/logic/hooks/errors/ErrorDispatcher.ts';
import { AxiosError } from 'axios';

const useUpdateSchool = () => {
  const queryClient = useQueryClient();
  const dispathError = useErrorDispatcher();
  const schoolsRepository = repositoryContext.school;
  const useUpdateSchool = useMutation({
    mutationFn: schoolsRepository.updateSchool,
    onSuccess: ({ data }) => {
      queryClient.invalidateQueries(['schools', data.id]);
    },
    onError: error => {
      dispathError.dispatchError(error as AxiosError);
    },
  });

  return useUpdateSchool;
};

export default useUpdateSchool;
