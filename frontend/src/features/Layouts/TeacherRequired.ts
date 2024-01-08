import { useContext } from 'react';
import { authContext } from '@/context/auth';
import { UserRole } from '@/domain/UserRole.ts';

const TeacherRequired = ({ children }: { children: JSX.Element }) => {
  const { authState } = useContext(authContext);
  if (authState.role === UserRole.TEACHER) {
    return children;
  }
  return;
};

export default TeacherRequired;
