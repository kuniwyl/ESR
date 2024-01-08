import repositoryContext from '@/logic/repositories/repositoryContext.ts';
import { useMutation, useQueryClient } from 'react-query';
import useErrorDispatcher from '@/logic/hooks/errors/ErrorDispatcher.ts';
import { AxiosError } from 'axios';

const useDeleteTeacher = () => {
  const teacherRepository = repositoryContext.teacher;
  const dispathError = useErrorDispatcher();
  const queryClient = useQueryClient();
  const deleteTeacher = useMutation({
    mutationFn: teacherRepository.deleteTeacher,
    onSuccess: () => {
      queryClient.invalidateQueries('teachers');
    },
    onError: error => {
      dispathError.dispatchError(error as AxiosError);
    },
  });

  return deleteTeacher;
};

export default useDeleteTeacher;
