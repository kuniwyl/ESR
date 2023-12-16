import UserShortDto from '@/domain/dtos/UserShortDto.ts';

interface ParentDto {
  id: number;
  login: string;
  firstName: string;
  lastName: string;
  role: string;
  student: UserShortDto;
}

export default ParentDto;
