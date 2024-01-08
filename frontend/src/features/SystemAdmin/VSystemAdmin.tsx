import { useParams } from 'react-router-dom';
import CSystemAdmin from '@/features/systemAdmin/CSystemAdmin.ts';
import { HeaderText } from '@/components/ui';
import Container from 'react-bootstrap/Container';
import ButtonEvent from '@/components/ui/ButtonEvent/ButtonEvent.tsx';
import FormTitle from '@/components/ui/FormTitle/FormTitle.tsx';
import VUserInput from '@/features/users/userInput/VUserInput.tsx';
import VPasswordInput from '@/features/users/passwordInput/VPasswordInput.tsx';
import VAddressInput from '@/features/address/VAddressInput.tsx';

const VSystemAdmin = () => {
  const { id } = useParams();
  const controller = CSystemAdmin(Number.parseInt(id ?? '0'));

  return (
    <>
      <HeaderText text={'Administrator systemu'} />
      <Container className="mb-5">
        <ButtonEvent text={'Powrót'} event={controller.goBack} />

        <FormTitle>Dane administratora systemu</FormTitle>
        <VUserInput controller={controller.user} />

        {!id && (
          <>
            <FormTitle>Hasło</FormTitle>
            <VPasswordInput controller={controller.password} />
          </>
        )}

        <VAddressInput name={'Adres'} controller={controller.address} />

        {!id ? (
          <ButtonEvent text={'Dodaj'} event={controller.create} />
        ) : (
          <ButtonEvent
            text={'Zapisz'}
            event={controller.update}
            loading={controller.put.isLoading}
            success={controller.put.isSuccess}
            successText={'Zapisano'}
          />
        )}
      </Container>
    </>
  );
};

export default VSystemAdmin;
