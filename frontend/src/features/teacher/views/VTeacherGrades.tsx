import { useParams } from 'react-router-dom';
import CTeacherGrades from '@/features/teacher/controller/CTeacherGrades.ts';
import { HeaderText } from '@/components/ui';
import { Table } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

const VTeacherGrades = () => {
  const { id } = useParams();
  const controller = CTeacherGrades(Number.parseInt(id ?? '0'));

  return (
    <>
      <HeaderText text={'Oceny ' + controller.css?.className} />
      <Container>
        <Table>
          <thead>
            <tr>
              <th>Uczeń</th>
              <th>Oceny</th>
            </tr>
          </thead>
          <tbody>
            {[...(controller.table?.entries() ?? [])].map(entry => {
              const [key, value] = entry;
              return (
                <tr key={key}>
                  <td>{value[0].studentName}</td>
                  <td>
                    {value.map((grade, index) => {
                      return (
                        <span key={index}>
                          {grade.value}
                          {index < value.length - 1 ? ', ' : ''}
                        </span>
                      );
                    })}
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

export default VTeacherGrades;
