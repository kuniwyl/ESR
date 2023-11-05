import { useAuth } from '@/store/slices/authSlice.ts';
import { JSX } from 'react';
import { UserRoles } from '@/model/UserRoles.ts';

interface SchoolAdminRequiredProps {
  children: JSX.Element;
}

const SchoolAdminRequired = ({ children }: SchoolAdminRequiredProps) => {
  const auth = useAuth();

  if (
    auth.isAuth &&
    (auth.role === UserRoles.SCHOOL_ADMIN ||
      auth.role === UserRoles.SYSTEM_ADMIN)
  ) {
    return children;
  } else {
    return;
  }
};

export default SchoolAdminRequired;
