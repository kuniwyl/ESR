import { useParams } from 'react-router-dom';
import { HeaderText, SpinnerComponent } from '@/components/ui';
import CResetPassword from '@/features/users/resetPassword/CResetPassword.ts';
import FormTitle from '@/components/ui/FormTitle/FormTitle.tsx';
import InputContainer from '@/components/ui/InputContainer/InputContainer.tsx';
import TextInput from '@/components/forms/TextInput/TextInput.tsx';
import ButtonEvent from '@/components/ui/ButtonEvent/ButtonEvent.tsx';
import Container from 'react-bootstrap/Container';

const VResetPassword = () => {
  const { id } = useParams();
  const controller = CResetPassword(Number.parseInt(id ?? '0'));

  if (controller.user.isLoading) {
    return <SpinnerComponent />;
  }

  return (
    <>
      <HeaderText text={'Resetowanie hasła'} />
      <Container>
        <FormTitle>
          {`Resetowanie hasła dla ${controller.user.data?.login || ''}`}
        </FormTitle>
        <InputContainer>
          <TextInput
            value={controller.password.password.value}
            label={'Nowe hasło'}
            error={controller.password.password.error}
            onChange={controller.password.password.onChange}
            type={'password'}
          />
          <TextInput
            value={controller.password.repeatPassword.value}
            label={'Powtórz hasło'}
            error={controller.password.repeatPassword.error}
            onChange={controller.password.repeatPassword.onChange}
            type={'password'}
          />
        </InputContainer>
        <ButtonEvent text={'Resetuj'} event={controller.reset} />
      </Container>
    </>
  );
};

export default VResetPassword;
