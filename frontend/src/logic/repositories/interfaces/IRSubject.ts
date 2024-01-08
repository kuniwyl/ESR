import SubjectDto from '@/domain/dtos/SubjectDto.ts';
import ServiceResponse from '@/domain/ServiceResponse.ts';

interface IRSubject {
  getSubjectsBySchool(): Promise<ServiceResponse<SubjectDto[]>>;
  getSubject(subjectId: number): Promise<ServiceResponse<SubjectDto>>;
  createSubject(subject: SubjectDto): Promise<ServiceResponse<SubjectDto>>;
  updateSubject(
    subjectId: number,
    subject: SubjectDto,
  ): Promise<ServiceResponse<SubjectDto>>;
  deleteSubject(subjectId: number): Promise<ServiceResponse<boolean>>;
}

export default IRSubject;
