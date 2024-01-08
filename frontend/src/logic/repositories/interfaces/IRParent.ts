import ParentDto from '@/domain/dtos/ParentDto.ts';
import ServiceResponse from '@/domain/ServiceResponse.ts';
import CreateParentDto from '@/domain/dtos/CreateParentDto.ts';

interface IRParent {
  getParentsFromClass(classId: number): Promise<ServiceResponse<ParentDto[]>>;
  getParent(parentId: number): Promise<ServiceResponse<ParentDto>>;
  createParent(parent: CreateParentDto): Promise<ServiceResponse<ParentDto>>;
  updateParent(parent: ParentDto): Promise<ServiceResponse<ParentDto>>;
  deleteParent(parentId: number): Promise<ServiceResponse<boolean>>;
}

export default IRParent;
