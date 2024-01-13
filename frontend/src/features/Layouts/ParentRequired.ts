import { useContext } from 'react';
import { authContext } from '@/context/auth';
import { UserRole } from '@/domain/UserRole.ts';

const ParentRequired = ({ children }: { children: JSX.Element }) => {
  const { authState } = useContext(authContext);
  if (authState.role === UserRole.PARENT) {
    return children;
  }
  return;
};

export default ParentRequired;
