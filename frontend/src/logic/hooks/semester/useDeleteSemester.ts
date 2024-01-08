import repositoryContext from '@/logic/repositories/repositoryContext.ts';
import { useMutation, useQueryClient } from 'react-query';
import useErrorDispatcher from '@/logic/hooks/errors/ErrorDispatcher.ts';
import { AxiosError } from 'axios';

const useDeleteSemester = () => {
  const semesterRepository = repositoryContext.semester;
  const dispathError = useErrorDispatcher();
  const queryClient = useQueryClient();
  const useDeleteSemester = useMutation({
    mutationFn: semesterRepository.deleteSemester,
    onSuccess: () => {
      queryClient.invalidateQueries('semesters');
    },
    onError: error => {
      dispathError.dispatchError(error as AxiosError);
    },
  });

  return useDeleteSemester;
};

export default useDeleteSemester;
