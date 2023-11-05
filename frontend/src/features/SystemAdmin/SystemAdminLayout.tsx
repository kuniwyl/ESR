import { Outlet, useNavigate } from 'react-router-dom';
import { Navigation } from '@/components/ui';
import { useAuth } from '@/store/slices/authSlice.ts';
import { useEffect } from 'react';
import { UserRoles } from '@/model/UserRoles.ts';

const SystemAdminLayout = () => {
  const navigation = useNavigate();
  const auth = useAuth();

  useEffect(() => {
    if (!auth.isAuth && auth.role !== UserRoles.SYSTEM_ADMIN) {
      navigation('/login');
    }
  }, []);

  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  );
};

export default SystemAdminLayout;