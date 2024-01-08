import { useQuery } from 'react-query';
import repositoryContext from '@/logic/repositories/repositoryContext.ts';
import useErrorDispatcher from '@/logic/hooks/errors/ErrorDispatcher.ts';
import { AxiosError } from 'axios';

const useGetTeacher = (id: number) => {
  const teacherRepository = repositoryContext.teacher;
  const dispathError = useErrorDispatcher();
  const teacher = useQuery(
    ['teacher', id],
    () => teacherRepository.getTeacher(id),
    {
      enabled: id !== 0,
      onError: error => {
        dispathError.dispatchError(error as AxiosError);
      },
    },
  );
  return teacher;
};

export default useGetTeacher;
