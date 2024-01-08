import EntityBase from '@/domain/EntityBase.ts';
import AddressDto from '@/domain/dtos/AddressDto.ts';

interface SchoolDto extends EntityBase {
  name: string;
  email: string;
  phone: string;
  website: string;
  adminCount?: number;
  address: AddressDto;
}

export default SchoolDto;
