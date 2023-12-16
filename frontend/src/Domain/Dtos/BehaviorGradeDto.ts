import EntityBase from '@/domain/EntityBase.ts';

interface BehaviorGradeDto extends EntityBase {
  value: number;
  student: StudentDto;
  teacher: TeacherDto;
}

export default BehaviorGradeDto;
