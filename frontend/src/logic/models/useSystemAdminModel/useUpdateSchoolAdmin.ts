import ISystemAdminRepository from '@/logic/interfaces/repositoires/ISystemAdminRepository.ts';
import { useMutation } from 'react-query';

const useUpdateSchoolAdmin = (
  systemAdminRepository: ISystemAdminRepository,
) => {
  const {
    mutate: updateSchoolAdmin,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useMutation({
    mutationKey: 'systemAdmin',
    mutationFn: systemAdminRepository.editAdmin,
  });

  return {
    updateSchoolAdmin,
    error,
    loadings: { isLoading, isError, isSuccess },
  };
};

export default useUpdateSchoolAdmin;
