import ServiceResponse from '@/domain/ServiceResponse.ts';
import SchoolAdminDto from '@/domain/dtos/SchoolAdminDto.ts';
import CreateUserDto from '@/domain/dtos/CreateUserDto.ts';

interface IRSchoolAdmin {
  getSchoolAdmins: () => Promise<ServiceResponse<SchoolAdminDto[]>>;
  getSchoolAdmin: (id: number) => Promise<ServiceResponse<SchoolAdminDto>>;
  createSchoolAdmin: (
    sa: CreateUserDto,
  ) => Promise<ServiceResponse<SchoolAdminDto>>;
  updateSchoolAdmin: (
    sa: SchoolAdminDto,
  ) => Promise<ServiceResponse<SchoolAdminDto>>;
  deleteSchoolAdmin: (id: number) => Promise<ServiceResponse<boolean>>;
}

export default IRSchoolAdmin;
