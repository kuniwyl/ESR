import injectRepository from '@/configuration/context/repositoryContext.ts';
import useGetSchools from '@/logic/models/useSystemAdminModel/useGetSchools.ts';
import ISystemAdminRepository from '@/logic/interfaces/repositoires/ISystemAdminRepository.ts';
import useGetSchool from '@/logic/models/useSystemAdminModel/useGetSchool.ts';
import useCreateSchool from '@/logic/models/useSystemAdminModel/useCreateSchool.ts';
import useUpdateSchool from '@/logic/models/useSystemAdminModel/useUpdateSchool.ts';
import useDeleteSchool from '@/logic/models/useSystemAdminModel/useDeleteSchool.ts';
import useCreateSchoolAdmin from '@/logic/models/useSystemAdminModel/useCreateSchoolAdmin.ts';
import useUpdateSchoolAdmin from '@/logic/models/useSystemAdminModel/useUpdateSchoolAdmin.ts';
import useDeleteSchoolAdmin from '@/logic/models/useSystemAdminModel/useDeleteSchoolAdmin.ts';
import { useEffect, useState } from 'react';
import SchoolDto from '@/domain/dtos/SchoolDto.ts';

const useSystemAdminModel = (id: number) => {
  const systemAdminRepository = injectRepository({
    type: 'systemAdmin',
  }) as ISystemAdminRepository;

  const getSchools = useGetSchools(systemAdminRepository);
  const getSchool = useGetSchool(id, systemAdminRepository);
  const createSchool = useCreateSchool(systemAdminRepository);
  const updateSchool = useUpdateSchool(systemAdminRepository);
  const deleteSchool = useDeleteSchool(systemAdminRepository);

  const addSchoolAdmin = useCreateSchoolAdmin(systemAdminRepository);
  const updateSchoolAdmin = useUpdateSchoolAdmin(systemAdminRepository);
  const deleteSchoolAdmin = useDeleteSchoolAdmin(systemAdminRepository);

  const schools = getSchools.schools;
  const [school, setSchool] = useState<SchoolDto>({} as SchoolDto);

  useEffect(() => {
    if (getSchool.school) {
      setSchool(getSchool.school);
    }
  }, [getSchool.school]);

  return {
    schools,
    getSchools,

    school,
    setSchool,
    getSchool,

    createSchool,
    updateSchool,
    deleteSchool,

    addSchoolAdmin,
    updateSchoolAdmin,
    deleteSchoolAdmin,
  };
};

export default useSystemAdminModel;
