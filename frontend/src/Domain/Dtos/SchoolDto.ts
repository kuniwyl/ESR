import EntityBase from '@/domain/EntityBase.ts';

interface SchoolDto extends EntityBase {
  name: string;
  address: string;
  city: string;
  zipCode: string;
}

export default SchoolDto;
