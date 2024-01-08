import { authContext } from '@/context/auth';
import { useContext, useEffect } from 'react';
import useGetCssFromUser from '@/logic/hooks/css/useGetCssFromUser.ts';
import CTimeTableUser from '@/features/timetable/CTimeTableUser.ts';
import useGetCssInstancesByUser from '@/logic/hooks/cssInstance/useGetCssInstancesByUser.ts';
import { semesterContext } from '@/context/semesterChoose.tsx';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/configuration/config.ts';

const CTeacherMain = () => {
  const { authState } = useContext(authContext);
  const navigate = useNavigate();
  const semester = useContext(semesterContext);
  const css = useGetCssFromUser();
  const cssInstances = useGetCssInstancesByUser();
  const timeTable = CTimeTableUser(semester.semester, cssInstances.data?.data);

  useEffect(() => {
    if (!semester.semester?.id) {
      semester.getSemester();
    }
  }, []);

  useEffect(() => {
    if (authState.userId && semester.semester?.id) {
      css.refetch();
    }
  }, [authState.userId, semester.semester?.id]);

  const navigateToGrades = (cssId: number) => {
    navigate(ROUTES.TEACHER_SUBJECTS_GRADES(cssId.toString()));
  };

  const navigateToFrequencies = (cssId: number) => {
    navigate(ROUTES.TEACHER_SUBJECTS_FREQUENCIES(cssId.toString()));
  };

  return {
    semester,
    css,
    timeTable,

    navigateToGrades,
    navigateToFrequencies,
  };
};

export default CTeacherMain;
