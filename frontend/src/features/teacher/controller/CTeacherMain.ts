import { authContext } from '@/context/auth';
import { useContext, useEffect, useState } from 'react';
import useGetCssFromUser from '@/logic/hooks/css/useGetCssFromUser.ts';
import CTimeTableUser from '@/features/timetable/CTimeTableUser.ts';
import useGetCssInstancesByUser from '@/logic/hooks/cssInstance/useGetCssInstancesByUser.ts';
import { semesterContext } from '@/context/semesterChoose.tsx';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/configuration/config.ts';
import useGetWeekByDay from '@/features/timetable/useGetWeekByDay.ts';
import useGetNoticeBySemesterBetweenDates from '@/logic/hooks/notice/useGetNoticeBySemesterBetweenDates.ts';
import useGetNoticeByUserAndSemesterIdBetweenDates from '@/logic/hooks/notice/useGetNoticeByUserAndSemesterIdBetweenDates.ts';

const CTeacherMain = () => {
  const { authState } = useContext(authContext);
  const navigate = useNavigate();
  const semester = useContext(semesterContext);
  const css = useGetCssFromUser();

  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const weekSelected = useGetWeekByDay(selectedDate);
  const handleWeekChange = (upOrDown: number) => {
    const newDate = new Date(selectedDate);
    newDate.setDate(selectedDate.getDate() + upOrDown * 7);
    setSelectedDate(newDate);
  };
  const cssNoticeInstances = useGetNoticeByUserAndSemesterIdBetweenDates(
    semester.semester?.id ?? 0,
    weekSelected[0],
    weekSelected[1],
  );
  useEffect(() => {
    cssNoticeInstances.refetch();
  }, [selectedDate]);

  useEffect(() => {
    if (!semester.semester?.id) {
      semester.getSemester();
    }
  }, []);

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

  const navigateToGrades = (cssId: number) => {
    navigate(ROUTES.TEACHER_SUBJECTS_GRADES(cssId.toString()));
  };

  const navigateToFrequencies = (cssId: number) => {
    navigate(ROUTES.TEACHER_SUBJECTS_FREQUENCIES(cssId.toString()));
  };

  return {
    semester,
    css,
    timeTable,

    navigateToGrades,
    navigateToFrequencies,

    weekSelected,
    handleWeekChange,
  };
};

export default CTeacherMain;
