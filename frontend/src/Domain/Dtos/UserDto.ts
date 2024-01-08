import EntityBase from '@/domain/EntityBase.ts';

interface UserDto extends EntityBase {
  login: string;
  firstName: string;
  lastName: string;
  role: string;
  schoolId: number;
}

export default UserDto;
