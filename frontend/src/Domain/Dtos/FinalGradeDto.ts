import EntityBase from '@/domain/EntityBase.ts';

interface FinalGradeDto extends EntityBase {
  value: number;
  classSubjectSemesterId: number;
  studentId: number;
}

export default FinalGradeDto;
