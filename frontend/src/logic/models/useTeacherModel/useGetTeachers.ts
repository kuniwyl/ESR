import ITeacherRepository from '@/logic/interfaces/repositoires/ITeacherRepository.ts';
import { useQuery } from 'react-query';

const useGetTeachers = (teacherRepository: ITeacherRepository) => {
  const {
    data: teachers,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useQuery({
    queryKey: 'teachers',
    queryFn: teacherRepository.getTeachers,
  });

  return {
    teachers,
    error,
    state: {
      isError,
      isLoading,
      isSuccess,
    },
  };
};

export default useGetTeachers;
