import IClassRepository from '@/logic/interfaces/repositoires/IClassRepository.ts';
import { useQuery } from 'react-query';

const useGetClassStudents = (
  classId: number,
  classRepository: IClassRepository,
) => {
  const {
    data: classStudents,
    refetch: execute,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useQuery({
    queryKey: ['class', classId],
    queryFn: () => classRepository.getStudents(classId),
  });

  return {
    classStudents,
    error,
    execute,
    state: {
      isError,
      isLoading,
      isSuccess,
    },
  };
};

export default useGetClassStudents;
