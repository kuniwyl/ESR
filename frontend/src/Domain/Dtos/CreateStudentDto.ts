import StudentDto from '@/domain/dtos/StudentDto.ts';
import CreateParentDto from '@/domain/dtos/CreateParentDto.ts';

interface CreateStudentDto extends StudentDto {
  parent: CreateParentDto;
  password: string;
}

export default CreateStudentDto;
