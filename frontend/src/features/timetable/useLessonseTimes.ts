import { TimeTableCell } from '@/features/timetable/TimeTable.tsx';
import { semesterContext } from '@/context/semesterChoose.tsx';
import { useContext } from 'react';

const useLessonseTimes = () => {
  const semester = useContext(semesterContext);

  const lessonsTimes = () => {
    if (semester.semester === undefined) return;
    const lessons: TimeTableCell[] = [];
    const [hours, minutes] = semester.semester.lessonStart.split(':');
    const lessonStartTime: number =
      Number.parseInt(hours) * 60 + Number.parseInt(minutes);
    for (let i = 0; i < semester.semester.dailyLessonCount; i++) {
      const start: number =
        lessonStartTime +
        i * semester.semester.lessonDuration +
        i * semester.semester.breakDuration;
      const end = start + semester.semester.lessonDuration;

      const startHours = Math.floor(start / 60);
      const startMinutes = start % 60;

      const endHours = Math.floor(end / 60);
      const endMinutes = end % 60;

      lessons.push({
        idx: i,
        start: `${startHours.toString().padStart(2, '0')}:${startMinutes
          .toString()
          .padStart(2, '0')}`,
        end: `${endHours.toString().padStart(2, '0')}:${endMinutes
          .toString()
          .padStart(2, '0')}`,
      });
    }
    return lessons;
  };

  return {
    lessonsTimes,
  };
};

export default useLessonseTimes;
