import IRSchoolAdmin from '@/logic/repositories/interfaces/IRSchoolAdmin.ts';
import CreateUserDto from '@/domain/dtos/CreateUserDto.ts';
import ServiceResponse from '@/domain/ServiceResponse.ts';
import SchoolAdminDto from '@/domain/dtos/SchoolAdminDto.ts';
import { axiosInstance } from '@/configuration/apiConfig.ts';

const url = '/school-admins';

class RSchoolAdmin implements IRSchoolAdmin {
  createSchoolAdmin(
    sa: CreateUserDto,
  ): Promise<ServiceResponse<SchoolAdminDto>> {
    return axiosInstance.post(url, sa).then(response => {
      return response.data;
    });
  }

  deleteSchoolAdmin(id: number): Promise<ServiceResponse<boolean>> {
    return axiosInstance.delete(url + '/' + id).then(response => {
      return response.data;
    });
  }

  getSchoolAdmin(id: number): Promise<ServiceResponse<SchoolAdminDto>> {
    return axiosInstance.get(url + '/' + id).then(response => {
      return response.data;
    });
  }

  getSchoolAdmins(): Promise<ServiceResponse<SchoolAdminDto[]>> {
    return axiosInstance.get(url).then(response => {
      return response.data;
    });
  }

  updateSchoolAdmin(
    sa: SchoolAdminDto,
  ): Promise<ServiceResponse<SchoolAdminDto>> {
    return axiosInstance.put(url + '/' + sa.id, sa).then(response => {
      return response.data;
    });
  }
}

export default RSchoolAdmin;
