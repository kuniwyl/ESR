import useTextInput from '@/components/forms/TextInput/useTextInput.ts';

const CPasswordInput = () => {
  const password = useTextInput({
    initialValue: '',
    required: true,
    maxLength: 40,
    minLength: 5,
  });

  const repeatPassword = useTextInput({
    initialValue: '',
    required: true,
    maxLength: 40,
    minLength: 5,
  });

  const isValid = () => {
    if (password.value !== repeatPassword.value) {
      repeatPassword.setError('Hasła muszą być takie same');
    }

    return (
      password.isValid() &&
      repeatPassword.isValid() &&
      password.value === repeatPassword.value
    );
  };

  return {
    password,
    repeatPassword,
    isValid,
  };
};

export type CPasswordInputType = ReturnType<typeof CPasswordInput>;
export default CPasswordInput;
