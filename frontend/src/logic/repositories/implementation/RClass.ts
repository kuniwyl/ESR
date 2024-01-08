import IRClass from '@/logic/repositories/interfaces/IRClass.ts';
import ServiceResponse from '@/domain/ServiceResponse.ts';
import ClassDto from '@/domain/dtos/ClassDto.ts';
import { axiosInstance } from '@/configuration/apiConfig.ts';

const url = 'classes';

class RClass implements IRClass {
  getClassesFromSchool(): Promise<ServiceResponse<ClassDto[]>> {
    return axiosInstance.get(`${url}`).then(response => {
      return response.data;
    });
  }

  createClass(classDto: ClassDto): Promise<ServiceResponse<ClassDto>> {
    return axiosInstance.post(url, classDto).then(response => {
      return response.data;
    });
  }

  deleteClass(id: number): Promise<ServiceResponse<boolean>> {
    return axiosInstance.delete(url + '/' + id).then(response => {
      return response.data;
    });
  }

  getClassById(id: number): Promise<ServiceResponse<ClassDto>> {
    return axiosInstance.get(url + '/' + id).then(response => {
      return response.data;
    });
  }

  updateClass(classDto: ClassDto): Promise<ServiceResponse<ClassDto>> {
    return axiosInstance
      .put(url + '/' + classDto.id, classDto)
      .then(response => {
        return response.data;
      });
  }
}

export default RClass;
