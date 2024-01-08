import IRSystemAdmin from '@/logic/repositories/interfaces/IRSystemAdmin.ts';
import CreateUserDto from '@/domain/dtos/CreateUserDto.ts';
import ServiceResponse from '@/domain/ServiceResponse.ts';
import SystemAdminDto from '@/domain/dtos/SystemAdminDto.ts';
import { axiosInstance } from '@/configuration/apiConfig.ts';

const url = '/system-admins';

class RSystemAdmin implements IRSystemAdmin {
  createSystemAdmin(
    sa: CreateUserDto,
  ): Promise<ServiceResponse<SystemAdminDto>> {
    return axiosInstance.post(url, sa).then(response => {
      return response.data;
    });
  }

  deleteSystemAdmin(id: number): Promise<ServiceResponse<boolean>> {
    return axiosInstance.delete(url + '/' + id).then(response => {
      return response.data;
    });
  }

  getSystemAdmin(id: number): Promise<ServiceResponse<SystemAdminDto>> {
    return axiosInstance.get(url + '/' + id).then(response => {
      return response.data;
    });
  }

  getSystemAdmins(): Promise<ServiceResponse<SystemAdminDto[]>> {
    return axiosInstance.get(url).then(response => {
      return response.data;
    });
  }

  updateSystemAdmin(
    sa: SystemAdminDto,
  ): Promise<ServiceResponse<SystemAdminDto>> {
    return axiosInstance.put(url + '/' + sa.id, sa).then(response => {
      return response.data;
    });
  }
}

export default RSystemAdmin;
