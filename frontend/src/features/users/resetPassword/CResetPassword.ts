import useGetUser from '@/logic/hooks/auth/useGetUser.ts';
import useResetPassword from '@/logic/hooks/auth/useResetPassword.ts';
import { useNavigate } from 'react-router-dom';
import CPasswordInput from '@/features/users/passwordInput/CPasswordInput.ts';

const CResetPassword = (id: number) => {
  const user = useGetUser(id);
  const navigate = useNavigate();
  const resetPassword = useResetPassword();

  const password = CPasswordInput();

  const reset = () => {
    if (!password.isValid()) {
      return;
    }
    resetPassword.resetPassword.mutate(
      {
        id: id,
        newPassword: password.password.value,
      },
      {
        onSuccess: () => {
          navigate(-1);
        },
      },
    );
  };

  return {
    user,
    password,
    reset,
  };
};

export default CResetPassword;
