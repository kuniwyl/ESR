import useGetTeachers from '@/logic/hooks/teachers/useGetTeachers.ts';
import { authContext } from '@/context/auth';
import { useContext } from 'react';
import useDeleteTeacher from '@/logic/hooks/teachers/useDeleteTeacher.ts';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/configuration/config.ts';

const CTeachers = () => {
  const { authState } = useContext(authContext);
  const navigate = useNavigate();

  const { getTeachers } = useGetTeachers(authState.schoolId ?? 0);
  const deleteTeacher = useDeleteTeacher();

  const deleteTeacherById = (id: number) => {
    deleteTeacher.mutate(id);
  };

  const createTeacher = () => {
    navigate(ROUTES.TEACHERS_ADD());
  };

  const editTeacher = (id: number) => {
    navigate(ROUTES.TEACHERS_EDIT(id.toString()));
  };

  const goBack = () => {
    navigate(-1);
  };

  return {
    teachers: getTeachers,
    deleteTeacherById,
    goBack,
    createTeacher,
    editTeacher,
  };
};

export default CTeachers;
