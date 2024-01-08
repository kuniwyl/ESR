import InputContainer from '@/components/ui/InputContainer/InputContainer.tsx';
import TextInput from '@/components/forms/TextInput/TextInput.tsx';
import { CPasswordInputType } from '@/features/users/passwordInput/CPasswordInput.ts';

const VPasswordInput = ({ controller }: { controller: CPasswordInputType }) => {
  return (
    <InputContainer>
      <TextInput
        value={controller.password.value}
        label={'Nowe hasło'}
        error={controller.password.error}
        onChange={controller.password.onChange}
        type={'password'}
      />
      <TextInput
        value={controller.repeatPassword.value}
        label={'Powtórz hasło'}
        error={controller.repeatPassword.error}
        onChange={controller.repeatPassword.onChange}
        type={'password'}
      />
    </InputContainer>
  );
};

export default VPasswordInput;
