import ISystemAdminRepository from '@/logic/interfaces/repositoires/ISystemAdminRepository.ts';
import { useMutation } from 'react-query';

const useUpdateSchool = (systemAdminRepository: ISystemAdminRepository) => {
  const {
    mutate: updateSchool,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useMutation({
    mutationKey: 'systemAdmin',
    mutationFn: systemAdminRepository.updateSchool,
  });

  return { updateSchool, error, loadings: { isLoading, isError, isSuccess } };
};

export default useUpdateSchool;
