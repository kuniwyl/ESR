import UserShortDto from '@/model/UserShortDto.ts';

interface SubjectDto {
  id: string;
  name: string;
  description: string;
  teacher: UserShortDto;
}

export default SubjectDto;
