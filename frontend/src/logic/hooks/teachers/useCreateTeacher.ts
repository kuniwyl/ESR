import repositoryContext from '@/logic/repositories/repositoryContext.ts';
import { useMutation, useQueryClient } from 'react-query';
import useErrorDispatcher from '@/logic/hooks/errors/ErrorDispatcher.ts';
import { AxiosError } from 'axios';

const useCreateTeacher = () => {
  const teacherRepository = repositoryContext.teacher;
  const dispathError = useErrorDispatcher();
  const queryClient = useQueryClient();
  const createTeacher = useMutation({
    mutationFn: teacherRepository.createTeacher,
    onSuccess: () => {
      queryClient.invalidateQueries('teachers');
    },
    onError: error => {
      dispathError.dispatchError(error as AxiosError);
    },
  });

  return createTeacher;
};

export default useCreateTeacher;
