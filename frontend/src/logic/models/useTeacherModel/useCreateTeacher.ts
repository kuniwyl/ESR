import ITeacherRepository from '@/logic/interfaces/repositoires/ITeacherRepository.ts';
import { useMutation } from 'react-query';

const useCreateTeacher = (teacherRepository: ITeacherRepository) => {
  const {
    mutate: createTeacher,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useMutation({
    mutationKey: 'teachers',
    mutationFn: teacherRepository.createTeacher,
  });

  return {
    createTeacher,
    error,
    state: {
      isError,
      isLoading,
      isSuccess,
    },
  };
};

export default useCreateTeacher;
