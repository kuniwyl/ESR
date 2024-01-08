import EntityBase from '@/domain/EntityBase.ts';

interface SemesterDto extends EntityBase {
  name: string;
  startDate: Date;
  endDate: Date;
  dailyLessonCount: number;
  lessonDuration: number;
  breakDuration: number;
  lessonStart: string; //  00:00:00
  schoolId: number;
}

export default SemesterDto;
