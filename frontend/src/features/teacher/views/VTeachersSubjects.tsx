import CTeacherMain from '@/features/teacher/controller/CTeacherMain.ts';
import Container from 'react-bootstrap/Container';
import { HeaderText } from '@/components/ui';
import { Table } from 'react-bootstrap';
import { PencilSquare } from 'react-bootstrap-icons';
import ButtonEvent from '@/components/ui/ButtonEvent/ButtonEvent.tsx';

const VTeachersSubjects = () => {
  const controller = CTeacherMain();

  return (
    <>
      <HeaderText text={'Przedmioty'} />
      <Container>
        <Table className="my-2" striped hover responsive>
          <thead>
            <tr>
              <th>Przedmiot</th>
              <th>Klasa</th>
              <th>Oceny</th>
              <th>Frekfencja</th>
            </tr>
          </thead>
          <tbody>
            {controller.css.data?.data.map((i, idx) => {
              return (
                <tr key={idx}>
                  <td>{i.subjectName}</td>
                  <td>{i.className}</td>
                  <td>
                    <ButtonEvent
                      text={<PencilSquare />}
                      event={() => controller.navigateToGrades(i.id)}
                    />
                  </td>
                  <td>
                    <ButtonEvent
                      text={<PencilSquare />}
                      event={() => controller.navigateToFrequencies(i.id)}
                    />
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

export default VTeachersSubjects;
