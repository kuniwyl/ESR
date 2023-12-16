import UserShortDto from '@/domain/dtos/UserShortDto.ts';

interface SubjectDto {
  id: number;
  name: string;
  description: string;
  teacher: UserShortDto;
}

export default SubjectDto;
