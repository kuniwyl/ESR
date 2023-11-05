import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { AuthSliceState } from '@/store/interfaces.ts';
import { UserRoles } from '@/model/UserRoles.ts';

interface SystemAdminRequiredProps {
  children: JSX.Element;
}

const SystemAdminRequired = ({ children }: SystemAdminRequiredProps) => {
  const { role } = useSelector(
    (state: RootState) => state.auth,
  ) as AuthSliceState;

  if (role === UserRoles.SYSTEM_ADMIN) {
    return children;
  } else {
    return;
  }
};

export default SystemAdminRequired;
