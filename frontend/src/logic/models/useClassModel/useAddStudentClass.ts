import IClassRepository from '@/logic/interfaces/repositoires/IClassRepository.ts';
import { useMutation } from 'react-query';

const useAddStudentClass = (classRepository: IClassRepository) => {
  const {
    mutate: addStudentClass,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useMutation({
    mutationKey: 'class',
    mutationFn: classRepository.addStudent,
  });

  return {
    addStudentClass,
    error,
    state: {
      isError,
      isLoading,
      isSuccess,
    },
  };
};

export default useAddStudentClass;
