import IStudentRepository from '@/logic/interfaces/repositoires/IStudentRepository.ts';
import { useMutation } from 'react-query';

const useDeleteStudent = (studentRepository: IStudentRepository) => {
  const {
    mutate: deleteStudent,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useMutation({
    mutationKey: 'student',
    mutationFn: studentRepository.deleteStudent,
  });

  return {
    deleteStudent,
    error,
    state: {
      isError,
      isLoading,
      isSuccess,
    },
  };
};

export default useDeleteStudent;
