import CStudSubjects from '@/features/student/subjects/CStudSubjects.ts';
import Container from 'react-bootstrap/Container';
import { HeaderText } from '@/components/ui';
import ButtonEvent from '@/components/ui/ButtonEvent/ButtonEvent.tsx';
import { Table } from 'react-bootstrap';
import TdGrade from '@/components/ui/TdGrade/TdGrade.tsx';
import TdFinalGrade from '@/components/ui/TdGrade/TdFinalGrade.tsx';
import FrequenceDisplay from '@/components/ui/FrequenceDisplay/FrequenceDisplay.tsx';

const VStudSubjects = () => {
  const controller = CStudSubjects();

  return (
    <>
      <HeaderText text={'Oceny'} />
      <Container>
        <ButtonEvent text={'Powrót'} event={controller.goBack} />
        <Table>
          <thead>
            <tr>
              <th>Przedmiot</th>
              <th>Oceny</th>
              <th>Końcowa</th>
              <th>Frekfencja</th>
            </tr>
          </thead>
          <tbody>
            {controller.css.data?.data.classSubjectSemesters.map(css => (
              <tr key={css.id}>
                <td>{css.subjectName}</td>
                <td>
                  <div className={'d-flex'}>
                    {controller.css.data?.data.grades.map(grade => {
                      if (grade.classSubjectSemesterId === css.id) {
                        return <TdGrade grade={grade} />;
                      }
                    })}
                  </div>
                </td>
                <td>
                  {controller.css.data?.data.finalGrades.map(finalGrade => {
                    if (finalGrade.classSubjectSemesterId === css.id) {
                      return <TdFinalGrade grade={finalGrade} />;
                    }
                  })}
                </td>
                <td>
                  <div className={'d-flex'}>
                    {controller.css.data?.data.presences.map(presence => {
                      console.log(presence);
                      if (presence.cssId === css.id) {
                        return <FrequenceDisplay frequence={presence} />;
                      }
                    })}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default VStudSubjects;
