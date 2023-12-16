import IClassRepository from '@/logic/interfaces/repositoires/IClassRepository.ts';
import { useMutation } from 'react-query';

const useDeleteStudentClass = (classRepository: IClassRepository) => {
  const {
    mutate: deleteStudentClass,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useMutation({
    mutationKey: 'class',
    mutationFn: classRepository.removeStudent,
  });

  return {
    deleteStudentClass,
    error,
    state: {
      isError,
      isLoading,
      isSuccess,
    },
  };
};

export default useDeleteStudentClass;
