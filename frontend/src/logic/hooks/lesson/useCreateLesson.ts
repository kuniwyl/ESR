import repositoryContext from '@/logic/repositories/repositoryContext.ts';
import useErrorDispatcher from '@/logic/hooks/errors/ErrorDispatcher.ts';
import { AxiosError } from 'axios';
import { useMutation, useQueryClient } from 'react-query';

const useCreateLesson = () => {
  const lessonRepository = repositoryContext.lesson;
  const queryClient = useQueryClient();
  const errorDispatcher = useErrorDispatcher();
  const createLesson = useMutation({
    mutationFn: lessonRepository.createLesson,
    onError: e => errorDispatcher.dispatchError(e as AxiosError),
    onSuccess: () => {
      queryClient.invalidateQueries('lessons');
    },
  });

  return createLesson;
};

export default useCreateLesson;
