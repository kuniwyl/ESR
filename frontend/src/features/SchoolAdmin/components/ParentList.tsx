import { PencilSquare } from 'react-bootstrap-icons';
import { useState } from 'react';
import ParentDto from '@/domain/dtos/ParentDto.ts';

interface ParentListProps {
  item: ParentDto;
}

const ParentList = ({ item }: ParentListProps) => {
  const [show, setShow] = useState(false);
  // const [user, setUser] = useState<RegisterDto>({
  //   login: item.login,
  //   password: '',
  //   firstName: item.firstName,
  //   lastName: item.lastName,
  // } as RegisterDto);

  // const handleAdd = async () => {
  //   await putParent({ id: Number.parseInt(item.id), parent: user });
  //   setUser({
  //     login: '',
  //     password: '',
  //     firstName: '',
  //     lastName: '',
  //   } as RegisterDto);
  // };

  // const handleDelete = async () => {
  //   const confirm = window.confirm(
  //     `Czy na pewno chcesz usunąć rodzica ${item.firstName} ${item.lastName}?`,
  //   );
  //   if (!confirm) return;
  //   await deleteParent(Number.parseInt(item.id));
  // };

  return (
    <tr key={'parent' + item.id}>
      <td>{item.id}</td>
      <td>{item.login}</td>
      <td>{item.firstName}</td>
      <td>{item.lastName}</td>
      <td>{item.student.login}</td>
      <td>
        <PencilSquare onClick={() => setShow(!show)} />
        {/*<AddUser*/}
        {/*  type={'Edytuj'}*/}
        {/*  name={'rodzica'}*/}
        {/*  user={user}*/}
        {/*  setUser={setUser}*/}
        {/*  show={show}*/}
        {/*  setShow={setShow}*/}
        {/*  handleAdd={handleAdd}*/}
        {/*  isLoading={isLoading}*/}
        {/*/>*/}
      </td>
      {/*<td onClick={handleDelete}>*/}
      {/*  {isDeleting ? <SpinnerComponent /> : <TrashFill />}*/}
      {/*</td>*/}
    </tr>
  );
};

export default ParentList;
