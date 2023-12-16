import IParentRepository from '@/logic/interfaces/repositoires/IParentRepository.ts';
import { useMutation } from 'react-query';

const useCreateParent = (parentRepository: IParentRepository) => {
  const {
    mutate: createParent,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useMutation({
    mutationKey: 'parent',
    mutationFn: parentRepository.createParent,
  });

  return {
    createParent,
    error,
    state: {
      isError,
      isLoading,
      isSuccess,
    },
  };
};

export default useCreateParent;
