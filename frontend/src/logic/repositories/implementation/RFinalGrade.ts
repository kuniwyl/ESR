import IRFinalGrade from '@/logic/repositories/interfaces/IRFinalGrade.ts';
import FinalGradeDto from '@/domain/dtos/FinalGradeDto.ts';
import ServiceResponse from '@/domain/ServiceResponse.ts';
import { axiosInstance } from '@/configuration/apiConfig.ts';

class RFinalGrade implements IRFinalGrade {
  createFinalGrade(
    finalGrade: FinalGradeDto,
  ): Promise<ServiceResponse<FinalGradeDto>> {
    return axiosInstance.post('/final-grade', finalGrade).then(response => {
      return response.data;
    });
  }

  deleteFinalGrade(
    finalGradeId: string,
  ): Promise<ServiceResponse<FinalGradeDto>> {
    return axiosInstance
      .delete(`/final-grade/${finalGradeId}`)
      .then(response => {
        return response.data;
      });
  }

  updateFinalGrade(
    finalGrade: FinalGradeDto,
  ): Promise<ServiceResponse<FinalGradeDto>> {
    return axiosInstance
      .put(`/final-grade/${finalGrade.id}`, finalGrade)
      .then(response => {
        return response.data;
      });
  }
}

export default RFinalGrade;
