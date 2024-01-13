import repositoryContext from '@/logic/repositories/repositoryContext.ts';
import useErrorDispatcher from '@/logic/hooks/errors/ErrorDispatcher.ts';
import { AxiosError } from 'axios';
import { useMutation, useQueryClient } from 'react-query';

const useDelGrade = () => {
  const gradeRepository = repositoryContext.grade;
  const queryClient = useQueryClient();
  const dispatchError = useErrorDispatcher();
  const delGrade = useMutation({
    mutationFn: (gradeId: number) =>
      gradeRepository.deleteGrade(gradeId.toString()),
    onError: error => {
      dispatchError.dispatchError(error as AxiosError);
    },
    onSuccess: () => {
      queryClient.invalidateQueries('grades');
    },
  });

  return delGrade;
};

export default useDelGrade;
