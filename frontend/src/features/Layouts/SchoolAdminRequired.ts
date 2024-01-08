import { authContext } from '@/context/auth';
import { useContext } from 'react';
import { UserRole } from '@/domain/UserRole.ts';

const SchoolAdminRequired = ({ children }: { children: JSX.Element }) => {
  const { authState } = useContext(authContext);
  if (authState.isAuth && authState.role === UserRole.SCHOOL_ADMIN) {
    return children;
  }
  return null;
};

export default SchoolAdminRequired;
