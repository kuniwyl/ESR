import repositoryContext from '@/logic/repositories/repositoryContext.ts';
import { useMutation, useQueryClient } from 'react-query';
import useErrorDispatcher from '@/logic/hooks/errors/ErrorDispatcher.ts';
import { AxiosError } from 'axios';

const useCreateStudent = () => {
  const studentRepository = repositoryContext.student;
  const dispathError = useErrorDispatcher();
  const queryClient = useQueryClient();
  const createStudent = useMutation({
    mutationFn: studentRepository.createStudent,
    onSuccess: () => {
      queryClient.invalidateQueries(['students']);
    },
    onError: error => {
      dispathError.dispatchError(error as AxiosError);
    },
  });

  return createStudent;
};

export type TCreateStudent = ReturnType<typeof useCreateStudent>;
export default useCreateStudent;
