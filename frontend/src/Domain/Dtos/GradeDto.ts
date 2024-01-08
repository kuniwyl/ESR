import EntityBase from '@/domain/EntityBase.ts';

interface GradeDto extends EntityBase {
  value: number;
  weight: number;
  description: string;
  assigmentId: number;
  studentId: number;
  studentName?: string;
}

export default GradeDto;
