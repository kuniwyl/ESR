import { JSX } from 'react';
import { UserRoles } from '@/Domain/Model/UserRoles.ts';
import { AuthSliceState } from '@/store/interfaces.ts';
import { RootState } from '@/store';
import { useSelector } from 'react-redux';

interface SchoolAdminRequiredProps {
  children: JSX.Element;
}

const SchoolAdminRequired = ({ children }: SchoolAdminRequiredProps) => {
  const auth = useSelector<RootState>(state => state.auth) as AuthSliceState;

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
