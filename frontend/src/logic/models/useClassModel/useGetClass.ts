import IClassRepository from '@/logic/interfaces/repositoires/IClassRepository.ts';
import { useQuery } from 'react-query';

const useGetClass = (id: number, classRepository: IClassRepository) => {
  const {
    data: classData,
    refetch: execute,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useQuery({
    queryKey: ['class', id],
    queryFn: () => classRepository.getClass(id),
  });

  return {
    classData,
    execute,
    error,
    state: {
      isError,
      isLoading,
      isSuccess,
    },
  };
};

export default useGetClass;
