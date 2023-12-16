import IParentRepository from '@/logic/interfaces/repositoires/IParentRepository.ts';
import { useMutation } from 'react-query';

const useUpdateParent = (parentRepository: IParentRepository) => {
  const {
    mutate: updateParent,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useMutation({
    mutationKey: 'parent',
    mutationFn: parentRepository.updateParent,
  });

  return {
    updateParent,
    error,
    state: {
      isError,
      isLoading,
      isSuccess,
    },
  };
};

export default useUpdateParent;
