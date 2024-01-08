import AddressDto from '@/domain/dtos/AddressDto.ts';
import EntityBase from '@/domain/EntityBase.ts';

interface TeacherDto extends EntityBase {
  login: string;
  firstName: string;
  lastName: string;
  phone: string;
  role: string;
  birthDate: string;
  address: AddressDto;
  schoolId: number;
}

export default TeacherDto;
