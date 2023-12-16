import IParentRepository from '@/logic/interfaces/repositoires/IParentRepository.ts';
import { useQuery } from 'react-query';

const useGetParents = (parentRepository: IParentRepository) => {
  const {
    data: parents,
    refetch: execute,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useQuery({
    queryKey: 'parents',
    queryFn: parentRepository.getParents,
  });

  return {
    parents,
    execute,
    error,
    state: {
      isError,
      isLoading,
      isSuccess,
    },
  };
};

export default useGetParents;
