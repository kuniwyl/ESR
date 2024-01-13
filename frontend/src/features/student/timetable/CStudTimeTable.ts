import { useContext, useEffect, useState } from 'react';
import { authContext } from '@/context/auth';
import { semesterContext } from '@/context/semesterChoose.tsx';
import useGetCssFromUser from '@/logic/hooks/css/useGetCssFromUser.ts';
import useGetWeekByDay from '@/features/timetable/useGetWeekByDay.ts';
import useGetCssInstancesByUser from '@/logic/hooks/cssInstance/useGetCssInstancesByUser.ts';
import CTimeTableUser from '@/features/timetable/CTimeTableUser.ts';
import useGetNoticesByUserAndSemester from '@/logic/hooks/notice/useGetNoticesByUserAndSemester.ts';

const CStudTimeTable = () => {
  const { authState } = useContext(authContext);
  const semester = useContext(semesterContext);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const weekSelected = useGetWeekByDay(selectedDate);
  const handleWeekChange = (upOrDown: number) => {
    const newDate = new Date(selectedDate);
    newDate.setDate(selectedDate.getDate() + upOrDown * 7);
    setSelectedDate(newDate);
  };

  const css = useGetCssFromUser();
  const cssNoticeInstances = useGetNoticesByUserAndSemester(
    semester.semester?.id ?? 0,
  );

  useEffect(() => {
    if (!semester.semester?.id) {
      semester.getSemester();
    }
  }, []);

  useEffect(() => {
    cssNoticeInstances.refetch();
  }, [selectedDate]);

  const cssInstances = useGetCssInstancesByUser();
  const timeTable = CTimeTableUser(
    semester.semester,
    cssInstances.data?.data,
    cssNoticeInstances.data?.data,
  );

  useEffect(() => {
    if (authState.userId && semester.semester?.id) {
      css.refetch();
    }
  }, [authState.userId, semester.semester?.id]);

  return {
    timeTable,
    css,
    weekSelected,
    handleWeekChange,
    selectedDate,
  };
};

export default CStudTimeTable;
