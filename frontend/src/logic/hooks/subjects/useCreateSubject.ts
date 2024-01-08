import repositoryContext from '@/logic/repositories/repositoryContext.ts';
import { useMutation, useQueryClient } from 'react-query';
import SubjectDto from '@/domain/dtos/SubjectDto.ts';
import useErrorDispatcher from '@/logic/hooks/errors/ErrorDispatcher.ts';
import { AxiosError } from 'axios';

const useCreateSubject = () => {
  const subjectRepository = repositoryContext.subject;
  const dispathError = useErrorDispatcher();
  const queryClient = useQueryClient();
  const createSubject = useMutation({
    mutationFn: (subject: SubjectDto) =>
      subjectRepository.createSubject(subject),
    onSuccess: () => {
      queryClient.invalidateQueries('subjects');
    },
    onError: error => {
      dispathError.dispatchError(error as AxiosError);
    },
  });

  return createSubject;
};

export type TCreateSubject = ReturnType<typeof useCreateSubject>;
export default useCreateSubject;
