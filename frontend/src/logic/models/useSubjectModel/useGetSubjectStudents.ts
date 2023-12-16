import ISubjectRepository from '@/logic/interfaces/repositoires/ISubjectRepository.ts';
import { useQuery } from 'react-query';

const useGetSubjectStudents = (
  subjectId: number,
  subjectRepository: ISubjectRepository,
) => {
  const {
    data: students,
    refetch: execute,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['subjectStudents'],
    queryFn: () => subjectRepository.getStudents(subjectId),
  });

  return {
    students,
    execute,
    error,
    state: {
      isError,
      isLoading,
    },
  };
};

export default useGetSubjectStudents;
