import IParentRepository from '@/logic/interfaces/repositoires/IParentRepository.ts';
import { useMutation } from 'react-query';

const useDeleteParent = (parentRepository: IParentRepository) => {
  const {
    mutate: deleteParent,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useMutation({
    mutationKey: 'parent',
    mutationFn: parentRepository.deleteParent,
  });

  return {
    deleteParent,
    error,
    state: {
      isError,
      isLoading,
      isSuccess,
    },
  };
};

export default useDeleteParent;
