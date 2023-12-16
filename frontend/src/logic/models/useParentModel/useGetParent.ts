import IParentRepository from '@/logic/interfaces/repositoires/IParentRepository.ts';
import { useQuery } from 'react-query';

const useGetParent = (id: number, parentRepository: IParentRepository) => {
  const {
    data: parent,
    refetch: execute,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useQuery({
    queryKey: ['parent', id],
    queryFn: () => parentRepository.getParent(id),
  });

  return {
    parent,
    execute,
    error,
    state: {
      isError,
      isLoading,
      isSuccess,
    },
  };
};

export default useGetParent;
