import { useSchool } from '@/store/slices/schoolSlice.ts';
import TableComp from '@/features/SchoolAdmin/components/TableComp.tsx';
import { useState } from 'react';
import { RegisterData } from '@/model/AuthInterfaces.ts';
import { usePostStudentMutation } from '@/store/api/studentSlice.ts';
import StudentList from '@/features/SchoolAdmin/components/StudentList.tsx';

const ShowStudentsView = () => {
  const { students } = useSchool();
  const [postStudent, { isLoading }] = usePostStudentMutation();

  const [user, setUser] = useState({
    login: '',
    password: '',
    firstName: '',
    lastName: '',
  } as RegisterData);

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

  const studentsList = students.map(item => {
    return <StudentList key={item.id} item={item} />;
  });

  return (
    <TableComp
      type={'Dodaj'}
      name={'ucznia'}
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
