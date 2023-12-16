import ISubjectRepository from '@/logic/interfaces/repositoires/ISubjectRepository.ts';
import { useMutation } from 'react-query';

const useUpdateSubject = (subjectRepository: ISubjectRepository) => {
  const {
    mutate: updateSubject,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useMutation({
    mutationKey: 'subjects',
    mutationFn: subjectRepository.updateSubject,
  });

  return {
    updateSubject,
    error,
    state: {
      isError,
      isLoading,
      isSuccess,
    },
  };
};

export default useUpdateSubject;
