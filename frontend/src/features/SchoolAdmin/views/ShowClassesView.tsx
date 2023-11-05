import Container from 'react-bootstrap/Container';
import { Table } from 'react-bootstrap';
import { useSchool } from '@/store/slices/schoolSlice.ts';

const ShowClassesView = () => {
  const { classes } = useSchool();

  const classesList = classes.map((item, index) => {
    return (
      <tr key={index}>
        <td>{index}</td>
        <td>{item.name}</td>
        <td>{item.description}</td>
        <td>{item.teacherShort.login}</td>
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
        <tbody>{classesList}</tbody>
      </Table>
    </Container>
  );
};

export default ShowClassesView;
