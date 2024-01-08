import repositoryContext from '@/logic/repositories/repositoryContext.ts';
import { useMutation, useQueryClient } from 'react-query';
import ClassSubjectSemesterDto from '@/domain/dtos/ClassSubjectSemesterDto.ts';
import useErrorDispatcher from '@/logic/hooks/errors/ErrorDispatcher.ts';
import { AxiosError } from 'axios';

const useCreateCss = () => {
  const cssRepository = repositoryContext.css;
  const dispathError = useErrorDispatcher();
  const queryClient = useQueryClient();
  const createCss = useMutation({
    mutationFn: (css: ClassSubjectSemesterDto) => cssRepository.createCss(css),
    onSuccess: () => {
      queryClient.invalidateQueries('css');
    },
    onError: error => {
      dispathError.dispatchError(error as AxiosError);
    },
  });

  return createCss;
};

export default useCreateCss;
