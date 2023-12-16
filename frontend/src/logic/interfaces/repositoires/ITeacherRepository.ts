import UserShortDto from '@/domain/dtos/UserShortDto.ts';
import RegisterDto from '@/domain/dtos/RegisterDto.ts';

interface ITeacherRepository {
  getTeachers(): Promise<UserShortDto[]>;
  getTeacher(id: number): Promise<UserDto>;
  createTeacher(teacherData: RegisterDto): Promise<void>;
  updateTeacher({
    id,
    teacherData,
  }: {
    id: number;
    teacherData: RegisterDto;
  }): Promise<void>;
  deleteTeacher(id: number): Promise<void>;
}

export default ITeacherRepository;
