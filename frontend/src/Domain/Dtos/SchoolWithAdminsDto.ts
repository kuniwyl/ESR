import SchoolDto from '@/domain/dtos/SchoolDto.ts';
import SchoolAdminDto from '@/domain/dtos/SchoolAdminDto.ts';

interface SchoolWithAdminsDto extends SchoolDto {
  admins: SchoolAdminDto[];
}

export default SchoolWithAdminsDto;
