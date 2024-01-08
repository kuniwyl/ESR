import ParentDto from '@/domain/dtos/ParentDto.ts';

interface CreateParentDto extends ParentDto {
  password: string;
}

export default CreateParentDto;
