import repositoryContext from '@/logic/repositories/repositoryContext.ts';
import { useQuery } from 'react-query';
import useErrorDispatcher from '@/logic/hooks/errors/ErrorDispatcher.ts';
import { AxiosError } from 'axios';

const useGetStudents = (classId: number) => {
  const studentRepository = repositoryContext.student;
  const dispathError = useErrorDispatcher();
  const getStudents = useQuery(
    ['students'],
    () => studentRepository.getStudentsFromClass(classId),
    {
      enabled: !!classId,
      onError: error => {
        dispathError.dispatchError(error as AxiosError);
      },
    },
  );

  return getStudents;
};

export type TGetStudents = ReturnType<typeof useGetStudents>;
export default useGetStudents;
