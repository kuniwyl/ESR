import { useParams } from 'react-router-dom';
import CSchoolAdmin from '@/features/schoolAdmin/CSchoolAdmin.ts';
import InputContainer from '@/components/ui/InputContainer/InputContainer.tsx';
import TextInput from '@/components/forms/TextInput/TextInput.tsx';
import Container from 'react-bootstrap/Container';
import FormTitle from '@/components/ui/FormTitle/FormTitle.tsx';
import { HeaderText } from '@/components/ui';
import VAddressInput from '@/features/address/VAddressInput.tsx';
import ButtonEvent from '@/components/ui/ButtonEvent/ButtonEvent.tsx';

const VSchoolAdmin = () => {
  const { id, adminId } = useParams();
  const controller = CSchoolAdmin(
    Number.parseInt(id ?? '0'),
    Number.parseInt(adminId ?? '0'),
  );

  return (
    <div>
      <HeaderText text={'Administrator szkoły'} />
      <Container>
        <ButtonEvent
          className="m-1"
          text={'Powrót'}
          event={controller.goBack}
        />
        <FormTitle>Dane administratora</FormTitle>
        <InputContainer>
          <TextInput
            value={controller.firstName.value}
            label={'Imię'}
            error={controller.firstName.error}
            onChange={controller.firstName.onChange}
          />
          <TextInput
            value={controller.lastName.value}
            label={'Nazwisko'}
            error={controller.lastName.error}
            onChange={controller.lastName.onChange}
          />
          <TextInput
            value={controller.login.value}
            label={'Login'}
            error={controller.login.error}
            onChange={controller.login.onChange}
          />
          <TextInput
            value={controller.phone.value}
            label={'Telefon'}
            error={controller.phone.error}
            onChange={controller.phone.onChange}
          />
        </InputContainer>

        {(adminId === '0' || !adminId) && (
          <>
            <FormTitle>Hasło</FormTitle>
            <InputContainer>
              <TextInput
                value={controller.password.value}
                label={'Hasło'}
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
          </>
        )}

        <VAddressInput
          name={'Address zamieszkania'}
          controller={controller.address}
        />

        <p>* - nie wymagane</p>

        {adminId === '0' || !adminId ? (
          <ButtonEvent
            className="mb-1"
            text={'Dodaj'}
            event={controller.createAdmin}
          />
        ) : (
          <>
            <ButtonEvent
              className="mb-1"
              text={'Zapisz'}
              event={controller.updateAdmins}
              successText={'Zapisano'}
              loading={controller.updateAdmin.isLoading}
              success={controller.updateAdmin.isSuccess}
            />
            <ButtonEvent
              className="mb-1"
              text={'Resetuj hasło'}
              event={controller.resetPassword}
            />
          </>
        )}
      </Container>
    </div>
  );
};

export default VSchoolAdmin;
