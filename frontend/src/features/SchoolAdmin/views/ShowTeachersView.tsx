import { useSchool } from '@/store/slices/schoolSlice.ts';
import Container from 'react-bootstrap/Container';
import { Table } from 'react-bootstrap';
import { ButtonF } from '@/components/forms';

const ShowTeachersView = () => {
  const { teachers } = useSchool();

  const teachersList = teachers.map((item, index) => {
    return (
      <tr key={index}>
        <td>{item.id}</td>
        <td>{item.login}</td>
        <td>{item.firstName}</td>
        <td>{item.lastName}</td>
      </tr>
    );
  });

  return (
    <Container className="mt-3">
      <ButtonF
        variant={'dark'}
        text={'Dodaj nauczyciela'}
        isLoading={false}
        onClick={() => {}}
        size={'sm'}
      />
      <Table className="mt-3">
        <thead>
          <tr>
            <th>#</th>
            <th>Login</th>
            <th>Imię</th>
            <th>Nazwisko</th>
          </tr>
        </thead>
        <tbody>{teachersList}</tbody>
      </Table>
    </Container>
  );
};

export default ShowTeachersView;
