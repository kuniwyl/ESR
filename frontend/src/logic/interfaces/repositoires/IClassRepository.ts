import ClassDto from '@/domain/dtos/ClassDto.ts';
import UserShortDto from '@/domain/dtos/UserShortDto.ts';

interface IClassRepository {
  getClasses(): Promise<ClassDto[]>;
  getClass(id: number): Promise<ClassDto>;
  createClass(classData: ClassDto): Promise<void>;
  updateClass({
    id,
    classData,
  }: {
    id: number;
    classData: ClassDto;
  }): Promise<void>;
  deleteClass(id: number): Promise<void>;

  getStudents(id: number): Promise<UserShortDto[]>;
  addStudent({
    id,
    studentId,
  }: {
    id: number;
    studentId: number;
  }): Promise<void>;
  removeStudent({
    id,
    studentId,
  }: {
    id: number;
    studentId: number;
  }): Promise<void>;
}

export default IClassRepository;
