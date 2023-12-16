import UserShortDto from '@/domain/dtos/UserShortDto.ts';

interface ClassDto {
  id: number;
  name: string;
  description: string;
  teacher: UserShortDto;
}

export default ClassDto;
