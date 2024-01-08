import EntityBase from '@/domain/EntityBase.ts';

interface AddressDto extends EntityBase {
  street: string;
  house: string;
  apartment: string;
  city: string;
  zipCode: string;
}

export default AddressDto;
