import ISubjectRepository from '@/logic/interfaces/repositoires/ISubjectRepository.ts';
import { useMutation } from 'react-query';

const useCreateSubject = (subjectRepository: ISubjectRepository) => {
  const {
    mutate: createSubject,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useMutation({
    mutationKey: 'subjects',
    mutationFn: subjectRepository.createSubject,
  });

  return {
    createSubject,
    error,
    state: {
      isError,
      isLoading,
      isSuccess,
    },
  };
};

export default useCreateSubject;
