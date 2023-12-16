import IClassRepository from '@/logic/interfaces/repositoires/IClassRepository.ts';
import { useMutation } from 'react-query';

const useDeleteClass = (classRepository: IClassRepository) => {
  const {
    mutate: deleteClass,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useMutation({
    mutationKey: 'class',
    mutationFn: classRepository.deleteClass,
  });

  return {
    deleteClass,
    error,
    state: {
      isError,
      isLoading,
      isSuccess,
    },
  };
};

export default useDeleteClass;
