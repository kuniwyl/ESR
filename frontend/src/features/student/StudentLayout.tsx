import { Navigation } from '@/components/ui';
import StudentRequired from '@/features/layouts/StudentRequired.ts';
import { Outlet } from 'react-router-dom';

const StudentLayout = () => {
  return (
    <>
      <Navigation />
      <StudentRequired>
        <Outlet />
      </StudentRequired>
    </>
  );
};

export default StudentLayout;
