import { useContext } from 'react';
import { authContext } from '@/context/auth';
import { UserRole } from '@/domain/UserRole.ts';

const SystemAdminRequired = ({ children }: { children: JSX.Element }) => {
  const { authState } = useContext(authContext);
  if (authState.isAuth && authState.role === UserRole.SYSTEM_ADMIN) {
    return children;
  }
  return null;
};

export default SystemAdminRequired;
