import ISystemAdminRepository from '@/logic/interfaces/repositoires/ISystemAdminRepository.ts';
import { useMutation } from 'react-query';

const useCreateSchoolAdmin = (
  systemAdminRepository: ISystemAdminRepository,
) => {
  const {
    mutate: createSchoolAdmin,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useMutation({
    mutationKey: 'systemAdmin',
    mutationFn: systemAdminRepository.addAdmin,
  });

  return {
    createSchoolAdmin,
    error,
    loadings: { isLoading, isError, isSuccess },
  };
};

export default useCreateSchoolAdmin;
