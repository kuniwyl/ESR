import repositoryContext from '@/logic/repositories/repositoryContext.ts';
import useErrorDispatcher from '@/logic/hooks/errors/ErrorDispatcher.ts';
import { AxiosError } from 'axios';
import { useQuery } from 'react-query';

const useGetNoticeBySemesterBetweenDates = (
  semesterId: number,
  startDate: Date,
  endDate: Date,
) => {
  const noticeRepository = repositoryContext.notice;
  const dispatchError = useErrorDispatcher();

  const startDateOnDayStart = new Date(startDate);
  startDateOnDayStart.setHours(1, 0, 0, 0);
  const endDateOnDayEnd = new Date(endDate);
  endDateOnDayEnd.setHours(24, 59, 59, 999);

  const getNotice = useQuery({
    queryKey: ['notice', semesterId],
    queryFn: () =>
      noticeRepository.getNoticeBySemseterIdBetweenDates(
        semesterId,
        startDateOnDayStart.toISOString(),
        endDateOnDayEnd.toISOString(),
      ),
    onError: error => {
      dispatchError.dispatchError(error as AxiosError);
    },
  });

  return getNotice;
};

export default useGetNoticeBySemesterBetweenDates;
