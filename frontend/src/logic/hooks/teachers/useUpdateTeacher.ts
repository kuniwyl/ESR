import repositoryContext from '@/logic/repositories/repositoryContext.ts';
import { useMutation, useQueryClient } from 'react-query';
import useErrorDispatcher from '@/logic/hooks/errors/ErrorDispatcher.ts';
import { AxiosError } from 'axios';

const useUpdateTeacher = () => {
  const teacherRepository = repositoryContext.teacher;
  const dispathError = useErrorDispatcher();
  const queryClient = useQueryClient();
  const updateTeacher = useMutation({
    mutationFn: teacherRepository.updateTeacher,
    onSuccess: () => {
      queryClient.invalidateQueries('teachers');
    },
    onError: error => {
      dispathError.dispatchError(error as AxiosError);
    },
  });

  return updateTeacher;
};

export default useUpdateTeacher;
