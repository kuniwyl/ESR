import IRAssignment from '@/logic/repositories/interfaces/IRAssignment.ts';
import ServiceResponse from '@/domain/ServiceResponse.ts';
import AssigmentDto from '@/domain/dtos/AssigmentDto.ts';
import { axiosInstance } from '@/configuration/apiConfig.ts';

class RAssignment implements IRAssignment {
  getAssignmentByCssId(
    cssId: number,
  ): Promise<ServiceResponse<AssigmentDto[]>> {
    return axiosInstance.get(`/assignments/css/${cssId}`).then(response => {
      return response.data;
    });
  }
}

export default RAssignment;
