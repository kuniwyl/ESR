import useGetSemesters from '@/logic/hooks/semester/useGetSemesters.ts';
import { useContext, useEffect } from 'react';
import useCreateSemester from '@/logic/hooks/semester/useCreateSemester.ts';
import useEditSemester from '@/logic/hooks/semester/useEditSemester.ts';
import useDeleteSemester from '@/logic/hooks/semester/useDeleteSemester.ts';
import { semesterContext } from '@/context/semesterChoose.tsx';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/configuration/config.ts';
import useGetCurrentSemester from '@/logic/hooks/semester/useGetCurrentSemester.ts';

const CSemesters = () => {
  const navigate = useNavigate();
  const semester = useContext(semesterContext);

  const current = useGetCurrentSemester();
  const semesters = useGetSemesters();

  const create = useCreateSemester();
  const update = useEditSemester();
  const remove = useDeleteSemester();

  useEffect(() => {
    if (!semester.semester?.id) {
      current.refetch();
    }

    if (current.data?.data && !semester.semester?.id) {
      semester.handleSemesterChange(current.data?.data);
    }
  }, [semester.semester?.id, current.isSuccess]);

  const removeSemester = (id: number) => {
    remove.mutate(id);
  };

  const navigateToSemester = () => {
    navigate(ROUTES.SEMESTER_ADD());
  };

  const semesterDetail = (id: number) => {
    navigate(ROUTES.SEMESTER_EDIT(id.toString()));
  };

  return {
    semesters,
    semester,
    create,
    update,
    removeSemester,
    semesterDetail,
    navigateToSemester,
  };
};

export default CSemesters;
