import ServiceResponse from '@/domain/ServiceResponse.ts';
import SemesterDto from '@/domain/dtos/SemesterDto.ts';

interface IRSemester {
  getSemesterCurrent(): Promise<ServiceResponse<SemesterDto>>;
  getSemesters(): Promise<ServiceResponse<SemesterDto[]>>;
  getSemester(semesterId: number): Promise<ServiceResponse<SemesterDto>>;
  createSemester(semester: SemesterDto): Promise<ServiceResponse<SemesterDto>>;
  updateSemester(semester: SemesterDto): Promise<ServiceResponse<SemesterDto>>;
  deleteSemester(semesterId: number): Promise<ServiceResponse<SemesterDto>>;
}

export default IRSemester;
