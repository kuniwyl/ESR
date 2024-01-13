import ServiceResponse from '@/domain/ServiceResponse.ts';
import GradeDto from '@/domain/dtos/GradeDto.ts';
import GradesFinalDto from '@/domain/dtos/GradesFinalDto.ts';

interface IRGrade {
  getGradeByCssId(cssId: string): Promise<ServiceResponse<GradesFinalDto>>;
  createGrade(grade: GradeDto): Promise<ServiceResponse<GradeDto>>;
  updateGrade(grade: GradeDto): Promise<ServiceResponse<GradeDto>>;
  deleteGrade(gradeId: string): Promise<ServiceResponse<GradeDto>>;
}

export default IRGrade;
