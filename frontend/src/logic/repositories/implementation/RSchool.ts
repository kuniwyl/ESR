import IRSchool from '@/logic/repositories/interfaces/IRSchool.ts';
import SchoolDto from '@/domain/dtos/SchoolDto.ts';
import ServiceResponse from '@/domain/ServiceResponse.ts';
import { axiosInstance } from '@/configuration/apiConfig.ts';
import SchoolWithAdminsDto from '@/domain/dtos/SchoolWithAdminsDto.ts';

const url = '/schools';

class RSchool implements IRSchool {
  createSchool(sa: SchoolDto): Promise<ServiceResponse<SchoolDto>> {
    return axiosInstance.post(url, sa).then(response => {
      return response.data;
    });
  }

  deleteSchool(id: number): Promise<ServiceResponse<boolean>> {
    return axiosInstance.delete(url + '/' + id).then(response => {
      return response.data;
    });
  }

  getSchool(id: number): Promise<ServiceResponse<SchoolDto>> {
    return axiosInstance.get(url + '/' + id).then(response => {
      return response.data;
    });
  }

  getSchools(): Promise<ServiceResponse<SchoolDto[]>> {
    return axiosInstance.get(url).then(response => {
      return response.data;
    });
  }

  updateSchool(sa: SchoolDto): Promise<ServiceResponse<SchoolDto>> {
    return axiosInstance.put(url + '/' + sa.id, sa).then(response => {
      return response.data;
    });
  }

  getSchoolWithAdmins(
    id: number,
  ): Promise<ServiceResponse<SchoolWithAdminsDto>> {
    return axiosInstance
      .get(url + '/' + id + '/getWithAdmins')
      .then(response => {
        return response.data;
      });
  }
}

export default RSchool;
