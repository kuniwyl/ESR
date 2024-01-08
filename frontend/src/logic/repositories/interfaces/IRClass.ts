import ServiceResponse from '@/domain/ServiceResponse.ts';
import ClassDto from '@/domain/dtos/ClassDto.ts';

interface IRClass {
  getClassesFromSchool(): Promise<ServiceResponse<ClassDto[]>>;
  getClassById(id: number): Promise<ServiceResponse<ClassDto>>;
  createClass(classDto: ClassDto): Promise<ServiceResponse<ClassDto>>;
  updateClass(classDto: ClassDto): Promise<ServiceResponse<ClassDto>>;
  deleteClass(id: number): Promise<ServiceResponse<boolean>>;
}

export default IRClass;
