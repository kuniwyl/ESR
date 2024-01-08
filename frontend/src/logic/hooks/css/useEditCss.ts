import repositoryContext from '@/logic/repositories/repositoryContext.ts';
import { useMutation, useQueryClient } from 'react-query';
import ClassSubjectSemesterDto from '@/domain/dtos/ClassSubjectSemesterDto.ts';
import useErrorDispatcher from '@/logic/hooks/errors/ErrorDispatcher.ts';
import { AxiosError } from 'axios';

const useEditCss = () => {
  const cssRepository = repositoryContext.css;
  const dispathError = useErrorDispatcher();
  const queryClient = useQueryClient();
  const editCss = useMutation({
    mutationFn: (css: ClassSubjectSemesterDto) => cssRepository.updateCss(css),
    onSuccess: () => {
      queryClient.invalidateQueries('css');
    },
    onError: error => {
      dispathError.dispatchError(error as AxiosError);
    },
  });

  return editCss;
};

export default useEditCss;
