import IClassRepository from '@/logic/interfaces/repositoires/IClassRepository.ts';
import { useMutation } from 'react-query';

const useUpdateClass = (classRepository: IClassRepository) => {
  const {
    mutate: updateClass,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useMutation({
    mutationKey: 'class',
    mutationFn: classRepository.updateClass,
  });

  return {
    updateClass,
    error,
    state: {
      isError,
      isLoading,
      isSuccess,
    },
  };
};

export default useUpdateClass;
