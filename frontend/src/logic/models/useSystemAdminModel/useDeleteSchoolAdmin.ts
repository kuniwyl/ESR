import ISystemAdminRepository from '@/logic/interfaces/repositoires/ISystemAdminRepository.ts';
import { useMutation } from 'react-query';

const useDeleteSchoolAdmin = (
  systemAdminRepository: ISystemAdminRepository,
) => {
  const {
    mutate: deleteSchoolAdmin,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useMutation({
    mutationKey: 'systemAdmin',
    mutationFn: systemAdminRepository.removeAdmin,
  });

  return {
    deleteSchoolAdmin,
    error,
    loadings: { isLoading, isError, isSuccess },
  };
};

export default useDeleteSchoolAdmin;
