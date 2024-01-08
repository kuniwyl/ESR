import repositoryContext from '@/logic/repositories/repositoryContext.ts';
import { useMutation, useQueryClient } from 'react-query';
import useErrorDispatcher from '@/logic/hooks/errors/ErrorDispatcher.ts';
import { AxiosError } from 'axios';

const useAddSchoolAdmin = () => {
  const schoolAdminRepository = repositoryContext.schoolAdmin;
  const dispathError = useErrorDispatcher();
  const queryClient = useQueryClient();
  const addSchoolAdmin = useMutation({
    mutationFn: schoolAdminRepository.createSchoolAdmin,
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries(['school', variables.schoolId]);
    },
    onError: error => {
      dispathError.dispatchError(error as AxiosError);
    },
  });

  return addSchoolAdmin;
};

export default useAddSchoolAdmin;
