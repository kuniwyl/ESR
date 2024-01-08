import EntityBase from '@/domain/EntityBase.ts';
import StudentDto from '@/domain/dtos/StudentDto.ts';
import TeacherDto from '@/domain/dtos/TeacherDto.ts';

interface BehaviorGradeDto extends EntityBase {
  value: number;
  student: StudentDto;
  teacher: TeacherDto;
}

export default BehaviorGradeDto;
