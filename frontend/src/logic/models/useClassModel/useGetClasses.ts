import IClassRepository from '@/logic/interfaces/repositoires/IClassRepository.ts';
import { useQuery } from 'react-query';

const useGetClasses = (classRepository: IClassRepository) => {
  const {
    data: classes,
    refetch: execute,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useQuery({
    queryKey: 'class',
    queryFn: classRepository.getClasses,
  });

  return {
    classes,
    execute,
    error,
    state: {
      isError,
      isLoading,
      isSuccess,
    },
  };
};

export default useGetClasses;
