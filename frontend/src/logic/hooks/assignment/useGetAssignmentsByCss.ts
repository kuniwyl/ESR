import repositoryContext from '@/logic/repositories/repositoryContext.ts';
import useErrorDispatcher from '@/logic/hooks/errors/ErrorDispatcher.ts';
import { useQuery } from 'react-query';
import { AxiosError } from 'axios';

const useGetAssignmentsByCss = (css: number) => {
  const assignmentRepository = repositoryContext.assignment;
  const dispatchError = useErrorDispatcher();
  const getAssignments = useQuery({
    queryKey: ['assignments', css],
    queryFn: () => assignmentRepository.getAssignmentByCssId(css),
    enabled: css !== 0,
    onError: error => {
      dispatchError.dispatchError(error as AxiosError);
    },
  });

  return getAssignments;
};

export default useGetAssignmentsByCss;
