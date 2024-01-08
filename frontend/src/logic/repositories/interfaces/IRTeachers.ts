import ServiceResponse from '@/domain/ServiceResponse.ts';
import TeacherDto from '@/domain/dtos/TeacherDto.ts';
import CreateUserDto from '@/domain/dtos/CreateUserDto.ts';

interface IRTeachers {
  getTeachersForSchool(): Promise<ServiceResponse<TeacherDto[]>>;
  getTeacher(id: number): Promise<ServiceResponse<TeacherDto>>;
  createTeacher(teacher: CreateUserDto): Promise<ServiceResponse<TeacherDto>>;
  updateTeacher(teacher: TeacherDto): Promise<ServiceResponse<TeacherDto>>;
  deleteTeacher(id: number): Promise<ServiceResponse<boolean>>;
}

export default IRTeachers;
