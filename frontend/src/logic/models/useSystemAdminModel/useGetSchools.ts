import ISystemAdminRepository from '@/logic/interfaces/repositoires/ISystemAdminRepository.ts';
import { useQuery } from 'react-query';

const useGetSchools = (systemAdminRepository: ISystemAdminRepository) => {
  const {
    data: schools,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useQuery({
    queryKey: 'systemAdmin',
    queryFn: systemAdminRepository.getSchools,
  });

  return {
    schools,
    error,
    loadings: {
      isLoading,
      isError,
      isSuccess,
    },
  };
};

export default useGetSchools;
