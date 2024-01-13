import repositoryContext from '@/logic/repositories/repositoryContext.ts';
import useErrorDispatcher from '@/logic/hooks/errors/ErrorDispatcher.ts';
import { useQuery } from 'react-query';

const useGetSubjectsByStudent = () => {
  const studentRepository = repositoryContext.student;
  const dispatchError = useErrorDispatcher();
  const getSubjectsByStudent = useQuery({
    queryKey: 'subjectsByStudent',
    queryFn: () => studentRepository.getSubjectsFromStudent(),
    onError: e => {
      dispatchError.dispatchError(e);
    },
  });

  return getSubjectsByStudent;
};

export default useGetSubjectsByStudent;
