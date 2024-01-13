import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserRole } from '@/domain/UserRole.ts';
import { ROUTES } from '@/configuration/config.ts';
import useLogin from '@/logic/hooks/auth/useLogin.ts';
import useTextInput from '@/components/forms/TextInput/useTextInput.ts';
import { authContext } from '@/context/auth';

const CLogin = () => {
  const { authState, setAuthData } = useContext(authContext);
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const loginMutation = useLogin();

  useEffect(() => {
    const checkLogin = async () => {
      if (authState.isAuth && authState.role === UserRole.SYSTEM_ADMIN) {
        navigate(ROUTES.SHOW_SCHOOLS());
      } else if (authState.isAuth && authState.role === UserRole.SCHOOL_ADMIN) {
        navigate(ROUTES.SEMESTERS_SHOW());
      } else if (authState.isAuth && authState.role === UserRole.TEACHER) {
        navigate(ROUTES.TEACHER_MAIN());
      } else if (authState.isAuth && authState.role === UserRole.STUDENT) {
        navigate(ROUTES.STUDENT_MAIN());
      } else if (authState.isAuth && authState.role === UserRole.PARENT) {
        navigate(ROUTES.PARENT_BASE());
      }
    };
    checkLogin();
  }, [authState.role, authState.refreshToken]);

  const handleLogin = async () => {
    if (!login.isValid() || !password.isValid()) {
      return;
    }

    loginMutation.useLogin.mutate(
      { login: login.value, password: password.value },
      {
        onSuccess: data => {
          setAuthData(data.token, data.refreshToken);
        },
        onError: () => {
          setError('Login lub hasło nie jest poprawne');
        },
      },
    );
  };

  const login = useTextInput({
    initialValue: '',
    minLength: 3,
    maxLength: 20,
    pattern: /^[a-zA-Z0-9]+$/,
    onKeyPress: handleLogin,
    required: true,
  });

  const password = useTextInput({
    initialValue: '',
    onKeyPress: handleLogin,
    required: true,
  });

  return {
    handleLogin,
    login,
    password,
    error,
  };
};

export default CLogin;
