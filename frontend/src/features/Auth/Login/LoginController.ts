import IAuthRepository from '@/logic/interfaces/repositoires/IAuthRepository.ts';
import { useMutation } from 'react-query';
import { authActions, useAuth } from '@/store/Auth/authReducer.ts';
import { useEffect } from 'react';
import { UserRoles } from '@/domain/model/UserRoles.ts';
import { SHOW_CLASSES, SHOW_SCHOOLS } from '@/configuration/config.ts';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@/store/store.ts';

interface LoginControllerProps {
  authRepository: IAuthRepository;
}

const LoginController = (props: LoginControllerProps) => {
  const { authRepository } = props;
  const auth = useAuth();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { login } = authActions;
  const loginProcess = useMutation([], authRepository.login, {
    onSuccess: data => {
      dispatch(login(data));
    },
  });
  const refreshTokenProcess = useMutation([], authRepository.refreshToken, {
    onSuccess: data => {
      dispatch(login(data));
    },
  });

  useEffect(() => {
    const checkLogin = async () => {
      if (auth.isAuth && auth.role === UserRoles.SYSTEM_ADMIN) {
        navigate(SHOW_SCHOOLS);
      } else if (auth.isAuth && auth.role === UserRoles.SCHOOL_ADMIN) {
        navigate(SHOW_CLASSES);
      } else if (auth.refreshToken !== null) {
        refreshTokenProcess.mutate(auth.refreshToken);
      }
    };
    checkLogin();
  }, [auth.isAuth]);

  const handleLogin = async (login: string, password: string) => {
    loginProcess.mutate({ login: login, password: password });
  };

  return { handleLogin, isLoading: loginProcess.isLoading };
};

export default LoginController;
