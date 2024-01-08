import repositoryContext from '@/logic/repositories/repositoryContext.ts';
import { useMutation, useQueryClient } from 'react-query';
import useErrorDispatcher from '@/logic/hooks/errors/ErrorDispatcher.ts';
import { AxiosError } from 'axios';

const useEditSchoolAdmin = () => {
  const schoolAdminRepository = repositoryContext.schoolAdmin;
  const dispathError = useErrorDispatcher();
  const queryClient = useQueryClient();
  const editSchoolAdmin = useMutation({
    mutationFn: schoolAdminRepository.updateSchoolAdmin,
    onSuccess: () => {
      queryClient.invalidateQueries(['school']);
    },
    onError: error => {
      dispathError.dispatchError(error as AxiosError);
    },
  });

  return editSchoolAdmin;
};

export default useEditSchoolAdmin;
