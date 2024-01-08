import AddressDto from '@/domain/dtos/AddressDto.ts';
import EntityBase from '@/domain/EntityBase.ts';

interface SystemAdminDto extends EntityBase {
  login: string;
  firstName: string;
  lastName: string;
  phone: string;
  address: AddressDto;
  birthDate: string;
  role: string;
}

export default SystemAdminDto;
