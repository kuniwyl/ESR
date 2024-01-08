import Container from 'react-bootstrap/Container';
import { HeaderText } from '@/components/ui';
import { Table } from 'react-bootstrap';
import CTeachers from '@/features/teachers/CTeachers.ts';
import { PencilSquare, Trash3Fill } from 'react-bootstrap-icons';
import ButtonEvent from '@/components/ui/ButtonEvent/ButtonEvent.tsx';

const VTeachersShow = () => {
  const controller = CTeachers();

  if (controller.teachers.data?.data === undefined) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <HeaderText text={'Nauczyciele'} />
      <Container>
        <ButtonEvent
          text={'Dodaj nauczyciela'}
          event={controller.createTeacher}
        />
        <Table>
          <thead>
            <tr>
              <th>Login</th>
              <th>Imię</th>
              <th>Nazwisko</th>
              <th>Edytuj</th>
              <th>Usuń</th>
            </tr>
          </thead>
          <tbody>
            {controller.teachers.data?.data.map(teacher => {
              return (
                <tr key={teacher.id}>
                  <td>{teacher.login}</td>
                  <td>{teacher.firstName}</td>
                  <td>{teacher.lastName}</td>
                  <td onClick={() => controller.editTeacher(teacher.id)}>
                    <PencilSquare />
                  </td>
                  <td onClick={() => controller.deleteTeacherById(teacher.id)}>
                    <Trash3Fill />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default VTeachersShow;
