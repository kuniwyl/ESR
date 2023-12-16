import { PencilSquare } from 'react-bootstrap-icons';
// import { SpinnerComponent } from '@/components/ui';
import { useState } from 'react';
import UserShortDto from '@/domain/dtos/UserShortDto.ts';
// import RegisterDto from "@/domain/dtos/RegisterDto.ts";

interface StudentListProps {
  item: UserShortDto;
}

const StudentList = ({ item }: StudentListProps) => {
  // const [student, setStudent] = useState<RegisterDto>({
  //   login: item.login,
  //   password: '',
  //   firstName: item.firstName,
  //   lastName: item.lastName,
  // });
  const [show, setShow] = useState(false);

  // const handleEdit = async () => {
  //   await putStudent({ id: Number.parseInt(item.id), student: student });
  // };
  //
  // const handleDelete = async (id: string) => {
  //   const confirm = window.confirm(`Czy na pewno chcesz usunąć ucznia?`);
  //   if (!confirm) return;
  //   await deleteStudent(Number.parseInt(id));
  // };

  return (
    <>
      <tr key={'student' + item.id}>
        <td>{item.id}</td>
        <td>{item.login}</td>
        <td>{item.firstName}</td>
        <td>{item.lastName}</td>
        <td>
          <PencilSquare onClick={() => setShow(!show)} />
          {/*<AddUser*/}
          {/*  type={'Edytuj'}*/}
          {/*  name={'ucznia'}*/}
          {/*  user={student}*/}
          {/*  setUser={setStudent}*/}
          {/*  show={show}*/}
          {/*  setShow={setShow}*/}
          {/*  handleAdd={handleEdit}*/}
          {/*  isLoading={isLoading}*/}
          {/*/>*/}
        </td>
        {/*<td onClick={() => handleDelete(item.id)}>*/}
        {/*  {isDeleteLoading ? <SpinnerComponent /> : <TrashFill />}*/}
        {/*</td>*/}
      </tr>
    </>
  );
};

export default StudentList;
