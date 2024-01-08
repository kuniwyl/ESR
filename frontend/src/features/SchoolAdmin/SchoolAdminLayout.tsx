import { Outlet, useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { authContext } from '@/context/auth';
import { UserRole } from '@/domain/UserRole.ts';
import { Navigation } from '@/components/ui';
import { ROUTES } from '@/configuration/config.ts';
import VInfo from '@/features/info/VInfo.tsx';

const SchoolAdminLayout = () => {
  const navigation = useNavigate();
  const { authState } = useContext(authContext);

  useEffect(() => {
    if (!authState.isAuth && authState.role !== UserRole.SCHOOL_ADMIN) {
      navigation(ROUTES.LOGIN());
    }
  }, []);

  return (
    <div>
      <Navigation />
      <Outlet />
      <VInfo />
    </div>
  );
};

export default SchoolAdminLayout;
