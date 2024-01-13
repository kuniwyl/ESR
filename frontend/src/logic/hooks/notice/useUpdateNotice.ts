import repositoryContext from '@/logic/repositories/repositoryContext.ts';
import useErrorDispatcher from '@/logic/hooks/errors/ErrorDispatcher.ts';
import { useMutation, useQueryClient } from 'react-query';
import { AxiosError } from 'axios';

const useUpdateNotice = () => {
  const noticeRepository = repositoryContext.notice;
  const dispatchError = useErrorDispatcher();
  const quertClient = useQueryClient();
  const updateNotice = useMutation({
    mutationFn: noticeRepository.updateNotice,
    onSuccess: () => {
      quertClient.invalidateQueries('notice');
    },
    onError: error => {
      dispatchError.dispatchError(error as AxiosError);
    },
  });

  return updateNotice;
};

export default useUpdateNotice;
