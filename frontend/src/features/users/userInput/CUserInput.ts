import useTextInput from '@/components/forms/TextInput/useTextInput.ts';
import regex from '@/configuration/regex.ts';
import useDateSelector from '@/components/forms/hooks/useDateSelector.ts';
import { useEffect } from 'react';

export interface UserInput {
  login: string;
  firstName: string;
  lastName: string;
  phone: string;
  birthDate: string;
}

const CUserInput = (id: number, user: UserInput | null) => {
  useEffect(() => {
    if (user?.birthDate) {
      birthDate.handleDateChange(new Date(user.birthDate));
    }
  }, [user?.birthDate]);

  const login = useTextInput({
    initialValue: id !== 0 ? user?.login || '' : '',
    required: true,
    maxLength: 40,
    minLength: 5,
    pattern: regex.POLISH_LETTERS_NUMBERS,
  });

  const firstName = useTextInput({
    initialValue: id !== 0 ? user?.firstName || '' : '',
    required: true,
    maxLength: 40,
    minLength: 5,
    pattern: regex.POLISH_LETTERS_SPACES,
  });

  const lastName = useTextInput({
    initialValue: id !== 0 ? user?.lastName || '' : '',
    required: true,
    maxLength: 40,
    minLength: 5,
    pattern: regex.POLISH_LETTERS_SPACES,
  });

  const phone = useTextInput({
    initialValue: id !== 0 ? user?.phone || '' : '',
    required: true,
    maxLength: 9,
    minLength: 6,
    pattern: regex.NUMBERS,
  });

  const birthDate = useDateSelector({
    initialDate: user?.birthDate ? new Date(user?.birthDate) : new Date(),
  });

  const isValid = () => {
    return (
      login.isValid() &&
      firstName.isValid() &&
      lastName.isValid() &&
      phone.isValid() &&
      birthDate.validate()
    );
  };

  return {
    login,
    firstName,
    lastName,
    phone,
    birthDate,
    isValid,
  };
};

export type CUserInputType = ReturnType<typeof CUserInput>;
export default CUserInput;
