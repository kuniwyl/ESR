import UserShortDto from '@/model/UserShortDto.ts';

interface ParentDto {
  id: string;
  login: string;
  firstName: string;
  lastName: string;
  role: string;
  schoolId: string;
  student: UserShortDto;
}

export default ParentDto;
