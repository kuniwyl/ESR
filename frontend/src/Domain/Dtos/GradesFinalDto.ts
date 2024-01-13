import GradeDto from '@/domain/dtos/GradeDto.ts';
import FinalGradeDto from '@/domain/dtos/FinalGradeDto.ts';

interface GradesFinalDto {
  grades: GradeDto[];
  finalGrades: FinalGradeDto[];
}

export default GradesFinalDto;
