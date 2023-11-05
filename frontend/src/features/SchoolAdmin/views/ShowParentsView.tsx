import { useSchool } from '@/store/slices/schoolSlice.ts';
import RegisterDto from '@/model/RegisterDto.ts';
import { useState } from 'react';
import TableComp from '@/features/SchoolAdmin/components/TableComp.tsx';
import { usePostParentMutation } from '@/store/api/parentSlice.ts';
import { InputUser } from '@/components/forms';

const ShowParentsView = () => {
  const { parents, students } = useSchool();
  const [postParent, { isLoading }] = usePostParentMutation();
  const [selectUser, setSelectUser] = useState<string | null>(null);
  const [user, setUser] = useState<RegisterDto>({
    login: '',
    password: '',
    firstName: '',
    lastName: '',
  });

  const handleAddParent = async () => {
    console.log(selectUser);
    return;
    await postParent(user);
    setUser({
      login: '',
      password: '',
      firstName: '',
      lastName: '',
    });
  };

  const thead = (
    <tr>
      <th>#</th>
      <th>Login</th>
      <th>Imię</th>
      <th>Nazwisko</th>
      <th>Dziecko</th>
    </tr>
  );

  const parentsList = parents.map((item, index) => {
    return (
      <tr key={index}>
        <td>{item.id}</td>
        <td>{item.login}</td>
        <td>{item.firstName}</td>
        <td>{item.lastName}</td>
        <td>{item.student.login}</td>
      </tr>
    );
  });

  const additionalForm = (
    <InputUser
      datalist={students.map(s => s.login)}
      dataListName={'ucznia'}
      setData={setSelectUser}
    />
  );

  return (
    <TableComp
      type={'rodzica'}
      thead={thead}
      tbody={parentsList}
      user={user}
      setUser={setUser}
      handleAdd={handleAddParent}
      isLoading={isLoading}
      additionalForm={additionalForm}
    />
  );
};

export default ShowParentsView;
