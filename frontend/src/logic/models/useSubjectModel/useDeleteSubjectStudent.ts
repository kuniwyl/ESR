import ISubjectRepository from '@/logic/interfaces/repositoires/ISubjectRepository.ts';
import { useMutation } from 'react-query';

const useDeleteSubjectStudent = (subjectRepository: ISubjectRepository) => {
  const {
    mutate: deleteSubjectStudent,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useMutation({
    mutationKey: 'subjects',
    mutationFn: subjectRepository.removeStudent,
  });

  return {
    deleteSubjectStudent,
    error,
    state: {
      isError,
      isLoading,
      isSuccess,
    },
  };
};

export default useDeleteSubjectStudent;
