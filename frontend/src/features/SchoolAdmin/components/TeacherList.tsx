// import { PencilSquare, TrashFill } from 'react-bootstrap-icons';
// import { SpinnerComponent } from '@/components/ui';
// import { useState } from 'react';
import UserShortDto from '@/domain/dtos/UserShortDto.ts';
// import RegisterDto from "@/domain/dtos/RegisterDto.ts";

interface TeacherListProps {
  item: UserShortDto;
}

const TeacherList = ({ item }: TeacherListProps) => {
  // const [user, setUser] = useState<RegisterDto>({
  //   login: item.login,
  //   password: '',
  //   firstName: item.firstName,
  //   lastName: item.lastName,
  // } as RegisterDto);
  // const [show, setShow] = useState(false);

  // const handleAdd = async () => {
  //   await putTeacher({ id: Number.parseInt(item.id), teacher: user });
  // };
  //
  // const handleDelete = async () => {
  //   const confirm = window.confirm(
  //     `Czy na pewno chcesz usunąć nauczyciela ${item.firstName} ${item.lastName}?`,
  //   );
  //   if (!confirm) return;
  //   await deleteTeacher(Number.parseInt(item.id));
  // };

  return (
    <>
      <tr key={'teacher' + item.id}>
        <td>{item.id}</td>
        <td>{item.login}</td>
        <td>{item.firstName}</td>
        <td>{item.lastName}</td>
        {/*<td>*/}
        {/*  <PencilSquare onClick={() => setShow(!show)} />*/}
        {/*  <AddUser*/}
        {/*    type={'Edytuj'}*/}
        {/*    name={'nauczyciela'}*/}
        {/*    user={user}*/}
        {/*    setUser={setUser}*/}
        {/*    show={show}*/}
        {/*    setShow={setShow}*/}
        {/*    handleAdd={handleAdd}*/}
        {/*    isLoading={isLoading}*/}
        {/*  />*/}
        {/*</td>*/}
        {/*<td onClick={() => handleDelete()}>*/}
        {/*  {isDeleting ? <SpinnerComponent /> : <TrashFill />}*/}
        {/*</td>*/}
      </tr>
    </>
  );
};

export default TeacherList;
