import Container from 'react-bootstrap/Container';
import { HeaderText } from '@/components/ui';
import { Table } from 'react-bootstrap';
import CSubjects from '@/features/subject/CSubjects.ts';
import { PencilSquare, Trash3Fill } from 'react-bootstrap-icons';
import ButtonEvent from '@/components/ui/ButtonEvent/ButtonEvent.tsx';
import Status from '@/domain/dtos/Status.ts';

const VSubjects = () => {
  const controller = CSubjects();

  const map = controller.subjects.data?.data.map(subject => (
    <tr key={subject.id}>
      <td>{subject.name}</td>
      <td>{subject.teacherName}</td>
      <td>{subject.created?.toString().substring(0, 10)}</td>
      <td>{Status[subject.status ?? 0]}</td>
      <td>
        <ButtonEvent
          text={<PencilSquare className="my-auto" />}
          event={() => controller.navigateToEditSubject(subject.id ?? 0)}
        />
      </td>
      <td>
        <ButtonEvent
          text={<Trash3Fill />}
          event={() => controller.handleDeleteSubject(subject.id ?? 0)}
        />
      </td>
    </tr>
  ));

  return (
    <>
      <HeaderText text={'Przedmioty'} />
      <Container>
        <ButtonEvent
          text={'Dodaj przedmiot'}
          event={controller.navigateToAddSubject}
        />
        <Table>
          <thead>
            <tr>
              <th>Nazwa</th>
              <th>Nauczyciel</th>
              <th>Utworzony</th>
              <th>Status</th>
              <th>Edytuj</th>
              <th>Usuń</th>
            </tr>
          </thead>
          <tbody>{map}</tbody>
        </Table>
      </Container>
    </>
  );
};

export default VSubjects;
