import ISystemAdminRepository from '@/logic/interfaces/repositoires/ISystemAdminRepository.ts';
import { useQuery } from 'react-query';

const useGetSchool = (
  id: number,
  systemAdminRepository: ISystemAdminRepository,
) => {
  const {
    data: school,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useQuery({
    queryKey: ['systemAdmin', id],
    queryFn: () => systemAdminRepository.getSchool(id),
  });

  return {
    school,
    error,
    loadings: {
      isLoading,
      isError,
      isSuccess,
    },
  };
};

export default useGetSchool;
