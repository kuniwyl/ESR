import IRSubject from '@/logic/repositories/interfaces/IRSubject.ts';
import ServiceResponse from '@/domain/ServiceResponse.ts';
import SubjectDto from '@/domain/dtos/SubjectDto.ts';
import { axiosInstance } from '@/configuration/apiConfig.ts';

const url = 'subjects';

class RSubject implements IRSubject {
  getSubjectsBySchool(): Promise<ServiceResponse<SubjectDto[]>> {
    return axiosInstance.get(`${url}`).then(response => {
      return response.data;
    });
  }

  createSubject(subject: SubjectDto): Promise<ServiceResponse<SubjectDto>> {
    return axiosInstance.post(`${url}`, subject).then(response => {
      return response.data;
    });
  }

  deleteSubject(subjectId: number): Promise<ServiceResponse<boolean>> {
    return axiosInstance.delete(`${url}/${subjectId}`).then(response => {
      return response.data;
    });
  }

  getSubject(subjectId: number): Promise<ServiceResponse<SubjectDto>> {
    return axiosInstance.get(`${url}/${subjectId}`).then(response => {
      return response.data;
    });
  }

  updateSubject(
    subjectId: number,
    subject: SubjectDto,
  ): Promise<ServiceResponse<SubjectDto>> {
    return axiosInstance.put(`${url}/${subjectId}`, subject).then(response => {
      return response.data;
    });
  }
}

export default RSubject;
