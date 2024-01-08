import { useParams } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import { PencilSquare, Trash3Fill } from 'react-bootstrap-icons';
import CClassStudents from '@/features/classes/CClassStudents.ts';
import Status from '@/domain/dtos/Status.ts';

const VClassStudents = () => {
  const { id } = useParams();
  const controller = CClassStudents(Number.parseInt(id ?? '0'));

  const map = controller.students.data?.data.map(student => {
    return (
      <tr key={student.id}>
        <td>{student.login}</td>
        <td>{student.firstName + ' ' + student.lastName}</td>
        <td>{student.parent.firstName + ' ' + student.parent.lastName}</td>
        <td>{Status[student.status]}</td>
        <td>
          <button
            onClick={() =>
              controller.navigateToEditStudent(student.id.toString())
            }
            className="btn btn-dark"
          >
            <PencilSquare />
          </button>
        </td>
        <td>
          <button
            onClick={() => controller.deleteStudentById(student.id)}
            className="btn btn-dark"
          >
            <Trash3Fill />
          </button>
        </td>
      </tr>
    );
  });

  return (
    <>
      <div className="mt-2">
        <button
          onClick={controller.navigateToAddStudent}
          className="btn btn-dark"
        >
          Dodaj ucznia
        </button>
      </div>
      <Table>
        <thead>
          <tr>
            <th>Login</th>
            <th>Pełne</th>
            <th>Rodzic</th>
            <th>Status</th>
            <th>Edytuj</th>
            <th>Usuń</th>
          </tr>
        </thead>
        <tbody>{map}</tbody>
      </Table>
    </>
  );
};

export default VClassStudents;
