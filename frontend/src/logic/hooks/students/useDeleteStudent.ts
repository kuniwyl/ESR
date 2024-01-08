import repositoryContext from '@/logic/repositories/repositoryContext.ts';
import { useMutation, useQueryClient } from 'react-query';
import useErrorDispatcher from '@/logic/hooks/errors/ErrorDispatcher.ts';
import { AxiosError } from 'axios';

const useDeleteStudent = () => {
  const studentRepository = repositoryContext.student;
  const dispathError = useErrorDispatcher();
  const queryClient = useQueryClient();
  const deleteStudent = useMutation({
    mutationFn: (id: number) => studentRepository.deleteStudent(id),
    onSuccess: () => {
      queryClient.invalidateQueries('students');
    },
    onError: error => {
      dispathError.dispatchError(error as AxiosError);
    },
  });

  return deleteStudent;
};

export default useDeleteStudent;
