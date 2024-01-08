import ServiceResponse from '@/domain/ServiceResponse.ts';
import AssigmentDto from '@/domain/dtos/AssigmentDto.ts';

interface IRAssignment {
  getAssignmentByCssId(cssId: number): Promise<ServiceResponse<AssigmentDto[]>>;
}

export default IRAssignment;
