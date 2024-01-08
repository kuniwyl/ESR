import Container from 'react-bootstrap/Container';
import { HeaderText } from '@/components/ui';
import { Table } from 'react-bootstrap';
import CClasses from '@/features/classes/CClasses.ts';
import { PencilSquare, Trash3Fill } from 'react-bootstrap-icons';
import ButtonEvent from '@/components/ui/ButtonEvent/ButtonEvent.tsx';
import Status from '@/domain/dtos/Status.ts';

const VClasses = () => {
  const controller = CClasses();

  if (controller.classes.data?.data === undefined) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <HeaderText text={'Klasy'} />
      <Container>
        <ButtonEvent text={'Dodaj klasę'} event={controller.addClass} />
        <Table>
          <thead>
            <tr>
              <th>Numer</th>
              <th>Nazwa</th>
              <th>Nauczyciel</th>
              <th>Status</th>
              <th>Edytuj</th>
              <th>Usuń</th>
            </tr>
          </thead>
          <tbody>
            {controller.classes.data?.data &&
              controller.classes.data.data.map(item => {
                return (
                  <tr key={item.id}>
                    <td>{item.nameId}</td>
                    <td>{item.name}</td>
                    <td>{item.teacherName}</td>
                    <td>{Status[item.status ?? 0]}</td>
                    <td onClick={() => controller.navigateToEditClass(item.id)}>
                      <PencilSquare />
                    </td>
                    <td onClick={() => controller.deleteClassById(item.id)}>
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

export default VClasses;
