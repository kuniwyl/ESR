import FinalGradeDto from '@/domain/dtos/FinalGradeDto.ts';
import GradeDto from '@/domain/dtos/GradeDto.ts';
import PresenceDto from '@/domain/dtos/PresenceDto.ts';
import ClassSubjectSemesterDto from '@/domain/dtos/ClassSubjectSemesterDto.ts';

interface UserSubjects {
  classSubjectSemesters: ClassSubjectSemesterDto[];
  finalGrades: FinalGradeDto[];
  grades: GradeDto[];
  presences: PresenceDto[];
}

export default UserSubjects;
