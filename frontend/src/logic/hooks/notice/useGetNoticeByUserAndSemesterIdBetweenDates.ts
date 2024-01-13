import repositoryContext from '@/logic/repositories/repositoryContext.ts';
import useErrorDispatcher from '@/logic/hooks/errors/ErrorDispatcher.ts';
import { useQuery } from 'react-query';
import { AxiosError } from 'axios';

const useGetNoticeByUserAndSemesterIdBetweenDates = (
  semesterId: string,
  startDate: string,
  endDate: string,
) => {
  const noticeRepository = repositoryContext.notice;
  const dispatchError = useErrorDispatcher();
  const getNotice = useQuery({
    queryKey: ['notice', semesterId, startDate, endDate],
    queryFn: () =>
      noticeRepository.getNoticeByUserAndSemesterIdBetweenDates(
        semesterId,
        startDate,
        endDate,
      ),
    onError: error => {
      dispatchError.dispatchError(error as AxiosError);
    },
  });

  return getNotice;
};

export default useGetNoticeByUserAndSemesterIdBetweenDates;
