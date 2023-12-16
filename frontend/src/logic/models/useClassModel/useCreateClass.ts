import IClassRepository from '@/logic/interfaces/repositoires/IClassRepository.ts';
import { useMutation } from 'react-query';

const useCreateClass = (classRepository: IClassRepository) => {
  const {
    mutate: createClass,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useMutation({
    mutationKey: 'class',
    mutationFn: classRepository.createClass,
  });

  return {
    createClass,
    error,
    state: {
      isError,
      isLoading,
      isSuccess,
    },
  };
};

export default useCreateClass;
