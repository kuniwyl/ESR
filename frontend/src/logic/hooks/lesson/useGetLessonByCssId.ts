import repositoryContext from '@/logic/repositories/repositoryContext.ts';
import useErrorDispatcher from '@/logic/hooks/errors/ErrorDispatcher.ts';
import { useQuery } from 'react-query';
import { AxiosError } from 'axios';

const useGetLessonByCssId = (cssId: number) => {
  const lessonRepository = repositoryContext.lesson;
  const errorDispatcher = useErrorDispatcher();
  const getLesson = useQuery({
    queryKey: ['lessons', cssId],
    queryFn: () => lessonRepository.getLessonsByCssId(cssId.toString()),
    onError: e => errorDispatcher.dispatchError(e as AxiosError),
  });

  return getLesson;
};

export default useGetLessonByCssId;
