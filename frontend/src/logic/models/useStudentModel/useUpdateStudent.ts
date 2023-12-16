import IStudentRepository from '@/logic/interfaces/repositoires/IStudentRepository.ts';
import { useMutation } from 'react-query';

const useUpdateStudent = (studentRepository: IStudentRepository) => {
  const {
    mutate: updateStudent,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useMutation({
    mutationKey: 'student',
    mutationFn: studentRepository.updateStudent,
  });

  return {
    updateStudent,
    error,
    state: {
      isError,
      isLoading,
      isSuccess,
    },
  };
};

export default useUpdateStudent;
