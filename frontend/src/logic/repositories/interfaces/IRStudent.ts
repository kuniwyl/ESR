import StudentDto from '@/domain/dtos/StudentDto.ts';
import ServiceResponse from '@/domain/ServiceResponse.ts';
import CreateStudentDto from '@/domain/dtos/CreateStudentDto.ts';
import UserSubjects from '@/domain/dtos/UserSubjects.ts';

interface IRStudent {
  getStudentsFromClass(classId: number): Promise<ServiceResponse<StudentDto[]>>;
  getSubjectsFromStudent(): Promise<ServiceResponse<UserSubjects>>;
  getStudent(studentId: number): Promise<ServiceResponse<StudentDto>>;
  createStudent(
    student: CreateStudentDto,
  ): Promise<ServiceResponse<StudentDto>>;
  updateStudent(student: StudentDto): Promise<ServiceResponse<StudentDto>>;
  deleteStudent(studentId: number): Promise<ServiceResponse<boolean>>;
}

export default IRStudent;
