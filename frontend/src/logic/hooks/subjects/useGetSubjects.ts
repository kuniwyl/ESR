import repositoryContext from '@/logic/repositories/repositoryContext.ts';
import { useQuery } from 'react-query';
import SelectList from '@/logic/hooks/SelectList.ts';
import useErrorDispatcher from '@/logic/hooks/errors/ErrorDispatcher.ts';
import { AxiosError } from 'axios';

const useGetSubjects = () => {
  const subjectRepository = repositoryContext.subject;
  const dispathError = useErrorDispatcher();
  const getSubjects = useQuery(
    ['subjects'],
    () => subjectRepository.getSubjectsBySchool(),
    {
      onError: error => {
        dispathError.dispatchError(error as AxiosError);
      },
    },
  );

  const getSubjectsNamesList: SelectList[] | undefined =
    getSubjects.data?.data?.map(subject => {
      return {
        id: subject.id,
        option: subject.name + ' ' + subject.teacherName,
      } as SelectList;
    });

  return { getSubjects, getSubjectsNamesList };
};

export type TGetSubjects = ReturnType<typeof useGetSubjects>;
export default useGetSubjects;
