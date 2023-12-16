import IStudentRepository from '@/logic/interfaces/repositoires/IStudentRepository.ts';
import { useQuery } from 'react-query';

const useGetStudent = (id: number, studentRepository: IStudentRepository) => {
  const {
    data: student,
    refetch: execute,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useQuery({
    queryKey: ['student', id],
    queryFn: () => studentRepository.getStudent(id),
  });

  return {
    student,
    execute,
    error,
    state: {
      isError,
      isLoading,
      isSuccess,
    },
  };
};

export default useGetStudent;
