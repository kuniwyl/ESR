import repositoryContext from '@/logic/repositories/repositoryContext.ts';
import { useMutation, useQueryClient } from 'react-query';
import SubjectDto from '@/domain/dtos/SubjectDto.ts';
import useErrorDispatcher from '@/logic/hooks/errors/ErrorDispatcher.ts';
import { AxiosError } from 'axios';

const useEditSubject = () => {
  const subjectRepository = repositoryContext.subject;
  const dispathError = useErrorDispatcher();
  const queryClient = useQueryClient();
  const updateSubject = useMutation({
    mutationFn: (subject: SubjectDto) =>
      subjectRepository.updateSubject(subject.id, subject),
    onSuccess: () => {
      queryClient.invalidateQueries('subjects');
    },
    onError: error => {
      dispathError.dispatchError(error as AxiosError);
    },
  });

  return updateSubject;
};

export type TEditSubject = ReturnType<typeof useEditSubject>;
export default useEditSubject;
