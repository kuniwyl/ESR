import ISystemAdminRepository from '@/logic/interfaces/repositoires/ISystemAdminRepository.ts';
import { useMutation } from 'react-query';

const useCreateSchool = (systemAdminRepository: ISystemAdminRepository) => {
  const {
    mutate: createSchool,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useMutation({
    mutationKey: 'systemAdmin',
    mutationFn: systemAdminRepository.createSchool,
  });

  return {
    createSchool,
    error,
    loadings: {
      isLoading,
      isError,
      isSuccess,
    },
  };
};

export default useCreateSchool;
