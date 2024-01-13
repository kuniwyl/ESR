import repositoryContext from '@/logic/repositories/repositoryContext.ts';
import useErrorDispatcher from '@/logic/hooks/errors/ErrorDispatcher.ts';
import { useMutation, useQueryClient } from 'react-query';
import { AxiosError } from 'axios';
import GradeDto from '@/domain/dtos/GradeDto.ts';

const useCreateGrade = () => {
  const gradeRepository = repositoryContext.grade;
  const dispatchError = useErrorDispatcher();
  const queryClient = useQueryClient();
  const createGrade = useMutation({
    mutationFn: (grade: GradeDto) => gradeRepository.createGrade(grade),
    onError: error => {
      dispatchError.dispatchError(error as AxiosError);
    },
    onSuccess: () => {
      queryClient.invalidateQueries('grades');
    },
  });

  return createGrade;
};

export default useCreateGrade;
