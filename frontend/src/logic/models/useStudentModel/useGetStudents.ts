import IStudentRepository from '@/logic/interfaces/repositoires/IStudentRepository.ts';
import { useQuery } from 'react-query';

const useGetStudents = (studentRepository: IStudentRepository) => {
  const {
    data: students,
    refetch: execute,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useQuery({
    queryKey: 'students',
    queryFn: studentRepository.getStudents,
  });

  return {
    students,
    execute,
    error,
    state: {
      isError,
      isLoading,
      isSuccess,
    },
  };
};

export default useGetStudents;
