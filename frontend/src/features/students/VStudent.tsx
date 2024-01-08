import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { HeaderText } from '@/components/ui';
import CStudent from '@/features/students/CStudent.ts';
import ButtonEvent from '@/components/ui/ButtonEvent/ButtonEvent.tsx';
import FormTitle from '@/components/ui/FormTitle/FormTitle.tsx';
import InputContainer from '@/components/ui/InputContainer/InputContainer.tsx';
import TextInput from '@/components/forms/TextInput/TextInput.tsx';
import VUserInput from '@/features/users/userInput/VUserInput.tsx';
import VPasswordInput from '@/features/users/passwordInput/VPasswordInput.tsx';
import VAddressInput from '@/features/address/VAddressInput.tsx';
import Form from 'react-bootstrap/Form';

const VStudent = () => {
  const { id, studentId } = useParams();
  const controller = CStudent(
    Number.parseInt(id ?? '0'),
    Number.parseInt(studentId ?? '0'),
  );

  return (
    <>
      <HeaderText text={'Dodaj ucznia'} />
      <Container>
        <ButtonEvent text={'Powrót'} event={controller.goBack} />
        <hr />

        <FormTitle>Dane ucznia</FormTitle>
        <InputContainer>
          <TextInput
            value={controller.pesel.value}
            label={'Pesel'}
            error={controller.pesel.error}
            onChange={controller.pesel.onChange}
          />
          <VUserInput controller={controller.studentUser} />
        </InputContainer>
        {!studentId && (
          <>
            <FormTitle>Hasło ucznia</FormTitle>
            <VPasswordInput controller={controller.studentPassword} />
          </>
        )}

        <hr />

        <FormTitle>Dane rodzica</FormTitle>
        <InputContainer>
          <VUserInput controller={controller.parentUser} />
        </InputContainer>
        {!studentId && (
          <>
            <FormTitle>Hasło rodzica</FormTitle>
            <VPasswordInput controller={controller.parentPassword} />
          </>
        )}

        <hr />
        <VAddressInput
          name={'Addres ucznia'}
          controller={controller.studentAddress}
        />

        <Form.Check
          type="checkbox"
          label="Adres rodzica taki sam jak adres ucznia"
          onChange={controller.handleCheckboxChange}
          checked={controller.isDifferentAddress}
        />

        {!controller.isDifferentAddress && (
          <VAddressInput
            name={'Addres rodzica'}
            controller={controller.parentAddress}
          />
        )}

        <p>* - nie wymagane</p>

        {!studentId ? (
          <ButtonEvent text={'Stwórz'} event={controller.create} />
        ) : (
          <>
            <ButtonEvent
              text={'Zapisz'}
              event={controller.edit}
              successText={'Zapisano'}
              success={controller.updateStudent.isSuccess}
              loading={controller.updateStudent.isLoading}
            />
            <ButtonEvent
              text={'Resetuj hasło ucznia'}
              event={controller.studentPasswordReset}
            />
            <ButtonEvent
              text={'Resetuj hasło rodzica'}
              event={controller.parentPasswordReset}
            />
          </>
        )}
      </Container>
    </>
  );
};

export default VStudent;
