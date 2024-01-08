import EntityBase from '@/domain/EntityBase.ts';

interface CssInstanceDto extends EntityBase {
  day: Day;
  slot: number;
  classSubjectSemesterId: number;
  subjectName?: string;
  teacherName?: string;
  className?: string;
}

export default CssInstanceDto;
