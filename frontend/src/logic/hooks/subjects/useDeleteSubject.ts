import repositoryContext from '@/logic/repositories/repositoryContext.ts';
import { queryClient } from '@/main.tsx';
import { useMutation } from 'react-query';
import useErrorDispatcher from '@/logic/hooks/errors/ErrorDispatcher.ts';
import { AxiosError } from 'axios';

const useDeleteSubject = () => {
  const subjectRepository = repositoryContext.subject;
  const dispathError = useErrorDispatcher();
  const deleteSubject = useMutation({
    mutationFn: (subjectId: number) =>
      subjectRepository.deleteSubject(subjectId),
    onSuccess: () => {
      queryClient.invalidateQueries('subjects');
    },
    onError: error => {
      dispathError.dispatchError(error as AxiosError);
    },
  });

  return deleteSubject;
};

export type TDeleteSubject = ReturnType<typeof useDeleteSubject>;
export default useDeleteSubject;
