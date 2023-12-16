import ISubjectRepository from '@/logic/interfaces/repositoires/ISubjectRepository.ts';
import { useMutation } from 'react-query';

const useDeleteSubject = (subjectRepository: ISubjectRepository) => {
  const {
    mutate: deleteSubject,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useMutation({
    mutationKey: 'subjects',
    mutationFn: subjectRepository.deleteSubject,
  });

  return {
    deleteSubject,
    error,
    state: {
      isError,
      isLoading,
      isSuccess,
    },
  };
};

export default useDeleteSubject;
