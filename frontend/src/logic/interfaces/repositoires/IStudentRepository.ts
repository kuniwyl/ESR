import UserShortDto from '@/domain/dtos/UserShortDto.ts';
import RegisterDto from '@/domain/dtos/RegisterDto.ts';

interface IStudentRepository {
  getStudents(): Promise<UserShortDto[]>;
  getStudent(id: number): Promise<UserDto>;
  createStudent(studentData: RegisterDto): Promise<void>;
  updateStudent({
    id,
    studentData,
  }: {
    id: number;
    studentData: RegisterDto;
  }): Promise<void>;
  deleteStudent(id: number): Promise<void>;
}

export default IStudentRepository;
