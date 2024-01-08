import EntityBase from '@/domain/EntityBase.ts';

interface ClassDto extends EntityBase {
  name: string;
  description: string;
  teacherName?: string;
  nameId: string;
  schoolId: number;
  teacherId: number;
}

export default ClassDto;
