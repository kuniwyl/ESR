import EntityBase from '@/domain/EntityBase.ts';

interface SubjectDto extends EntityBase {
  name: string;
  description: string;
  semesterId: number;
  day: number;
  slot: number;
  teacherId: number;
  classId: number;
}

export default SubjectDto;
