import EntityBase from '@/domain/EntityBase.ts';
import AddressDto from '@/domain/dtos/AddressDto.ts';

interface ParentDto extends EntityBase {
  login: string;
  firstName: string;
  lastName: string;
  phone: string;
  birthDate: string;
  address: AddressDto;
  role: string;
  schoolId: number;
  studentName?: string;
  studentId: number;
}

export default ParentDto;
