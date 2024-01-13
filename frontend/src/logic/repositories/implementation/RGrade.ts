import IRGrade from '@/logic/repositories/interfaces/IRGrade.ts';
import GradeDto from '@/domain/dtos/GradeDto.ts';
import ServiceResponse from '@/domain/ServiceResponse.ts';
import { axiosInstance } from '@/configuration/apiConfig.ts';
import GradesFinalDto from '@/domain/dtos/GradesFinalDto.ts';

const url = '/grades';

class RGrade implements IRGrade {
  createGrade(grade: GradeDto): Promise<ServiceResponse<GradeDto>> {
    return axiosInstance.post(url, grade).then(response => {
      return response.data;
    });
  }

  deleteGrade(gradeId: string): Promise<ServiceResponse<GradeDto>> {
    return axiosInstance.delete(`${url}/${gradeId}`).then(response => {
      return response.data;
    });
  }

  getGradeByCssId(cssId: string): Promise<ServiceResponse<GradesFinalDto>> {
    return axiosInstance.get(`${url}/css/${cssId}`).then(response => {
      return response.data;
    });
  }

  updateGrade(grade: GradeDto): Promise<ServiceResponse<GradeDto>> {
    return axiosInstance.put(url + '/' + grade.id, grade).then(response => {
      return response.data;
    });
  }
}

export default RGrade;
