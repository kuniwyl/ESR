import EntityBase from '@/domain/EntityBase.ts';
import CssInstanceDto from '@/domain/dtos/CssInstanceDto.ts';

interface ClassSubjectSemesterDto extends EntityBase {
  count: number;
  classId: number;
  subjectId: number;
  semesterId: number;

  teacherName?: string;
  subjectName?: string;
  className?: string;

  teacherId?: number;

  classSubjectSemesterInstances?: CssInstanceDto[];
}

export default ClassSubjectSemesterDto;
