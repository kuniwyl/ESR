import repositoryContext from '@/logic/repositories/repositoryContext.ts';
import { useMutation, useQueryClient } from 'react-query';
import useErrorDispatcher from '@/logic/hooks/errors/ErrorDispatcher.ts';
import { AxiosError } from 'axios';

const useCreateSemester = () => {
  const semesterRepository = repositoryContext.semester;
  const dispathError = useErrorDispatcher();
  const queryClient = useQueryClient();
  const createSemester = useMutation({
    mutationFn: semesterRepository.createSemester,
    onSuccess: () => {
      queryClient.invalidateQueries('semesters');
    },
    onError: error => {
      dispathError.dispatchError(error as AxiosError);
    },
  });

  return createSemester;
};

export default useCreateSemester;
