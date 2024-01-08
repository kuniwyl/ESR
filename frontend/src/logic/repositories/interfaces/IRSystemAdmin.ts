import SystemAdminDto from '@/domain/dtos/SystemAdminDto.ts';
import ServiceResponse from '@/domain/ServiceResponse.ts';
import CreateUserDto from '@/domain/dtos/CreateUserDto.ts';

interface IRSystemAdmin {
  getSystemAdmins: () => Promise<ServiceResponse<SystemAdminDto[]>>;
  getSystemAdmin: (id: number) => Promise<ServiceResponse<SystemAdminDto>>;
  createSystemAdmin: (
    sa: CreateUserDto,
  ) => Promise<ServiceResponse<SystemAdminDto>>;
  updateSystemAdmin: (
    sa: SystemAdminDto,
  ) => Promise<ServiceResponse<SystemAdminDto>>;
  deleteSystemAdmin: (id: number) => Promise<ServiceResponse<boolean>>;
}

export default IRSystemAdmin;
