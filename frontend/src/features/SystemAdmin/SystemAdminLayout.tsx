import { Outlet, useNavigate } from 'react-router-dom';
import { Navigation } from '@/components/ui';
import { useContext, useEffect } from 'react';
import { UserRole } from '@/domain/UserRole.ts';
import { authContext } from '@/context/auth';
import { ROUTES } from '@/configuration/config.ts';
import VInfo from '@/features/info/VInfo.tsx';

const SystemAdminLayout = () => {
  const navigation = useNavigate();
  const { authState } = useContext(authContext);

  useEffect(() => {
    if (!authState.isAuth && authState.role !== UserRole.SYSTEM_ADMIN) {
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

export default SystemAdminLayout;
