import { useSchool } from '@/store/slices/schoolSlice.ts';
import TableComp from '@/features/SchoolAdmin/components/TableComp.tsx';
import { useEffect, useState } from 'react';
import { RegisterData } from '@/model/AuthInterfaces.ts';
import {
  useDeleteStudentMutation,
  usePostStudentMutation,
} from '@/store/api/studentSlice.ts';
import { PencilSquare, TrashFill } from 'react-bootstrap-icons';

const ShowStudentsView = () => {
  const { students } = useSchool();
  const [postStudent, { isLoading }] = usePostStudentMutation();
  const [deleteStudent, { isLoading: isDeleteLoading }] =
    useDeleteStudentMutation();
  const [user, setUser] = useState({
    login: '',
    password: '',
    firstName: '',
    lastName: '',
  } as RegisterData);

  useEffect(() => {
    console.log(students);
  }, [students]);

  const handleAdd = async () => {
    await postStudent(user);
    setUser({
      login: '',
      password: '',
      firstName: '',
      lastName: '',
    } as RegisterData);
  };

  const thead = (
    <tr>
      <th>Id</th>
      <th>Login</th>
      <th>Imię</th>
      <th>Nazwisko</th>
      <th>Edytuj</th>
      <th>Usuń</th>
    </tr>
  );

  const studentsList = students.map((item, index) => {
    return (
      <tr key={index}>
        <td>{item.id}</td>
        <td>{item.login}</td>
        <td>{item.firstName}</td>
        <td>{item.lastName}</td>
        <td>
          <PencilSquare />
        </td>
        <td>
          <TrashFill />
        </td>
      </tr>
    );
  });

  return (
    <TableComp
      type={'ucznia'}
      thead={thead}
      tbody={studentsList}
      user={user}
      setUser={setUser}
      handleAdd={handleAdd}
      isLoading={isLoading}
    />
  );
};

export default ShowStudentsView;
