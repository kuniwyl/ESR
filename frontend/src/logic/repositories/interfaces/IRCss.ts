import ServiceResponse from '@/domain/ServiceResponse.ts';
import ClassSubjectSemesterDto from '@/domain/dtos/ClassSubjectSemesterDto.ts';

interface IRCss {
  getCssFromUser(): Promise<ServiceResponse<ClassSubjectSemesterDto[]>>;
  getCssByClassAndSemesterId(
    classId: number,
    semesterId: number,
  ): Promise<ServiceResponse<ClassSubjectSemesterDto[]>>;
  getCssByTeacherAndSemesterId(
    teacherId: number,
    semesterId: number,
  ): Promise<ServiceResponse<ClassSubjectSemesterDto[]>>;
  getCssById(
    classSubjectSemesterId: number,
  ): Promise<ServiceResponse<ClassSubjectSemesterDto>>;
  createCss(
    ClassSubjectSemesterDto: ClassSubjectSemesterDto,
  ): Promise<ServiceResponse<ClassSubjectSemesterDto>>;
  updateCss(
    ClassSubjectSemesterDto: ClassSubjectSemesterDto,
  ): Promise<ServiceResponse<ClassSubjectSemesterDto>>;
  deleteCss(
    classSubjectSemesterId: number,
  ): Promise<ServiceResponse<ClassSubjectSemesterDto>>;
}

export default IRCss;
