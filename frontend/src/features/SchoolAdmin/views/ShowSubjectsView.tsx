import { useSchool } from '@/store/slices/schoolSlice.ts';
import Container from 'react-bootstrap/Container';
import { Table } from 'react-bootstrap';

const ShowSubjectsView = () => {
  const { subjects } = useSchool();

  const subjectsList = subjects.map((item, index) => {
    return (
      <tr key={index}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.description}</td>
        <td>{item.teacher.login}</td>
      </tr>
    );
  });

  return (
    <Container className="mt-3">
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Nazwa</th>
            <th>Opis</th>
            <th>Nauczyciel</th>
          </tr>
        </thead>
        <tbody>{subjectsList}</tbody>
      </Table>
    </Container>
  );
};

export default ShowSubjectsView;
