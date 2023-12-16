import ISubjectRepository from '@/logic/interfaces/repositoires/ISubjectRepository.ts';
import { useQuery } from 'react-query';

const useGetSubjects = (subjectRepository: ISubjectRepository) => {
  const {
    data: subjects,
    refetch: execute,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: 'subjects',
    queryFn: subjectRepository.getSubjects,
  });

  return {
    subjects,
    execute,
    error,
    state: {
      isError,
      isLoading,
    },
  };
};

export default useGetSubjects;
