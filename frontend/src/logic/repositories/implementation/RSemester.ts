import IRSemester from '@/logic/repositories/interfaces/IRSemester.ts';
import SemesterDto from '@/domain/dtos/SemesterDto.ts';
import ServiceResponse from '@/domain/ServiceResponse.ts';
import { axiosInstance } from '@/configuration/apiConfig.ts';

const url = '/semesters';

class RSemester implements IRSemester {
  createSemester(semester: SemesterDto): Promise<ServiceResponse<SemesterDto>> {
    return axiosInstance.post(url, semester).then(response => {
      return response.data;
    });
  }

  deleteSemester(semesterId: number): Promise<ServiceResponse<SemesterDto>> {
    return axiosInstance.delete(url + '/' + semesterId).then(response => {
      return response.data;
    });
  }

  getSemesters(): Promise<ServiceResponse<SemesterDto[]>> {
    return axiosInstance.get(url).then(response => {
      return response.data;
    });
  }

  updateSemester(semester: SemesterDto): Promise<ServiceResponse<SemesterDto>> {
    return axiosInstance
      .put(url + '/' + semester.id, semester)
      .then(response => {
        return response.data;
      });
  }

  getSemesterCurrent(): Promise<ServiceResponse<SemesterDto>> {
    return axiosInstance.get(url + '/current').then(response => {
      return response.data;
    });
  }

  getSemester(semesterId: number): Promise<ServiceResponse<SemesterDto>> {
    return axiosInstance.get(url + '/' + semesterId).then(response => {
      return response.data;
    });
  }
}

export default RSemester;
