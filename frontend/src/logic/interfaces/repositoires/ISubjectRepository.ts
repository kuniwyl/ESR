import SubjectDto from '@/domain/dtos/SubjectDto.ts';
import UserShortDto from '@/domain/dtos/UserShortDto.ts';

interface ISubjectRepository {
  getSubjects(): Promise<SubjectDto[]>;
  getSubject(id: number): Promise<SubjectDto>;
  createSubject(subjectData: SubjectDto): Promise<void>;
  updateSubject({
    id,
    subjectData,
  }: {
    id: number;
    subjectData: SubjectDto;
  }): Promise<void>;
  deleteSubject(id: number): Promise<void>;

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

export default ISubjectRepository;
