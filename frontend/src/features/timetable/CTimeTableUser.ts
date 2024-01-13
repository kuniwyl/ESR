import Days from '@/domain/Days.ts';
import { TimeTableCell } from '@/features/timetable/TimeTable.tsx';
import CssInstanceDto from '@/domain/dtos/CssInstanceDto.ts';
import SemesterDto from '@/domain/dtos/SemesterDto.ts';
import { authContext } from '@/context/auth';
import { useContext } from 'react';
import { UserRole } from '@/domain/UserRole.ts';
import NoticeDto from '@/domain/dtos/NoticeDto.ts';

const CTimeTableUser = (
  semester: SemesterDto | undefined,
  css: CssInstanceDto[] | undefined,
  noticeCss: NoticeDto[] | undefined,
) => {
  const { authState } = useContext(authContext);
  const lessonsTimes = () => {
    if (!semester) {
      return [];
    }
    const lessons: TimeTableCell[] = [];
    const [hours, minutes] = semester.lessonStart.split(':');
    const lessonStartTime: number =
      Number.parseInt(hours) * 60 + Number.parseInt(minutes);
    for (let i = 0; i < semester.dailyLessonCount; i++) {
      const start: number =
        lessonStartTime +
        i * semester.lessonDuration +
        i * semester.breakDuration;
      const end = start + semester.lessonDuration;

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

  const findSubjectName = (day: Days, slot: TimeTableCell) => {
    if (css) {
      const cssInstance = css.find(
        cssInstance => cssInstance.day === day && cssInstance.slot === slot.idx,
      );
      const cssNoticeInstance = noticeCss?.find(
        cssNoticeInstance =>
          new Date(cssNoticeInstance.date).getDay() - 1 === day &&
          cssNoticeInstance.slot === slot.idx,
      );

      if (cssNoticeInstance) {
        return cssNoticeInstance.title;
      } else if (cssInstance) {
        if (authState.role === UserRole.TEACHER) {
          return cssInstance.subjectName + ' - ' + cssInstance.className;
        } else if (
          authState.role === UserRole.STUDENT ||
          authState.role === UserRole.PARENT
        ) {
          return cssInstance.subjectName + ' - ' + cssInstance.teacherName;
        }
      }
    }
    return '';
  };
  const lessons = lessonsTimes();

  return {
    lessons,
    findSubjectName,
  };
};

export type CTimeTableUserType = ReturnType<typeof CTimeTableUser>;
export default CTimeTableUser;
