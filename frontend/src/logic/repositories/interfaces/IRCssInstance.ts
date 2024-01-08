import ServiceResponse from '@/domain/ServiceResponse.ts';
import CssInstanceDto from '@/domain/dtos/CssInstanceDto.ts';

interface IRCssInstance {
  getCssByUser(): Promise<ServiceResponse<CssInstanceDto[]>>;
  getCssInstanceBySemesterAndClass(
    semester: string,
    classId: string,
  ): Promise<ServiceResponse<CssInstanceDto[]>>;
  getCssInstanceBySemesterAndTeacher(
    semester: string,
    teacherId: string,
  ): Promise<ServiceResponse<CssInstanceDto[]>>;
  getCssInstanceById(id: string): Promise<ServiceResponse<CssInstanceDto>>;
  createCssInstance(
    cssInstance: CssInstanceDto,
  ): Promise<ServiceResponse<CssInstanceDto>>;
  updateCssInstance(
    cssInstance: CssInstanceDto,
  ): Promise<ServiceResponse<CssInstanceDto>>;
  deleteCssInstance(id: string): Promise<ServiceResponse<CssInstanceDto>>;
}

export default IRCssInstance;
