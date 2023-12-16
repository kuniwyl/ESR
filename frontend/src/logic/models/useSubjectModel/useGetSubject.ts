import ISubjectRepository from '@/logic/interfaces/repositoires/ISubjectRepository.ts';
import { useQuery } from 'react-query';

const useGetSubject = (id: number, subjectRepository: ISubjectRepository) => {
  const {
    data: subject,
    refetch: execute,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useQuery({
    queryKey: ['subjects', id],
    queryFn: () => subjectRepository.getSubject(id),
  });

  return {
    subject,
    execute,
    error,
    state: {
      isError,
      isLoading,
      isSuccess,
    },
  };
};

export default useGetSubject;
