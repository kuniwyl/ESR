import Container from 'react-bootstrap/Container';
import { Table } from 'react-bootstrap';
import { ButtonF } from '@/components/forms';
import { useState } from 'react';

interface EditSchoolAdminsProps {
  schoolId: number;
  schoolAdmins: UserDto[];
}

const EditSchoolAdmins = ({
  // schoolId,
  schoolAdmins,
}: EditSchoolAdminsProps) => {
  const [showToast, setShowToast] = useState<boolean>(false);

  const handleAdd = async () => {
    setShowToast(!showToast);
  };

  const renderSchoolAdmins = schoolAdmins.map(() => {
    return (
      // <DisplaySchoolAdmin
      //   key={schoolAdmin.id}
      //   schoolId={schoolId}
      //   schoolAdmin={schoolAdmin}
      // />
      <></>
    );
  });

  return (
    <Container className="mt-4">
      <ButtonF
        variant={'dark'}
        text={'Dodaj admina'}
        isLoading={false}
        onClick={() => handleAdd()}
        size={'sm'}
      />
      {/*<CreateNewAdmin*/}
      {/*  schoolId={schoolId}*/}
      {/*  showToast={showToast}*/}
      {/*  setShowToast={setShowToast}*/}
      {/*/>*/}
      <Table className="mt-3">
        <thead>
          <tr>
            <th>#</th>
            <th>Login</th>
            <th>Imie</th>
            <th>Nazwisko</th>
            <th>Edytuj</th>
            <th>Usuń</th>
          </tr>
        </thead>
        <tbody>{renderSchoolAdmins}</tbody>
      </Table>
    </Container>
  );
};

export default EditSchoolAdmins;
