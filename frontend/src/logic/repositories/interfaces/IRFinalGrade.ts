import FinalGradeDto from '@/domain/dtos/FinalGradeDto.ts';
import ServiceResponse from '@/domain/ServiceResponse.ts';

interface IRFinalGrade {
  createFinalGrade(
    finalGrade: FinalGradeDto,
  ): Promise<ServiceResponse<FinalGradeDto>>;

  updateFinalGrade(
    finalGrade: FinalGradeDto,
  ): Promise<ServiceResponse<FinalGradeDto>>;

  deleteFinalGrade(
    finalGradeId: string,
  ): Promise<ServiceResponse<FinalGradeDto>>;
}

export default IRFinalGrade;
