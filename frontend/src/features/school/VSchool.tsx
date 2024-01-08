import CSchool from '@/features/school/CSchool.ts';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { HeaderText, SpinnerComponent } from '@/components/ui';
import TextInput from '@/components/forms/TextInput/TextInput.tsx';
import { Table } from 'react-bootstrap';
import { PencilSquare, Trash3Fill } from 'react-bootstrap-icons';
import InputContainer from '@/components/ui/InputContainer/InputContainer.tsx';
import FormTitle from '@/components/ui/FormTitle/FormTitle.tsx';
import ButtonEvent from '@/components/ui/ButtonEvent/ButtonEvent.tsx';
import VAddressInput from '@/features/address/VAddressInput.tsx';

const VSchool = () => {
  const { id } = useParams();
  const controller = CSchool(Number.parseInt(id ?? '0'));
  const schoolName =
    id == '0' ? 'Dodaj szkołę' : controller.school.data?.data.name;

  if (controller.school.isLoading) {
    return <SpinnerComponent />;
  }

  return (
    <>
      <HeaderText text={schoolName || ''} />
      <Container>
        <ButtonEvent
          className="mb-1"
          text={'Powrót'}
          event={controller.goBack}
        />
        <FormTitle>Dane szkoły</FormTitle>
        <InputContainer>
          <TextInput
            className="flex-grow-1 p-1"
            value={controller.name.value}
            label={'Nazwa szkoły'}
            error={controller.name.error}
            onChange={controller.name.onChange}
          />
          <TextInput
            className="flex-grow-1 p-1"
            value={controller.email.value}
            label={'Email szkoły'}
            error={controller.email.error}
            onChange={controller.email.onChange}
          />
          <TextInput
            className="flex-grow-1 p-1"
            value={controller.phone.value}
            label={'Telefon szkoły'}
            error={controller.phone.error}
            onChange={controller.phone.onChange}
          />
          <TextInput
            className="flex-grow-1 p-1"
            value={controller.website.value}
            label={'Strona szkoły*'}
            error={controller.website.error}
            onChange={controller.website.onChange}
          />
        </InputContainer>

        <VAddressInput name={'Adres szkoły'} controller={controller.address} />

        <p>* - nie wymagane</p>
        <div>
          <div className="w-100 d-flex justify-content-end">
            {Number.parseInt(id ?? '0') === 0 ? (
              <ButtonEvent text={'Dodaj'} event={controller.createSchool} />
            ) : (
              <ButtonEvent
                text={'Zapisz'}
                event={controller.updateSchool}
                successText={'Zapisano'}
                loading={controller.update.isLoading}
                success={controller.update.isSuccess}
              />
            )}
          </div>
        </div>

        <hr />
        {id !== '0' && (
          <>
            <div>
              <ButtonEvent
                text={'Dodaj admina'}
                event={controller.addSchoolAdmin}
              />
            </div>
            {controller.school.data?.data.admins.length === 0 ? (
              <div className="w-100 d-flex justify-content-center mb-5">
                Brak administatorów
              </div>
            ) : (
              <Table className="mb-5">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Imię</th>
                    <th>Nazwisko</th>
                    <th>Login</th>
                    <th>Edytuj</th>
                    <th>Usuń</th>
                  </tr>
                </thead>
                <tbody>
                  {controller.school.data?.data.admins.map(schoolAdmin => {
                    return (
                      <tr key={schoolAdmin.id}>
                        <td>{schoolAdmin.id}</td>
                        <td>{schoolAdmin.firstName}</td>
                        <td>{schoolAdmin.lastName}</td>
                        <td>{schoolAdmin.login}</td>
                        <td
                          onClick={() => {
                            controller.editSchoolAdmin(schoolAdmin.id);
                          }}
                        >
                          <PencilSquare />
                        </td>
                        <td
                          onClick={() => {
                            controller.delAdmin(schoolAdmin.id);
                          }}
                        >
                          <Trash3Fill />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            )}
          </>
        )}
      </Container>
    </>
  );
};

export default VSchool;
