import IRCss from '@/logic/repositories/interfaces/IRCss.ts';
import ClassSubjectSemesterDto from '@/domain/dtos/ClassSubjectSemesterDto.ts';
import ServiceResponse from '@/domain/ServiceResponse.ts';
import { axiosInstance } from '@/configuration/apiConfig.ts';

const url = 'css';

class RCss implements IRCss {
  getCssFromUser(): Promise<ServiceResponse<ClassSubjectSemesterDto[]>> {
    return axiosInstance.get(url + '/user').then(response => {
      return response.data;
    });
  }

  createCss(
    ClassSubjectSemesterDto: ClassSubjectSemesterDto,
  ): Promise<ServiceResponse<ClassSubjectSemesterDto>> {
    return axiosInstance.post(url, ClassSubjectSemesterDto).then(response => {
      return response.data;
    });
  }

  deleteCss(
    classSubjectSemesterId: number,
  ): Promise<ServiceResponse<ClassSubjectSemesterDto>> {
    return axiosInstance
      .delete(url + '/' + classSubjectSemesterId)
      .then(response => {
        return response.data;
      });
  }

  getCssByClassAndSemesterId(
    classId: number,
    semesterId: number,
  ): Promise<ServiceResponse<ClassSubjectSemesterDto[]>> {
    return axiosInstance
      .get(url + '/class/' + classId + '/semester/' + semesterId)
      .then(response => {
        return response.data;
      });
  }

  getCssByTeacherAndSemesterId(
    teacherId: number,
    semesterId: number,
  ): Promise<ServiceResponse<ClassSubjectSemesterDto[]>> {
    return axiosInstance
      .get(url + '/teacher/' + teacherId + '/semester/' + semesterId)
      .then(response => {
        return response.data;
      });
  }

  getCssById(
    classSubjectSemesterId: number,
  ): Promise<ServiceResponse<ClassSubjectSemesterDto>> {
    return axiosInstance
      .get(url + '/' + classSubjectSemesterId)
      .then(response => {
        return response.data;
      });
  }

  updateCss(
    ClassSubjectSemesterDto: ClassSubjectSemesterDto,
  ): Promise<ServiceResponse<ClassSubjectSemesterDto>> {
    return axiosInstance
      .put(url + '/' + ClassSubjectSemesterDto.id, ClassSubjectSemesterDto)
      .then(response => {
        return response.data;
      });
  }
}

export default RCss;
