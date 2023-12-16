import ISubjectRepository from '@/logic/interfaces/repositoires/ISubjectRepository.ts';
import { useMutation } from 'react-query';

const useAddSubjectStudent = (subjectRepository: ISubjectRepository) => {
  const {
    mutate: addSubjectStudent,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useMutation({
    mutationKey: 'subjects',
    mutationFn: subjectRepository.addStudent,
  });

  return {
    addSubjectStudent,
    error,
    state: {
      isError,
      isLoading,
      isSuccess,
    },
  };
};

export default useAddSubjectStudent;
