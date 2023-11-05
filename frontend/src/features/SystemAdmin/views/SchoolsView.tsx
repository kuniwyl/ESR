import Container from 'react-bootstrap/Container';
import { Table } from 'react-bootstrap';
import {
  useDeleteSchoolMutation,
  useGetSchoolsQuery,
} from '@/store/api/systemAdminSlice.ts';
import { SpinnerComponent } from '@/components/ui';
import { PencilSquare, TrashFill } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import { CREATE_SCHOOL, EDIT_SCHOOL } from '@/config.ts';
import { ButtonF } from '@/components/forms';

const SchoolsView = () => {
  const { data, isLoading } = useGetSchoolsQuery();
  const [deleteSchool, { isLoading: isDeleting }] = useDeleteSchoolMutation();
  const navigation = useNavigate();

  const handleDelete = async (id: string) => {
    const alert = confirm('Czy na pewno chcesz usunąć szkołę?');
    if (!alert) {
      return;
    }

    const res = await deleteSchool(Number.parseInt(id)).unwrap();
    if (res) {
      console.log(res);
    }
  };

  if (isLoading) {
    return (
      <Container className="text-center mt-5">
        <SpinnerComponent />
      </Container>
    );
  }

  const bodyMap = data?.map((school, index) => {
    return (
      <tr key={index}>
        <td>{school.id}</td>
        <td>{school.name}</td>
        <td>{school.schoolAdmins.length}</td>
        <td onClick={() => navigation(EDIT_SCHOOL + school.id)}>
          <PencilSquare />
        </td>
        <td onClick={() => handleDelete(school.id)}>
          {isDeleting ? <SpinnerComponent /> : <TrashFill />}
        </td>
      </tr>
    );
  });

  return (
    <Container className="mt-3">
      <ButtonF
        variant={'dark'}
        text={'Dodaj szkołe'}
        isLoading={false}
        onClick={() => navigation(CREATE_SCHOOL)}
        size={'sm'}
      />
      <Table className="mt-2">
        <thead>
          <tr>
            <th>#</th>
            <th>Nazwa</th>
            <th>Liczba adminów</th>
            <th>Edytuj</th>
            <th>Usuń</th>
          </tr>
        </thead>
        <tbody>{bodyMap}</tbody>
      </Table>
    </Container>
  );
};

export default SchoolsView;
