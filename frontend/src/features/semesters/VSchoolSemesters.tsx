import Container from 'react-bootstrap/Container';
import { HeaderText } from '@/components/ui';
import { Table } from 'react-bootstrap';
import CSemesters from '@/features/semesters/CSemesters.ts';
import ButtonEvent from '@/components/ui/ButtonEvent/ButtonEvent.tsx';

const VSchoolSemesters = () => {
  const controller = CSemesters();

  return (
    <>
      <HeaderText text={'Semestry'} />
      <Container>
        <ButtonEvent
          text={'Dodaj semester'}
          event={controller.navigateToSemester}
        />
        <Table>
          <thead>
            <tr>
              <th>Nazwa</th>
              <th>Start</th>
              <th>Koniec</th>
              <th>Ustaw jako aktywny</th>
              <th>Edytuj</th>
              <th>Usuń</th>
            </tr>
          </thead>
          <tbody>
            {controller.semesters.data?.data.map(semester => {
              return (
                <tr key={semester.id}>
                  <td>{semester.name}</td>
                  <td>{semester.startDate.toString().slice(0, 10)}</td>
                  <td>{semester.endDate.toString().slice(0, 10)}</td>
                  <td>
                    {semester.id === controller.semester.semester?.id ? (
                      <ButtonEvent text={'Aktywny'} event={() => {}} disabled />
                    ) : (
                      <ButtonEvent
                        text={'Aktywny'}
                        event={() =>
                          controller.semester.handleSemesterChange(semester)
                        }
                      />
                    )}
                  </td>
                  <td>
                    <ButtonEvent
                      text={'Edytuj'}
                      event={() => controller.semesterDetail(semester.id ?? 0)}
                    />
                  </td>
                  <td>
                    <ButtonEvent
                      text={'Usuń'}
                      event={() => controller.removeSemester(semester.id ?? 0)}
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

export default VSchoolSemesters;
