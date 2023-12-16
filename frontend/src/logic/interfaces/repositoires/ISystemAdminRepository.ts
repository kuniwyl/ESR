import SchoolDto from '@/domain/dtos/SchoolDto.ts';
import RegisterDto from '@/domain/dtos/RegisterDto.ts';

interface ISystemAdminRepository {
  getSchools: () => Promise<SchoolDto[]>;
  getSchool: (id: number) => Promise<SchoolDto>;
  createSchool: (school: SchoolDto) => Promise<SchoolDto>;
  updateSchool: (school: SchoolDto) => Promise<SchoolDto>;
  deleteSchool: (id: number) => Promise<void>;

  addAdmin: ({
    id,
    admin,
  }: {
    id: number;
    admin: RegisterDto;
  }) => Promise<void>;
  editAdmin: ({
    id,
    adminId,
    admin,
  }: {
    id: number;
    adminId: number;
    admin: RegisterDto;
  }) => Promise<void>;
  removeAdmin: ({
    id,
    adminId,
  }: {
    id: number;
    adminId: number;
  }) => Promise<void>;
}

export default ISystemAdminRepository;
