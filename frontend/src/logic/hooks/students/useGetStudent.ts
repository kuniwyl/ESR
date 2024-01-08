import repositoryContext from '@/logic/repositories/repositoryContext.ts';
import { useQuery } from 'react-query';
import useErrorDispatcher from '@/logic/hooks/errors/ErrorDispatcher.ts';
import { AxiosError } from 'axios';

const useGetStudent = (id: number) => {
  const studentRepository = repositoryContext.student;
  const dispathError = useErrorDispatcher();
  const student = useQuery(
    ['student', id],
    () => studentRepository.getStudent(id),
    {
      enabled: id !== 0,
      onError: error => {
        dispathError.dispatchError(error as AxiosError);
      },
    },
  );

  return student;
};

export default useGetStudent;
