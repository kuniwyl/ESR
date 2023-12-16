import ISystemAdminRepository from '@/logic/interfaces/repositoires/ISystemAdminRepository.ts';
import { useMutation } from 'react-query';

const useDeleteSchool = (systemAdminRepository: ISystemAdminRepository) => {
  const {
    mutate: deleteSchool,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useMutation({
    mutationKey: 'systemAdmin',
    mutationFn: systemAdminRepository.deleteSchool,
  });

  return { deleteSchool, error, loadings: { isLoading, isError, isSuccess } };
};

export default useDeleteSchool;
