import repositoryContext from '@/logic/repositories/repositoryContext.ts';
import useErrorDispatcher from '@/logic/hooks/errors/ErrorDispatcher.ts';
import { AxiosError } from 'axios';
import GradeDto from '@/domain/dtos/GradeDto.ts';
import { useMutation, useQueryClient } from 'react-query';

const usePutGrade = () => {
  const gradeRepository = repositoryContext.grade;
  const dispatchError = useErrorDispatcher();
  const queryClient = useQueryClient();
  const putGrade = useMutation({
    mutationFn: (grade: GradeDto) => gradeRepository.updateGrade(grade),
    onError: error => {
      dispatchError.dispatchError(error as AxiosError);
    },
    onSuccess: () => {
      queryClient.invalidateQueries('grades');
    },
  });

  return putGrade;
};

export default usePutGrade;
