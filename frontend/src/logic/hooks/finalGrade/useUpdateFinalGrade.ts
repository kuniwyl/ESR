import repositoryContext from '@/logic/repositories/repositoryContext.ts';
import useErrorDispatcher from '@/logic/hooks/errors/ErrorDispatcher.ts';
import { useMutation, useQueryClient } from 'react-query';
import { AxiosError } from 'axios';

const useUpdateFinalGrade = () => {
  const finalGradeRepository = repositoryContext.finalGrade;
  const dispatchError = useErrorDispatcher();
  const queryClient = useQueryClient();
  const updateFinalGrade = useMutation({
    mutationFn: finalGradeRepository.updateFinalGrade,
    onError: (error: Error) => {
      dispatchError.dispatchError(error as AxiosError);
    },
    onSuccess: () => {
      queryClient.invalidateQueries('grades');
    },
  });

  return updateFinalGrade;
};

export default useUpdateFinalGrade;
