import ITeacherRepository from '@/logic/interfaces/repositoires/ITeacherRepository.ts';
import { useQuery } from 'react-query';

const useGetTeacher = (id: number, teacherRepository: ITeacherRepository) => {
  const {
    data: teacher,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useQuery({
    queryKey: ['teachers', id],
    queryFn: () => teacherRepository.getTeacher(id),
  });

  return {
    teacher,
    error,
    state: {
      isError,
      isLoading,
      isSuccess,
    },
  };
};

export default useGetTeacher;
