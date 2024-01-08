import repositoryContext from '@/logic/repositories/repositoryContext.ts';
import { useMutation, useQueryClient } from 'react-query';
import useErrorDispatcher from '@/logic/hooks/errors/ErrorDispatcher.ts';
import { AxiosError } from 'axios';

const useEditStudent = () => {
  const studentRepository = repositoryContext.student;
  const dispathError = useErrorDispatcher();
  const queryClient = useQueryClient();
  const editStudent = useMutation({
    mutationFn: studentRepository.updateStudent,
    onSuccess: () => {
      queryClient.invalidateQueries(['students']);
    },
    onError: error => {
      dispathError.dispatchError(error as AxiosError);
    },
  });

  return editStudent;
};

export type TEditStudent = ReturnType<typeof useEditStudent>;
export default useEditStudent;
