import repositoryContext from '@/logic/repositories/repositoryContext.ts';
import useErrorDispatcher from '@/logic/hooks/errors/ErrorDispatcher.ts';
import { useQuery } from 'react-query';
import { AxiosError } from 'axios';

const useGetNoticeBySemester = (semesterId: number) => {
  const noticeRepository = repositoryContext.notice;
  const dispatchError = useErrorDispatcher();
  const getNotice = useQuery({
    queryKey: ['notice', semesterId],
    queryFn: () => noticeRepository.getNoticeBySemesterId(semesterId),
    onError: error => {
      dispatchError.dispatchError(error as AxiosError);
    },
  });

  return getNotice;
};

export default useGetNoticeBySemester;
