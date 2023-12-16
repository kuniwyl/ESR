// import { useSchool } from '@/store/slices/schoolSlice.ts';
// import RegisterDto from '@/Domain/Model/RegisterDto.ts';
// import { useState } from 'react';
// import TableComp from '@/features/SchoolAdmin/components/TableComp.tsx';
// import { usePostParentMutation } from '@/store/api/parentSlice.ts';
// import { InputUser } from '@/components/forms';
// import ParentList from '@/features/SchoolAdmin/components/ParentList.tsx';

const ShowParentsView = () => {
  // const { parents, students } = useSchool();
  // const [postParent, { isLoading }] = usePostParentMutation();
  // const [selectUser, setSelectUser] = useState<string | null>(null);
  // const [error, setError] = useState<string | null>(null);
  // const [user, setUser] = useState<RegisterDto>({
  //   login: '',
  //   password: '',
  //   firstName: '',
  //   lastName: '',
  // });
  //
  // const handleAddParent = async () => {
  //   const student = students.filter(s => s.login === selectUser)[0];
  //   if (!student) {
  //     setError('Nie znaleziono ucznia');
  //     setTimeout(() => setError(null), 2000);
  //     return;
  //   }
  //   await postParent({ parent: user, studentId: Number.parseInt(student.id) });
  //   setUser({
  //     login: '',
  //     password: '',
  //     firstName: '',
  //     lastName: '',
  //   });
  //   setSelectUser(null);
  // };
  //
  // const setSelectUserValue = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const value = e.target.value;
  //   setSelectUser(value);
  // };
  //
  // const thead = (
  //   <tr>
  //     <th>#</th>
  //     <th>Login</th>
  //     <th>Imię</th>
  //     <th>Nazwisko</th>
  //     <th>Dziecko</th>
  //     <th>Edytuj</th>
  //     <th>Usuń</th>
  //   </tr>
  // );
  //
  // const parentsList = parents.map(item => {
  //   return <ParentList key={item.id} item={item} />;
  // });
  //
  // const additionalForm = (
  //   <InputUser
  //     datalist={students.map(s => s.login)}
  //     dataListName={'ucznia'}
  //     setData={setSelectUserValue}
  //   />
  // );

  return (
    // <TableComp
    //   type={'Dodaj'}
    //   name={'rodzica'}
    //   thead={thead}
    //   tbody={parentsList}
    //   user={user}
    //   setUser={setUser}
    //   handleAdd={handleAddParent}
    //   isLoading={isLoading}
    //   error={error}
    //   additionalForm={additionalForm}
    // />
    <></>
  );
};

export default ShowParentsView;
