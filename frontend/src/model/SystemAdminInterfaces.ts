import { UserResponse } from '@/model/AuthInterfaces.ts';

export interface ModifySchoolData {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phoneNumber: string;
  email: string;
  website: string;
  logoUrl: string;
}

export interface SchoolResponse {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phoneNumber: string;
  email: string;
  website: string;
  logoUrl: string;
  schoolAdmins: UserResponse[];
}
