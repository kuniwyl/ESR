import { useState } from 'react';
import LoginView from '@/features/auth/login/LoginView.tsx';
import IAuthRepository from '@/logic/interfaces/repositoires/IAuthRepository.ts';
import LoginController from '@/features/auth/login/LoginController.ts';

interface LoginProcessProps {
  authRepository: IAuthRepository;
}

const LoginPresenter = (props: LoginProcessProps) => {
  const { authRepository } = props;
  const controller = LoginController({ authRepository: authRepository });

  const [login, setLogin] = useState('string');
  const [password, setPassword] = useState('string');

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    controller.handleLogin(login, password);
  };

  const isLoading = controller.isLoading;
  return LoginView({
    login,
    password,
    isLoading,
    handleLoginChange,
    handlePasswordChange,
    handleLogin,
  });
};

export default LoginPresenter;
