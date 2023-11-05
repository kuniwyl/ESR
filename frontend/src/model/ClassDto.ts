import UserShortDto from '@/model/UserShortDto.ts';

interface ClassDto {
  id: string;
  name: string;
  description: string;
  teacherShort: UserShortDto;
}

export default ClassDto;
