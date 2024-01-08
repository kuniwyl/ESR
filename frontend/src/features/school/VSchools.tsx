import CSchools from '@/features/school/CSchools.ts';
import { Table } from 'react-bootstrap';
import { PencilSquare, Trash3Fill } from 'react-bootstrap-icons';
import Container from 'react-bootstrap/Container';
import { HeaderText, SpinnerComponent } from '@/components/ui';
import Status from '@/domain/dtos/Status.ts';
import ButtonEvent from '@/components/ui/ButtonEvent/ButtonEvent.tsx';

const VSchools = () => {
  const controller = CSchools();

  const trs = controller.schools.data?.data.map(school => {
    const status = school.status || 0;
    return (
      <tr key={school.id}>
        <td>{school.name}</td>
        <td>{school.created?.toString().substring(0, 10)}</td>
        <td>{school.adminCount}</td>
        <td>{Status[status]}</td>
        <td onClick={() => controller.navigateToSchool(school.id || 0)}>
          <PencilSquare />
        </td>
        <td onClick={() => controller.deleteSchool(school.id || 0)}>
          <Trash3Fill />
        </td>
      </tr>
    );
  });

  if (controller.schools.isLoading) {
    return (
      <>
        <HeaderText text={'Szkoły'} />
        <SpinnerComponent />
      </>
    );
  }

  return (
    <>
      <HeaderText text={'Szkoły'} />
      <Container>
        <div>
          <ButtonEvent
            text={'Dodaj'}
            event={() => controller.navigateToSchool(0)}
          />
        </div>
        <Table>
          <thead>
            <tr>
              <th>Nazwa</th>
              <th>Utworzono</th>
              <th>Liczba administratorów</th>
              <th>Status</th>
              <th>Edytuj</th>
              <th>Usuń</th>
            </tr>
          </thead>
          <tbody>{trs}</tbody>
        </Table>
      </Container>
    </>
  );
};

export default VSchools;
