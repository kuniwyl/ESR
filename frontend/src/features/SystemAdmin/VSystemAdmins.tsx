import CSystemsAdmins from '@/features/systemAdmin/CSystemsAdmins.ts';
import Container from 'react-bootstrap/Container';
import { HeaderText } from '@/components/ui';
import { Table } from 'react-bootstrap';
import { PencilSquare, Trash3Fill } from 'react-bootstrap-icons';
import Status from '@/domain/dtos/Status.ts';
import ButtonEvent from '@/components/ui/ButtonEvent/ButtonEvent.tsx';

const VSystemAdmins = () => {
  const controller = CSystemsAdmins();

  return (
    <>
      <HeaderText text={'Administratorzy systemu'} />
      <Container>
        <ButtonEvent
          text={'Dodaj administratora systemu'}
          event={controller.createSystemAdmin}
        />
        <Table>
          <thead>
            <tr>
              <th>Login</th>
              <th>Imię</th>
              <th>Nazwisko</th>
              <th>Status</th>
              <th>Edytuj</th>
              <th>Usuń</th>
            </tr>
          </thead>
          <tbody>
            {controller.systemsAdmins.data?.data.map(user => (
              <tr key={user.id}>
                <td>{user.login}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{Status[user.status ?? 0]}</td>
                <td
                  onClick={() => {
                    controller.editSystemAdmin(user.id ?? 0);
                  }}
                >
                  <PencilSquare />
                </td>
                <td
                  onClick={() => {
                    controller.del(user.id ?? 0);
                  }}
                >
                  <Trash3Fill />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default VSystemAdmins;
