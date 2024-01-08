import React, { useContext } from 'react';
import { semesterContext } from '@/context/semesterChoose.tsx';
import Days from '@/domain/Days.ts';
import { TimeTableCell } from '@/features/timetable/TimeTable.tsx';
import CssInstanceDto from '@/domain/dtos/CssInstanceDto.ts';

const CTimeTableTime = (
  css: CssInstanceDto[] | undefined,
  teacherCss: CssInstanceDto[] | undefined,
  classId: string,
  onClickLeft: (day: Days, cell: TimeTableCell) => void,
  onClickRight: (id: number) => void,
) => {
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
  const lessons = lessonsTimes();

  const handleCellClick = (
    e: React.MouseEvent<HTMLTableDataCellElement>,
    day: Days,
    cell: TimeTableCell,
  ) => {
    e.preventDefault();

    const c = css && css.find(x => x.slot === cell.idx && x.day === day);
    const tc =
      teacherCss &&
      teacherCss.find(
        x => x.slot === cell.idx && x.day === day && x.className !== classId,
      );

    if (e.button === 0) {
      if (c) return;
      if (tc) return;
      onClickLeft(day, cell);
    } else if (e.button === 2) {
      if (tc) return;
      const id = css?.find(x => x.slot === cell.idx && x.day === day)?.id;
      if (id) onClickRight(id);
    }
  };

  const findSubjectName = (day: Days, slot: TimeTableCell) => {
    const c = css && css.find(x => x.slot === slot.idx && x.day === day);
    const tc =
      teacherCss &&
      teacherCss.find(
        x => x.slot === slot.idx && x.day === day && x.className !== classId,
      );
    if (tc)
      return (
        <span style={{ color: 'red' }}>
          {tc?.subjectName + ' - ' + tc?.teacherName + ' - ' + tc?.className}
        </span>
      );
    if (c) return <span>{c?.subjectName + ' - ' + c?.teacherName}</span>;
    return '';
  };

  return {
    lessons,
    handleCellClick,
    findSubjectName,
  };
};

export type CTimeTableTimeType = ReturnType<typeof CTimeTableTime>;
export default CTimeTableTime;
