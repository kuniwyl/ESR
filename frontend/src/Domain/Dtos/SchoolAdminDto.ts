import AddressDto from '@/domain/dtos/AddressDto.ts';
import EntityBase from '@/domain/EntityBase.ts';

interface SchoolAdminDto extends EntityBase {
  login: string;
  firstName: string;
  lastName: string;
  role: string;
  phone: string;
  birthDate: string;
  address: AddressDto;
  schoolId: number;
}

export default SchoolAdminDto;
