import repositoryContext from '@/logic/repositories/repositoryContext.ts';
import { useQuery } from 'react-query';
import SelectList from '@/logic/hooks/SelectList.ts';
import useErrorDispatcher from '@/logic/hooks/errors/ErrorDispatcher.ts';
import { AxiosError } from 'axios';

const useGetTeachers = (schoolId: number) => {
  const teacherRepository = repositoryContext.teacher;
  const dispathError = useErrorDispatcher();
  const getTeachers = useQuery(
    ['teachers'],
    () => teacherRepository.getTeachersForSchool(),
    {
      enabled: schoolId !== 0,
      onError: error => {
        dispathError.dispatchError(error as AxiosError);
      },
    },
  );
  const getTeachersNamesList = getTeachers.data?.data.map(teacher => {
    return {
      option: teacher.firstName + ' ' + teacher.lastName,
      id: teacher.id,
    } as SelectList;
  });

  return { getTeachers, getTeachersNamesList };
};

export default useGetTeachers;
