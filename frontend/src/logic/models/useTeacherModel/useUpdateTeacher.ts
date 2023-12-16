import ITeacherRepository from '@/logic/interfaces/repositoires/ITeacherRepository.ts';
import { useMutation } from 'react-query';

const useUpdateTeacher = (teacherRepository: ITeacherRepository) => {
  const {
    mutate: updateTeacher,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useMutation({
    mutationKey: 'teachers',
    mutationFn: teacherRepository.updateTeacher,
  });

  return {
    updateTeacher,
    error,
    state: {
      isError,
      isLoading,
      isSuccess,
    },
  };
};

export default useUpdateTeacher;
