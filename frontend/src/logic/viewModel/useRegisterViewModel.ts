import RegisterDto from '@/domain/dtos/RegisterDto.ts';
import { useState } from 'react';

const useRegisterViewModel = () => {
  const [register, setRegister] = useState<RegisterDto>({
    login: '',
    password: '',
    firstName: '',
    lastName: '',
  } as RegisterDto);

  const handleSetRegister = (register: RegisterDto) => {
    setRegister(register);
  };

  const handleRegisterChange = (name: string, value: string) => {
    setRegister(oldValue => ({
      ...oldValue,
      [name]: value,
    }));
  };

  return {
    register,
    handleSetRegister,
    handleRegisterChange,
  };
};

export default useRegisterViewModel;
