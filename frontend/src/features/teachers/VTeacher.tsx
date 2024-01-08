import { HeaderText } from '@/components/ui';
import Container from 'react-bootstrap/Container';
import FormTitle from '@/components/ui/FormTitle/FormTitle.tsx';
import VUserInput from '@/features/users/userInput/VUserInput.tsx';
import { useParams } from 'react-router-dom';
import CTeacher from '@/features/teachers/CTeacher.ts';
import VAddressInput from '@/features/address/VAddressInput.tsx';
import VPasswordInput from '@/features/users/passwordInput/VPasswordInput.tsx';
import ButtonEvent from '@/components/ui/ButtonEvent/ButtonEvent.tsx';

const VTeacher = () => {
  const { id } = useParams();
  const controller = CTeacher(Number.parseInt(id ?? '0'));

  return (
    <>
      <HeaderText text={'Nauczyciel'} />
      <Container>
        <ButtonEvent text={'Powrót'} event={controller.goBack} />
        <FormTitle>Dane nauczyciela</FormTitle>
        <VUserInput controller={controller.user} />

        {!id && (
          <>
            <FormTitle>Hasło</FormTitle>
            <VPasswordInput controller={controller.password} />
          </>
        )}

        <VAddressInput name={'Adres'} controller={controller.address} />

        <p>* - nie wymagane</p>
        {!id ? (
          <ButtonEvent text={'Stwórz'} event={controller.create} />
        ) : (
          <>
            <ButtonEvent
              text={'Zapisz'}
              event={controller.update}
              successText={'Zapisano'}
              success={controller.updateTeacher.isSuccess}
              loading={controller.updateTeacher.isLoading}
            />
            <ButtonEvent
              text={'Resetuj hasło'}
              event={controller.resetPassword}
            />
          </>
        )}
      </Container>
    </>
  );
};

export default VTeacher;
