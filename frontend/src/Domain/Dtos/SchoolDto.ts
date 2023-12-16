interface SchoolDto {
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phoneNumber: string;
  email: string;
  website: string;
  logoUrl: string;
  schoolAdmins: UserDto[];
}

export default SchoolDto;
