import ParentDto from '@/domain/dtos/ParentDto.ts';
import RegisterDto from '@/domain/dtos/RegisterDto.ts';

interface IParentRepository {
  getParents(): Promise<ParentDto[]>;
  getParent(id: number): Promise<ParentDto>;
  createParent({
    studentId,
    parentData,
  }: {
    studentId: number;
    parentData: RegisterDto;
  }): Promise<void>;
  updateParent({
    id,
    parentData,
  }: {
    id: number;
    parentData: RegisterDto;
  }): Promise<void>;
  deleteParent(id: number): Promise<void>;
}

export default IParentRepository;
