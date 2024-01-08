import EntityBase from '@/domain/EntityBase.ts';
import GradeDto from '@/domain/dtos/GradeDto.ts';

interface AssigmentDto extends EntityBase {
  name: string;
  description: string;
  classSubjectSemesterId: number;
  grades: GradeDto[];
}

export default AssigmentDto;
