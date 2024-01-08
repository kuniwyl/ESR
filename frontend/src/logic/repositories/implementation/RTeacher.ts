import IRTeachers from '@/logic/repositories/interfaces/IRTeachers.ts';
import ServiceResponse from '@/domain/ServiceResponse.ts';
import TeacherDto from '@/domain/dtos/TeacherDto.ts';
import { axiosInstance } from '@/configuration/apiConfig.ts';
import CreateUserDto from '@/domain/dtos/CreateUserDto.ts';

const url = '/teachers';

class RTeacher implements IRTeachers {
  getTeachersForSchool(): Promise<ServiceResponse<TeacherDto[]>> {
    return axiosInstance.get(url).then(response => {
      return response.data;
    });
  }

  createTeacher(teacher: CreateUserDto): Promise<ServiceResponse<TeacherDto>> {
    return axiosInstance.post(url, teacher).then(response => {
      return response.data;
    });
  }

  deleteTeacher(id: number): Promise<ServiceResponse<boolean>> {
    return axiosInstance.delete(url + '/' + id).then(response => {
      return response.data;
    });
  }

  updateTeacher(teacher: TeacherDto): Promise<ServiceResponse<TeacherDto>> {
    return axiosInstance.put(url + '/' + teacher.id, teacher).then(response => {
      return response.data;
    });
  }

  getTeacher(id: number): Promise<ServiceResponse<TeacherDto>> {
    return axiosInstance.get(url + '/' + id).then(response => {
      return response.data;
    });
  }
}

export default RTeacher;
