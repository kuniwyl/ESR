import SchoolDataDto from '@/domain/dtos/SchoolDataDto.ts';

interface ISchoolRepository {
  getSchool(): Promise<SchoolDataDto>;
}

export default ISchoolRepository;
