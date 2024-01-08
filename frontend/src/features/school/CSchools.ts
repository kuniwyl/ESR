import useGetSchools from '@/logic/hooks/systemAdmin/useGetSchools.ts';
import useDeleteSchool from '@/logic/hooks/systemAdmin/useDeleteSchool.ts';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/configuration/config.ts';

const CSchools = () => {
  const navigate = useNavigate();

  const schools = useGetSchools();
  const delSchool = useDeleteSchool();

  const navigateToSchool = (schoolId: number) => {
    navigate(ROUTES.EDIT_SCHOOL(schoolId.toString()));
  };

  const deleteSchool = (schoolId: number) => {
    delSchool.mutate(schoolId);
  };

  return { schools, navigateToSchool, deleteSchool };
};

export default CSchools;
