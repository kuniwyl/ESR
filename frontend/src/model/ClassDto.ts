import UserShortDto from '@/model/UserShortDto.ts';

interface ClassDto {
  id: string;
  name: string;
  description: string;
  teacher: UserShortDto;
}

export default ClassDto;
