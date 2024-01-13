import { Navigation } from '@/components/ui';
import { Outlet } from 'react-router-dom';
import ParentRequired from '@/features/layouts/ParentRequired.ts';

const ParentLayout = () => {
  return (
    <>
      <Navigation />
      <ParentRequired>
        <Outlet />
      </ParentRequired>
    </>
  );
};

export default ParentLayout;
