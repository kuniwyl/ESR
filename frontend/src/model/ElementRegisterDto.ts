import UserShortDto from '@/model/UserShortDto.ts';

interface ElementRegisterDto {
  name: string;
  description: string;
  teacher: UserShortDto;
}

export default ElementRegisterDto;
