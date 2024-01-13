import { useContext, useEffect } from 'react';
import { semesterContext } from '@/context/semesterChoose.tsx';
import useGetNoticeBySemester from '@/logic/hooks/notice/useGetNoticeBySemester.ts';
import useLessonseTimes from '@/features/timetable/useLessonseTimes.ts';

const CStudNotification = () => {
  const semester = useContext(semesterContext);
  useEffect(() => {
    if (!semester.semester?.id) {
      semester.getSemester();
    }
  }, []);
  const timetable = useLessonseTimes();
  const table = timetable.lessonsTimes() ?? [];
  const notices = useGetNoticeBySemester(semester.semester?.id ?? 0);

  console.log(notices);
  return {
    notices,
    table,
  };
};

export default CStudNotification;
