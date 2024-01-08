import { Navigation } from '@/components/ui';
import { Outlet } from 'react-router-dom';
import TeacherRequired from '@/features/layouts/TeacherRequired.ts';
import { useContext, useEffect } from 'react';
import useGetCurrentSemester from '@/logic/hooks/semester/useGetCurrentSemester.ts';
import { semesterContext } from '@/context/semesterChoose.tsx';

const TeacherLayout = () => {
  const semester = useGetCurrentSemester();
  const semesterC = useContext(semesterContext);

  useEffect(() => {
    if (semester.data?.data) {
      semesterC.handleSemesterChange(semester.data?.data);
    }
  }, [semester.data?.data]);

  return (
    <div>
      <Navigation />
      <TeacherRequired>
        <Outlet />
      </TeacherRequired>
    </div>
  );
};

export default TeacherLayout;
