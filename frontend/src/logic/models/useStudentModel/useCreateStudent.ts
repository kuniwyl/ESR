import IStudentRepository from '@/logic/interfaces/repositoires/IStudentRepository.ts';
import { useMutation } from 'react-query';

const useCreateStudent = (studentRepository: IStudentRepository) => {
  const {
    mutate: createStudent,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useMutation({
    mutationKey: 'student',
    mutationFn: studentRepository.createStudent,
  });

  return {
    createStudent,
    error,
    state: {
      isError,
      isLoading,
      isSuccess,
    },
  };
};

export default useCreateStudent;
