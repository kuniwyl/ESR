import repositoryContext from '@/logic/repositories/repositoryContext.ts';
import { useMutation, useQueryClient } from 'react-query';
import useErrorDispatcher from '@/logic/hooks/errors/ErrorDispatcher.ts';
import { AxiosError } from 'axios';

const useEditLesson = () => {
  const lessonRepository = repositoryContext.lesson;
  const queryClient = useQueryClient();
  const errorDispatcher = useErrorDispatcher();
  const editLesson = useMutation({
    mutationFn: lessonRepository.updateLesson,
    onError: e => errorDispatcher.dispatchError(e as AxiosError),
    onSuccess: () => {
      queryClient.invalidateQueries('lessons');
    },
  });

  return editLesson;
};

export default useEditLesson;
