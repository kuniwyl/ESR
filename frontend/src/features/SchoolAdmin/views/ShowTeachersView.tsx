import { useSchool } from '@/store/slices/schoolSlice.ts';
import TableComp from '@/features/SchoolAdmin/components/TableComp.tsx';
import { useState } from 'react';
import { RegisterData } from '@/model/AuthInterfaces.ts';
import { usePostTeacherMutation } from '@/store/api/teacherSlice.ts';
import TeacherList from '@/features/SchoolAdmin/components/TeacherList.tsx';

const ShowTeachersView = () => {
  const { teachers } = useSchool();
  const [postTeacher, { isLoading }] = usePostTeacherMutation();
  const [user, setUser] = useState({
    login: '',
    password: '',
    firstName: '',
    lastName: '',
  } as RegisterData);

  const handleAdd = async () => {
    await postTeacher(user);
    setUser({
      login: '',
      password: '',
      firstName: '',
      lastName: '',
    } as RegisterData);
  };

  const thead = (
    <tr>
      <th>#</th>
      <th>Login</th>
      <th>Imię</th>
      <th>Nazwisko</th>
      <th>Edytuj</th>
      <th>Usuń</th>
    </tr>
  );

  const teachersList = teachers.map(item => {
    return <TeacherList key={item.id} item={item} />;
  });

  return (
    <TableComp
      type={'Dodaj'}
      name={'nauczyciela'}
      thead={thead}
      tbody={teachersList}
      user={user}
      setUser={setUser}
      handleAdd={handleAdd}
      isLoading={isLoading}
    />
  );
};

export default ShowTeachersView;
