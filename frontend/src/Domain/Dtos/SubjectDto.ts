import EntityBase from '@/domain/EntityBase.ts';

interface SubjectDto extends EntityBase {
  name: string;
  description: string;
  teacherName?: string;
  teacherId: number;
  schoolId: number;
}

export default SubjectDto;
