import ITeacherRepository from '@/logic/interfaces/repositoires/ITeacherRepository.ts';
import { useMutation } from 'react-query';

const useDeleteTeacher = (teacherRepository: ITeacherRepository) => {
  const {
    mutate: deleteTeacher,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useMutation({
    mutationKey: 'teachers',
    mutationFn: teacherRepository.deleteTeacher,
  });

  return {
    deleteTeacher,
    error,
    state: {
      isError,
      isLoading,
      isSuccess,
    },
  };
};

export default useDeleteTeacher;
