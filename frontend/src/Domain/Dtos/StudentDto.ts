import EntityBase from '@/domain/EntityBase.ts';
import ParentDto from '@/domain/dtos/ParentDto.ts';
import AddressDto from '@/domain/dtos/AddressDto.ts';

interface StudentDto extends EntityBase {
  pesel: string;
  login: string;
  firstName: string;
  lastName: string;
  role: string;
  phone: string;
  birthDate: string;
  parent: ParentDto;
  address: AddressDto;
  schoolId: number;
  classId: number;
}

export default StudentDto;
