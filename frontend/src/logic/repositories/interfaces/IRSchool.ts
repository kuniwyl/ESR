import SchoolDto from '@/domain/dtos/SchoolDto.ts';
import ServiceResponse from '@/domain/ServiceResponse.ts';
import SchoolWithAdminsDto from '@/domain/dtos/SchoolWithAdminsDto.ts';

interface IRSchool {
  getSchools: () => Promise<ServiceResponse<SchoolDto[]>>;
  getSchool: (id: number) => Promise<ServiceResponse<SchoolDto>>;
  createSchool: (sa: SchoolDto) => Promise<ServiceResponse<SchoolDto>>;
  updateSchool: (sa: SchoolDto) => Promise<ServiceResponse<SchoolDto>>;
  deleteSchool: (id: number) => Promise<ServiceResponse<boolean>>;
  getSchoolWithAdmins: (
    id: number,
  ) => Promise<ServiceResponse<SchoolWithAdminsDto>>;
}

export default IRSchool;
