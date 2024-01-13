import { useContext } from 'react';
import { authContext } from '@/context/auth';
import { UserRole } from '@/domain/UserRole.ts';

const StudentRequired = ({ children }: { children: JSX.Element }) => {
  const { authState } = useContext(authContext);
  if (authState.role === UserRole.STUDENT) {
    return children;
  }
  return;
};

export default StudentRequired;
