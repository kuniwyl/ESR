import IRCssInstance from '@/logic/repositories/interfaces/IRCssInstance.ts';
import CssInstanceDto from '@/domain/dtos/CssInstanceDto.ts';
import ServiceResponse from '@/domain/ServiceResponse.ts';
import { axiosInstance } from '@/configuration/apiConfig.ts';

const url = '/cssInstance';

class RCssInstance implements IRCssInstance {
  getCssByUser(): Promise<ServiceResponse<CssInstanceDto[]>> {
    return axiosInstance
      .get<ServiceResponse<CssInstanceDto[]>>(url + '/user')
      .then(res => res.data);
  }
  createCssInstance(
    cssInstance: CssInstanceDto,
  ): Promise<ServiceResponse<CssInstanceDto>> {
    return axiosInstance
      .post<ServiceResponse<CssInstanceDto>>(url, cssInstance)
      .then(res => res.data);
  }

  deleteCssInstance(id: string): Promise<ServiceResponse<CssInstanceDto>> {
    return axiosInstance
      .delete<ServiceResponse<CssInstanceDto>>(`${url}/${id}`)
      .then(res => res.data);
  }

  getCssInstanceById(id: string): Promise<ServiceResponse<CssInstanceDto>> {
    return axiosInstance
      .get<ServiceResponse<CssInstanceDto>>(`${url}/${id}`)
      .then(res => res.data);
  }

  getCssInstanceBySemesterAndClass(
    semester: string,
    classId: string,
  ): Promise<ServiceResponse<CssInstanceDto[]>> {
    return axiosInstance
      .get<ServiceResponse<CssInstanceDto[]>>(
        `${url}/semester/${semester}/class/${classId}`,
      )
      .then(res => res.data);
  }

  updateCssInstance(
    cssInstance: CssInstanceDto,
  ): Promise<ServiceResponse<CssInstanceDto>> {
    return axiosInstance
      .put<ServiceResponse<CssInstanceDto>>(
        url + '/' + cssInstance.id,
        cssInstance,
      )
      .then(res => res.data);
  }

  getCssInstanceBySemesterAndTeacher(
    semester: string,
    teacherId: string,
  ): Promise<ServiceResponse<CssInstanceDto[]>> {
    return axiosInstance
      .get<ServiceResponse<CssInstanceDto[]>>(
        `${url}/semester/${semester}/teacher/${teacherId}`,
      )
      .then(res => res.data);
  }
}

export default RCssInstance;
