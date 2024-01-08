import { useQuery } from 'react-query';
import repositoryContext from '@/logic/repositories/repositoryContext.ts';
import useErrorDispatcher from '@/logic/hooks/errors/ErrorDispatcher.ts';
import { AxiosError } from 'axios';

const useGetSubject = (subjectId: number) => {
  const subjectRepository = repositoryContext.subject;
  const dispathError = useErrorDispatcher();
  const subject = useQuery(
    ['subject', subjectId],
    () => subjectRepository.getSubject(subjectId),
    {
      enabled: subjectId !== 0,
      onError: error => {
        dispathError.dispatchError(error as AxiosError);
      },
    },
  );

  return subject;
};

export type TGetSubject = ReturnType<typeof useGetSubject>;
export default useGetSubject;
