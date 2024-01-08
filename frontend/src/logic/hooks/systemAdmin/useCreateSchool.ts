import { useMutation, useQueryClient } from 'react-query';
import repositoryContext from '@/logic/repositories/repositoryContext.ts';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/configuration/config.ts';
import useErrorDispatcher from '@/logic/hooks/errors/ErrorDispatcher.ts';
import { AxiosError } from 'axios';

const useCreateSchool = () => {
  const queryClient = useQueryClient();
  const dispathError = useErrorDispatcher();
  const navigation = useNavigate();
  const schoolsRepository = repositoryContext.school;
  const useCreateSchool = useMutation({
    mutationFn: schoolsRepository.createSchool,
    onSuccess: () => {
      queryClient.invalidateQueries('schools');
      navigation(ROUTES.SHOW_SCHOOLS());
    },
    onError: error => {
      dispathError.dispatchError(error as AxiosError);
    },
  });

  return useCreateSchool;
};

export default useCreateSchool;
